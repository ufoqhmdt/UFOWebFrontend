import React from "react";

import { storiesOf, configure, addDecorator } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

import MyComponent from "../src/components/MyComponent";
import MyComponentMD from "../src/components/MyComponent.md";
// import base from 'paths.macro';
// import * as ufo from '../src/*.js';

addDecorator(story => (
  <div style={{ textAlign: "center" }}>
    <div>addDecorator</div>
    {story()}
  </div>
));
storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Component", module).add("With Markdown", () => <MyComponent />, {
  notes: { markdown: MyComponentMD }
});

storiesOf("My App/Buttons/Simple", module).add("with text", () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
));

storiesOf("My App/Buttons/Emoji", module).add("with some emoji", () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
));

// storiesOf(`Other|${base}/Dirname Example`, module)
//   .add('story 1', () => <BaseButton label="Story 1" />)
//   .add('story 2', () => <BaseButton label="Story 2" />);