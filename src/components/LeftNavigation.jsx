import React from "react";
import { useRouteMatch, Link as RouterLink } from "react-router-dom";
import { Text, Stack } from "@chakra-ui/core";

export const SideNavLink = props => {
  const match = useRouteMatch();
  return <Text {...props} />;
};

// <SideNavLink to="/overdue"> Overdue </SideNavLink>

const LeftNavigation = () => {
  return (
    <Stack maxWidth="180px" mx="auto">
      <SideNavLink>Overdue</SideNavLink>
      <SideNavLink>Today</SideNavLink>
      <SideNavLink>Daily</SideNavLink>
    </Stack>
  );
};

export default LeftNavigation;
