import { default as theme, syntaxHighlighterPrism } from "@mdx-deck/themes";
import solarizedLight from "react-syntax-highlighter/dist/styles/prism/solarizedlight";

export const colors = {
  text: "#c4e4f2",
  background: "#272727",
  highlight: "#f7d6e0",
  link: "#f7d6e0"
};

export default syntaxHighlighterPrism({
  ...theme,
  aspectRatio: 3 / 4,
  font: "Futura, sans-serif",
  css: {
    "text-align": "left"
  },
  h1: {
    fontWeight: 600
  },
  monospace: '"Dank Mono", monospace',
  prism: {
    style: solarizedLight
  },
  img: {
    maxWidth: "100%"
  },
  weights: 400,
  li: {
    paddingBottom: "0.5em",
    fontFamily: '"Dank Mono", monospace'
  },
  ul: {
    paddingLeft: "0.5em",
    display: "inline-block"
  },
  colors
});
