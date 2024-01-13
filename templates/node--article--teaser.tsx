import Image from "next/image";
import Link from "next/link";
import { DrupalNode } from "next-drupal";

import { absoluteUrl, formatDate } from "lib/utils";
import Button from "components/button/button";

interface NodeArticleTeaserProps {
  node: DrupalNode;
}

export function NodeArticleTeaser({ node, ...props }: NodeArticleTeaserProps) {
  return (
    <div {...props}>
      <h2 className="mb-4 text-xl font-bold underline">
        <Link href={node.path.alias ? node.path.alias : ""}>{node.title}</Link>
      </h2>
      <div className="mb-5">
        <div>Date: {formatDate(node.created)}</div>
        <div>User: {node.uid.display_name}</div>
      </div>
      <Image
        src={absoluteUrl(node.field_media_image.field_media_image.uri.url)}
        width={400}
        height={200}
        alt="Decorative image"
        priority
      />
    </div>
  );
}
