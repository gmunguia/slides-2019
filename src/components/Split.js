import React from "react";
import { Flex, Box } from "rebass";
import { useSteps } from "@mdx-deck/components";

const Split = ({ children: offspring, stepped = false }) => {
  const children = React.Children.toArray(offspring);
  const step = stepped ? useSteps(children.length) : children.length;

  return (
    <Flex>
      {children.map((child, i) => (
        <Box
          key={child}
          width={1 / children.length}
          px={2}
          style={i < step ? {} : { visibility: "hidden" }}
        >
          {child}
        </Box>
      ))}
    </Flex>
  );
};

export default Split;
