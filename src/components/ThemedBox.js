import { Box } from "rebass";
import styled from "styled-components";

const ThemedBox = styled(Box)`
  font-size: 35px;

  pre {
    font-size: 0.5em;
  }

  h3 {
    font-size: 1.15em;
  }

  h1 {
    font-size: 2em;
  }
`;

export default ThemedBox;
