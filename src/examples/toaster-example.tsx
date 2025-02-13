"use client";

import { toast } from "sonner";
import Button from "@/components/button/button";
import ContentSection from "@/components/containers/content-section";
import Heading from "@/components/heading/heading";
import CodeBlock from "./code-block/code-block";

export default function ToasterExample() {
  return (
    <ContentSection>
      <div className="mb-20 border-b pb-4">
        <Heading level="h2" size="lg" className="mb-0">
          Toast Notifications
        </Heading>
      </div>
      <div className="gap-5 lg:flex">
        <div className="lg:w-72"></div>
        <div className="flex-1">
          <div className="flex flex-wrap gap-4">
            <Button
              style="secondary"
              size="sm"
              onClick={() => toast.success("Success notification")}
            >
              Success
            </Button>
            <Button
              style="secondary"
              size="sm"
              onClick={() => toast.error("Error notification")}
            >
              Error
            </Button>
            <Button
              style="secondary"
              size="sm"
              onClick={() =>
                toast.promise(
                  () => new Promise((resolve) => setTimeout(resolve, 2000)),
                  {
                    loading: "Loading...",
                    success: "Promise resolved",
                    error: "Promise rejected",
                  },
                )
              }
            >
              Promise
            </Button>
          </div>
        </div>
      </div>
      <CodeBlock>
        {`
// See toaster-example.tsx
`}
      </CodeBlock>
    </ContentSection>
  );
}
