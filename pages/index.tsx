import React from "react";
import Head from "next/head";
import { GetStaticPropsResult } from "next";
import { DrupalNode } from "next-drupal";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import { drupal } from "lib/drupal";
import { Layout } from "templates/layout";
import { NodeArticleTeaser } from "templates/node--article--teaser";

import Heading from "components/heading/heading";
import ContentSection from "components/containers/content-section";

interface IndexPageProps {
  nodes: DrupalNode[];
  mainMenu: any;
}

export default function IndexPage({ nodes, mainMenu }: IndexPageProps) {
  return (
    <Layout menus={mainMenu.items}>
      <Head>
        <title>Next Drupal</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>
      <div>
        <Heading level="h1" size="xl">
          Latest Articles
        </Heading>
        {nodes?.length ? (
          nodes.map((node) => (
            <div key={node.id}>
              <ContentSection>
                <NodeArticleTeaser node={node} />
              </ContentSection>
            </div>
          ))
        ) : (
          <p className="py-4">No nodes found</p>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<IndexPageProps>> {
  // Fetch all articles sorted by the user.
  const nodes = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    "node--article",
    context,
    {
      params: new DrupalJsonApiParams()
        .addInclude([
          "field_media_image.field_media_image",
          "uid.user_picture",
          "field_paragraphs",
        ])
        .addFields("media--image", ["field_media_image"])
        .addFields("file--file", ["uri", "resourceIdObjMeta"])
        .addSort("created", "ASC")
        .addPageLimit(5)
        .getQueryObject(),
    }
  );

  const mainMenu = await drupal.getMenu("main", {
    locale: "en",
    defaultLocale: "en",
  });

  return {
    props: {
      nodes,
      mainMenu,
    },
    revalidate: 10, // Activates ISR with 10 seconds period.
  };
}
