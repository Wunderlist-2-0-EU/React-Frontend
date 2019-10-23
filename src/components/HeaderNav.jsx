import React from "react";
import { Box, Text, Heading } from "@chakra-ui/core";
import SearchForm from "./SearchForm";

function HeaderNav() {
  return (
    <Box backgroundColor="cyan">
      <Heading size="lg" marginLeft="100px">
        Wunderlist 2.0
      </Heading>
      <SearchForm />
    </Box>
  );
}

export default HeaderNav;
