import ContentSection from "../components/containers/content-section";
import Heading from "../components/heading/heading";
import Notification from "../components/notification/notification";
import CodeBlock from "./code-block/code-block";
import CodeHighlight from "./code-block/code-highlight";

export default function NotificationExample() {
  return (
    <ContentSection>
      <div className="mb-20 border-b pb-4">
        <Heading level="h2" size="large" zeroMargin>
          Notification
        </Heading>
      </div>
      <div className="gap-5 lg:flex">
        <div className="lg:w-72"></div>
        <div className="flex-1">
          <div className="mb-6">
            <Notification>
              Change a few things up and try submitting again.
            </Notification>
          </div>
          <div className="mb-6">
            <Notification type="success">
              <b className="font-bold">Success!</b> Change a few things up and
              try submitting again.
            </Notification>
          </div>
          <div className="mb-6">
            <Notification type="error">
              <b className="font-bold">Error!</b> Change a few things up and try
              submitting again.
            </Notification>
          </div>
          <div className="mb-6">
            <Notification type="warning">
              <b className="font-bold">Warning!</b> Change a few things up and
              try submitting again.
            </Notification>
          </div>
        </div>
      </div>
      <CodeBlock>
        <CodeHighlight title="notification-example.tsx">
          {`
<Notification type="error">
  Change a few things up and try submitting again!
</Notification>
          `}
        </CodeHighlight>
      </CodeBlock>
    </ContentSection>
  );
}
