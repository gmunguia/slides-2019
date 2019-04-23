import React from "react";
import { Flex, Box } from "rebass";
import styled from "styled-components";

import { colors } from "../theme.js";

const Section = styled.section`
  text-align: center;
  font-size: 4rem;

  > h1 {
    font-size: 2.25em;
    text-transform: uppercase;
    color: ${colors.highlight};
  }
`;

const Title = ({ children }) => <Section>{children}</Section>;

export default Title;
