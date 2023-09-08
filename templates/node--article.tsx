import Image from "next/image";
import { DrupalNode } from "next-drupal";

import { absoluteUrl, formatDate } from "lib/utils";
import Paragraph from "components/paragraph/paragraph";

interface NodeArticleProps {
  node: DrupalNode;
}

export function NodeArticle({ node, ...props }: NodeArticleProps) {
  return (
    <article {...props}>
      <h1 className="mb-4 text-6xl font-black leading-tight">{node.title}</h1>
      <div className="mb-4">
        {node.uid?.display_name ? (
          <span>
            Posted by{" "}
            <span className="font-semibold">{node.uid?.display_name}</span>
          </span>
        ) : null}
        <span> - {formatDate(node.created)}</span>
      </div>
      {node.field_media_image && (
        <figure>
          <Image
            src={absoluteUrl(node.field_media_image.field_media_image.uri.url)}
            width={400}
            height={200}
            alt="Decorative image"
            priority
          />
          {node.field_media_image.resourceIdObjMeta.title && (
            <figcaption className="py-2 text-sm text-center text-gray">
              {node.field_media_image.resourceIdObjMeta.title}
            </figcaption>
          )}
        </figure>
      )}
      {node.body?.processed && (
        <div
          dangerouslySetInnerHTML={{ __html: node.body?.processed }}
          className="mt-6 font-serif text-xl leading-relaxed prose dark:prose-invert"
        />
      )}
      {node.field_paragraphs.map((paragraph, index) => {
        return (
          <div key={index}>
            <Paragraph fields={paragraph} />
          </div>
        );
      })}
    </article>
  );
}
