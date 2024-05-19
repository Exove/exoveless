import ContentSection from "components/containers/content-section";
import Heading from "components/heading/heading";
import RichText from "components/rich-text/rich-text";
import CodeBlock from "pages/components/code-block";

export default function RichTextExample() {
  return (
    <ContentSection>
      <div className="mb-20 border-b pb-4">
        <Heading level="h2" size="large" zeroMargin>
          Rich Text
        </Heading>
      </div>
      <div className="gap-5 lg:flex">
        <div className="lg:w-72"></div>
        <div className="flex-1">
          <RichText>
            <p className="lead">
              <strong>Lead paragraph.</strong> Until now, trying to style an
              article, document, or blog post with Tailwind has been a tedious
              task that required a keen eye for typography and a lot of complex
              custom CSS.
            </p>
            <p>
              Paragraph. By default, Tailwind removes all of the default browser
              styling from paragraphs, headings, lists and more.{" "}
              <a href="">Styled link here.</a> This ends up being really useful
              for building application UIs because you spend less time undoing
              user-agent styles, but when you <em>really are</em> just trying to
              style some content that came from a rich-text editor in a CMS or a
              markdown file, it can be surprising and unintuitive.
            </p>
            <blockquote>
              <p>
                Blockquote. Why is Tailwind removing the default styles on my{" "}
                <code>h1</code> elements? How do I disable this? What do you
                mean I lose all the other base styles too?
              </p>
            </blockquote>
            <p>
              Now I`m going to show you an example of an unordered list to make
              sure that looks good, too:
            </p>
            <ul>
              <li>So here is the first item in this list.</li>
              <li>In this example we`re keeping the items short.</li>
              <li>Later, we`ll use longer, more complex list items.</li>
            </ul>
            <h2>H2. What if we stack headings?</h2>
            <h3>H3. We should make sure that looks good, too.</h3>
            <p>Finally, let`s take a look at styling tables.</p>
            <table className="table-auto">
              <thead>
                <tr>
                  <th>Make</th>
                  <th>Model</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Toyota</td>
                  <td>Corolla</td>
                  <td>1999</td>
                </tr>
                <tr>
                  <td>Honda</td>
                  <td>Civic</td>
                  <td>2003</td>
                </tr>
                <tr>
                  <td>Ford</td>
                  <td>Focus</td>
                  <td>2010</td>
                </tr>
              </tbody>
            </table>
          </RichText>
        </div>
      </div>
      <CodeBlock>
        {`
<RichText>
  <p>Regular paragraph text.</p>
  <blockquote>
    <p>Blockquote text.</p>
  </blockquote>
</RichText>
          `}
      </CodeBlock>
    </ContentSection>
  );
}
