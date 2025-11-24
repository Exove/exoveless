"use client";

import Heading from "@/components/Heading";
import ImageModal from "@/components/ImageModal";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/Table";
import { Link } from "@/i18n/routing";
import {
  IS_BOLD,
  IS_CODE,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
  IS_UNDERLINE,
} from "@/lib/node-format";
import { cn } from "@/lib/utils";
import type { Media } from "@/payload-types";
import type { TableCellNode } from "@/types/table";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { SerializedTextNode } from "@payloadcms/richtext-lexical";
import type {
  SerializedElementNode,
  SerializedLexicalNode,
} from "@payloadcms/richtext-lexical/lexical";
import Image from "next/image";
import { Fragment, useState } from "react";

/**
 * TextRenderer - Renders Lexical rich text nodes into React components
 *
 * This component recursively renders various types of Lexical nodes including:
 * - Text formatting (bold, italic, strikethrough, etc.)
 * - Structural elements (paragraphs, headings, lists)
 * - Interactive elements (links, images, tables)
 * - Special elements (quotes, horizontal rules, line breaks)
 */

type HeadingNode = SerializedElementNode & {
  tag: "h1" | "h2" | "h3" | "h4";
};

type ListNode = SerializedElementNode & {
  tag: "ul" | "ol";
  listType?: string;
};

type LinkNode = SerializedElementNode & {
  fields: {
    doc?: {
      relationTo: string;
      value: {
        id: number;
        title: string;
        slug: string;
      };
    };
    url?: string;
    newTab?: boolean;
    linkType?: "custom" | "internal";
  };
};

type UploadNode = SerializedElementNode & {
  value: Media;
  relationTo: string;
};

type NodeRendererProps = {
  node: SerializedLexicalNode;
  index: number;
};

export function TextRenderer({ node, index }: NodeRendererProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!node) return null;

  const renderChildren = (node: SerializedLexicalNode & { children?: SerializedLexicalNode[] }) => {
    if (!node.children) return null;
    return node.children.map((child: SerializedLexicalNode, i: number) => (
      <TextRenderer key={`${index}-${i}`} node={child} index={i} />
    ));
  };

  switch (node.type) {
    case "text": {
      const textNode = node as unknown as SerializedTextNode;
      if (!textNode.text) return null;
      let content: React.ReactNode = textNode.text;

      // Apply formatting using bitwise operations to handle combinations
      if (textNode.format & IS_BOLD) {
        content = <strong>{content}</strong>;
      }
      if (textNode.format & IS_ITALIC) {
        content = <em>{content}</em>;
      }
      if (textNode.format & IS_STRIKETHROUGH) {
        content = <span className="line-through">{content}</span>;
      }
      if (textNode.format & IS_UNDERLINE) {
        content = <span className="underline">{content}</span>;
      }
      if (textNode.format & IS_CODE) {
        content = <code>{content}</code>;
      }
      if (textNode.format & IS_SUBSCRIPT) {
        content = <sub>{content}</sub>;
      }
      if (textNode.format & IS_SUPERSCRIPT) {
        content = <sup>{content}</sup>;
      }

      return <Fragment key={index}>{content}</Fragment>;
    }
    case "paragraph":
      const children = renderChildren(node);
      // If there are no children, return null to avoid rendering an empty paragraph
      if (!children || (Array.isArray(children) && children.every((child) => !child))) return null;
      return (
        <p className="mx-auto mb-4 leading-relaxed" key={index}>
          {children}
        </p>
      );
    case "heading": {
      const headingNode = node as HeadingNode;
      const size = headingNode.tag === "h2" ? "md" : "sm";
      const nodeWithChildren = node as SerializedLexicalNode & { children?: SerializedTextNode[] };
      // Extract text content from all child nodes and concatenate into a single string
      const headingText = nodeWithChildren.children?.map((child) => child.text).join("") || "";
      return (
        <Heading level={headingNode.tag} size={size} className="mt-8">
          {headingText}
        </Heading>
      );
    }
    case "list": {
      const listNode = node as ListNode;
      const Tag = listNode.tag;
      const isOrderedList = Tag === "ol";
      return (
        <Tag
          className={cn(
            "mx-auto mb-4 space-y-2 pl-8",
            isOrderedList ? "list-decimal marker:font-medium" : "list-disc",
          )}
          key={index}
        >
          {renderChildren(node)}
        </Tag>
      );
    }
    case "listitem": {
      return (
        <li key={index} className="pl-2 leading-relaxed">
          {renderChildren(node)}
        </li>
      );
    }
    case "quote":
      return (
        <blockquote className="my-6 border-l-4 border-stone-700 pl-6 italic" key={index}>
          {renderChildren(node)}
        </blockquote>
      );
    case "link": {
      const linkNode = node as LinkNode;
      const { doc, url, newTab, linkType } = linkNode.fields;

      const href =
        linkType === "custom" ? url || "/" : doc ? `/${doc.relationTo}/${doc.value.slug}` : "/";
      const target = newTab ? "_blank" : undefined;
      const rel = newTab ? "noopener noreferrer" : undefined;

      return (
        <Link
          href={href}
          key={index}
          className="font-medium underline decoration-amber-500 underline-offset-2 hover:text-amber-500"
          target={target}
          rel={rel}
        >
          {renderChildren(node)}
          {url && <ArrowTopRightOnSquareIcon className="ml-1 inline h-4 w-4" />}
        </Link>
      );
    }
    case "upload": {
      const uploadNode = node as UploadNode;
      const { value } = uploadNode;

      if (!value || uploadNode.relationTo !== "media") return null;
      if (!value.url) return null;

      return (
        <>
          <figure className="mx-auto my-8" key={index}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="block w-full cursor-zoom-in"
              aria-label={`Open full screen view of ${value.alt}`}
            >
              <Image
                src={value.url}
                alt={value.alt}
                className="aspect-[3/2] w-full rounded-lg object-cover"
                width={784}
                height={1176}
                priority={false}
              />
            </button>
            {value.caption && (
              <figcaption className="mt-2 text-center text-sm text-stone-400">
                {value.caption}
              </figcaption>
            )}
          </figure>
          <ImageModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            src={value.url}
            alt={value.alt}
            caption={value.caption || undefined}
            width={value.width || 1920}
            height={value.height || 1080}
          />
        </>
      );
    }
    case "table": {
      const children = renderChildren(node);
      if (!children || (Array.isArray(children) && children.every((child) => !child))) return null;

      // Separate first row (header) from body rows
      const childrenArray = Array.isArray(children) ? children : [children];
      const firstRow = childrenArray[0];
      const bodyRows = childrenArray.slice(1);

      return (
        <div className="my-8" key={index}>
          <Table>
            <TableHeader>{firstRow}</TableHeader>
            {bodyRows.length > 0 && <TableBody>{bodyRows}</TableBody>}
          </Table>
        </div>
      );
    }
    case "tablerow": {
      const children = renderChildren(node);
      if (!children || (Array.isArray(children) && children.every((child) => !child))) return null;

      return <TableRow key={index}>{children}</TableRow>;
    }
    case "tablecell": {
      const tableCellNode = node as TableCellNode;
      const children = renderChildren(node);
      // headerState: 1 = header cell, 0 = regular cell
      const isHeader = tableCellNode.headerState === 1;

      if (!children || (Array.isArray(children) && children.every((child) => !child))) return null;

      const CellComponent = isHeader ? TableHead : TableCell;

      return (
        <CellComponent
          key={index}
          colSpan={tableCellNode.colSpan}
          rowSpan={tableCellNode.rowSpan}
          style={
            tableCellNode.backgroundColor
              ? { backgroundColor: tableCellNode.backgroundColor }
              : undefined
          }
        >
          {children}
        </CellComponent>
      );
    }
    case "horizontalrule":
      return <hr className="mx-auto my-8 border-t border-stone-600" key={index} />;
    case "linebreak":
      return <br className="col-start-2" key={index} />;
    default:
      return null;
  }
}
