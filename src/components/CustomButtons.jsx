import React from "react";
import { PseudoBox } from "@chakra-ui/core";

export function SubtleButton1(props) {
  return (
    <PseudoBox
      as="button"
      bg="cyan.50"
      color="cyan.600"
      px={4}
      py={2}
      _hover={{ bg: "cyan.100" }}
      _active={{ bg: "cyan.200" }}
      {...props}
    />
  );
}

export function SubtleButton2(props) {
  return (
    <PseudoBox
      as="button"
      bg="red.400"
      color="white"
      px={4}
      py={2}
      _hover={{ bg: "red.500" }}
      _active={{ bg: "red.600" }}
      {...props}
    />
  );
}
