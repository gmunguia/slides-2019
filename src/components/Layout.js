import React from "react";
import styled from "styled-components";

import ThemedBox from "./ThemedBox.js";

const Layout = ({ children, borderless = false }) => (
  // Even in borderless, 2vw is kept because the projector we use is always slightly zoomed.
  <ThemedBox width="100vw" p={borderless ? "2vw" : "8vw"}>
    {children}
  </ThemedBox>
);

export default Layout;
