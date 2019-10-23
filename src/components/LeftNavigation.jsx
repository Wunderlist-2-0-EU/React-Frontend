import React from 'react';
import { connect } from 'react-redux';
import { useRouteMatch, Link as RouterLink } from 'react-router-dom';
import { filterByDate, resetDisplayedTasks } from '../actionCreators';
import { Text, Stack } from '@chakra-ui/core';

export const SideNavLink = props => {
  const match = useRouteMatch();
  return <Text {...props} />;
};

const LeftNavigation = props => {
  debugger
  return (
    <Stack maxWidth='180px' mx='auto'>
      <SideNavLink onClick={() => props.resetDisplayedTasks(props.tasks.taskList)}>All Tasks</SideNavLink>
      <SideNavLink onClick={() => props.filterByDate(Date.now())}>
        Today
      </SideNavLink>
      <SideNavLink>Daily</SideNavLink>
    </Stack>
  );
};

export default connect(
  state => state,
  { filterByDate, resetDisplayedTasks }
)(LeftNavigation);
