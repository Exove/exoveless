import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import { GetStaticPathsResult, GetStaticPropsResult } from "next";
import { DrupalNode } from "next-drupal";
import Head from "next/head";

import { drupal } from "lib/drupal";
import { Layout } from "templates/layout";
import { NodeArticle } from "templates/node--article";
import { NodeBasicPage } from "templates/node--basic-page";

const RESOURCE_TYPES = ["node--page", "node--article"];

interface NodePageProps {
  resource: DrupalNode;
}

export default function NodePage({ resource }: NodePageProps) {
  if (!resource) return null;

  return (
    <Layout>
      <Head>
        <title>{resource.title}</title>
        <meta name="description" content="A Next.js site powered by Drupal." />
      </Head>
      {resource.type === "node--page" && <NodeBasicPage node={resource} />}
      {resource.type === "node--article" && <NodeArticle node={resource} />}
    </Layout>
  );
}

export async function getStaticPaths(context): Promise<GetStaticPathsResult> {
  return {
    paths: await drupal.getStaticPathsFromContext(RESOURCE_TYPES, context),
    fallback: "blocking",
  };
}

export async function getStaticProps(
  context,
): Promise<GetStaticPropsResult<NodePageProps>> {
  const path = await drupal.translatePathFromContext(context);

  if (!path) {
    return {
      notFound: true,
    };
  }

  const type = path.jsonapi?.resourceName;

  const resource = await drupal.getResourceFromContext<DrupalNode>(
    path,
    context,
    type === "node--article"
      ? {
          params: new DrupalJsonApiParams()
            .addInclude([
              "field_media_image.field_media_image",
              "uid.user_picture",
              "field_paragraphs",
            ])
            .addFields("node--article", [
              "title",
              "path",
              "field_media_image",
              "status",
              "created",
              "body",
              "field_paragraphs",
            ])
            .addFields("media--image", ["field_media_image"])
            .addFields("file--file", ["uri", "resourceIdObjMeta"])
            .addSort("created", "DESC")
            .getQueryObject(),
        }
      : undefined,
  );

  if (!resource) {
    throw new Error(`Failed to fetch resource: ${path.jsonapi?.individual}`);
  }

  // If we're not in preview mode and the resource is not published,
  // Return page not found.
  if (!context.preview && resource?.status === false) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      resource,
    },
  };
}
