import React from "react";
import { storiesOf } from "@storybook/react";
import Badge from "./Badge";
storiesOf("Badge", module)
    .add("default",
        () => <Badge label="hey" />
    );