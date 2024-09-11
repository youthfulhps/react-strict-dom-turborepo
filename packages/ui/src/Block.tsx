import * as React from 'react';
import { html } from 'react-strict-dom';

export function Block() {
  return (
    <>
      <html.div data-testid="testid" role="none">
        div
      </html.div>
      <html.span suppressHydrationWarning={true}>span</html.span>
      <html.p>paragraph</html.p>

      <html.div />

      <html.span>
        <html.a href="https://google.com">anchor</html.a>,<html.code>code</html.code>,
        <html.em>em</html.em>,<html.strong>strong</html.strong>,
        <html.span>
          H<html.sub>2</html.sub>0
        </html.span>
        ,
        <html.span>
          E=mc<html.sup>2</html.sup>
        </html.span>
      </html.span>
    </>
  );
}
