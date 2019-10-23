import React from 'react';
import { connect } from 'react-redux';
import { useRouteMatch, Link as RouterLink } from 'react-router-dom';
import { filterByDate } from '../actionCreators';
import { Text, Stack } from '@chakra-ui/core';

export const SideNavLink = props => {
  const match = useRouteMatch();
  return <Text {...props} />;
};

// <SideNavLink to="/overdue"> Overdue </SideNavLink>

const LeftNavigation = props => {
  return (
    <Stack maxWidth='180px' mx='auto'>
      <SideNavLink>Overdue</SideNavLink>
      <SideNavLink onClick={() => props.filterByDate(Date.now())}>
        Today
      </SideNavLink>
      <SideNavLink>Daily</SideNavLink>
    </Stack>
  );
};

export default connect(
  state => state,
  { filterByDate }
)(LeftNavigation);
