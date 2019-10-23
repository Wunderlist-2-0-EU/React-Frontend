// - Page to display existing todos

// ```jsx
// <Page>
//   <SideNav>
//     <NavItem onClick={/* Go to /today */}>Today<NavItem>
//     <NavItem onClick={/* Go to /this-week */}>This week<NavItem>
//     <NavItem onClick={/* Go to /this-month */}>This month<NavItem>
//   </SideNav>

//   {/* Based on the url, show the corresponding content*/}
//   <MainDisplay>
//     <Text>This week</Text>
//     <TodoList />
//   <MainDisplay>
// </Page>
// ```

import React from "react";
import { useRouteMatch, Link as RouterLink } from "react-router-dom";
import { Text } from "@chakra-ui/core";

export const SideNavLink = props => {
  const match = useRouteMatch();
  return <Text {...props} />;
};

// <SideNavLink to="/overdue"> Overdue </SideNavLink>

const LeftNavigation = () => {
  return (
    <div>
      <ul>
        <li>Overdue</li>
        <li>Today</li>
        <li>Month</li>
        <li>All Tasks</li>
        <li>Trash</li>
      </ul>
    </div>
  );
};

export default LeftNavigation;
