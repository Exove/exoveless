import type {
  AccordionBlock as AccordionBlockType,
  CarouselBlock as CarouselBlockType,
  ContactsBlock as ContactsBlockType,
  DynamicListBlock as DynamicListBlockType,
  LargeFeaturedPostBlock as LargeFeaturedPostBlockType,
  LinkListBlock as LinkListBlockType,
  QuoteBlock as QuoteBlockType,
  RichTextBlock as RichTextBlockType,
  SmallFeaturedPostsWrapperBlock as SmallFeaturedPostsWrapperBlockType,
  TabsBlock as TabsBlockType,
  VideoEmbedBlock as VideoEmbedBlockType,
} from "@/payload-types";
import type { TableNodeTypes } from "@/types/table";
import { DefaultNodeTypes, SerializedBlockNode } from "@payloadcms/richtext-lexical";
import { AccordionBlock } from "./blocks/AccordionBlock";
import CarouselBlock from "./blocks/CarouselBlock";
import { ContactsBlock } from "./blocks/ContactsBlock";
import DynamicListBlock from "./blocks/DynamicListBlock";
import { LargeFeaturedPostBlock } from "./blocks/LargeFeaturedPostBlock";
import { LinkListBlock } from "./blocks/LinkListBlock";
import { QuoteBlock } from "./blocks/QuoteBlock";
import { RichTextBlock } from "./blocks/RichTextBlock";
import SmallFeaturedPostsBlock from "./blocks/SmallFeaturedPostsBlock";
import { TabsBlock } from "./blocks/TabsBlock";
import { VideoEmbedBlock } from "./blocks/VideoEmbedBlock";
import { TextRenderer } from "./TextRenderer";

type BaseBlockTypes =
  | AccordionBlockType
  | CarouselBlockType
  | QuoteBlockType
  | RichTextBlockType
  | VideoEmbedBlockType
  | LinkListBlockType
  | LargeFeaturedPostBlockType
  | SmallFeaturedPostsWrapperBlockType
  | ContactsBlockType
  | DynamicListBlockType
  | TabsBlockType;

export type NodeTypes = DefaultNodeTypes | SerializedBlockNode<BaseBlockTypes> | TableNodeTypes;
type BlockTypes = BaseBlockTypes;

type Props = {
  nodes?: NodeTypes[];
  blocks?: BlockTypes[];
  context?: "article" | "frontpage";
};

export const BlockRenderer = ({ nodes, blocks, context }: Props) => {
  if (!nodes && !blocks) return null;

  const renderBlock = (block: BaseBlockTypes) => {
    switch (block.blockType) {
      case "accordion":
        return <AccordionBlock key={block.id} block={block} />;
      case "carousel":
        return <CarouselBlock key={block.id} block={block} />;
      case "quote":
        return <QuoteBlock key={block.id} block={block} />;
      case "richText":
        return <RichTextBlock key={block.id} block={block} />;
      case "tabs":
        return <TabsBlock key={block.id} block={block} />;
      case "videoEmbed":
        return <VideoEmbedBlock key={block.id} block={block} />;
      case "contacts":
        return <ContactsBlock context={context} key={block.id} block={block} />;
      case "linkList":
        return <LinkListBlock context={context} key={block.id} block={block} />;
      case "largeFeaturedPost":
        return <LargeFeaturedPostBlock key={block.id} block={block} />;
      case "smallFeaturedPostsWrapper":
        return <SmallFeaturedPostsBlock key={block.id} block={block} />;
      case "dynamicList":
        return <DynamicListBlock key={block.id} block={block} />;
      default:
        return null;
    }
  };

  const renderNodes = (nodesToRender: NodeTypes[]) => {
    return nodesToRender.map((node, index) => {
      if (
        node.type === "text" ||
        node.type === "heading" ||
        node.type === "list" ||
        node.type === "listitem" ||
        node.type === "paragraph" ||
        node.type === "quote" ||
        node.type === "link" ||
        node.type === "horizontalrule" ||
        node.type === "linebreak" ||
        node.type === "upload" ||
        node.type === "table" ||
        node.type === "tablerow" ||
        node.type === "tablecell"
      ) {
        return <TextRenderer key={index} node={node} index={index} />;
      }

      if (node.type === "block" && node.fields) {
        return renderBlock(node.fields);
      }

      return null;
    });
  };

  const renderBlocks = (blocksToRender: BlockTypes[]) => {
    return blocksToRender.map(renderBlock);
  };

  if (nodes) return renderNodes(nodes);
  if (blocks) return renderBlocks(blocks);

  return null;
};
