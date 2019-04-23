import React from "react";
import styled from "styled-components";

import ThemedBox from "./ThemedBox.js";

const Box = styled(ThemedBox)`
  text-align: center;
`;

const LayoutCentered = ({ children, borderless = false }) => (
  // Even in borderless, 2vw is kept because the projector we use is always slightly zoomed.
  <Box p={borderless ? "2vw" : "10vw"}>{children}</Box>
);

export default LayoutCentered;
