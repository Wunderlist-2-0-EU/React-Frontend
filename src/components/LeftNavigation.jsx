import React from 'react';
import { connect } from 'react-redux';
import { filterByDate, resetDisplayedTasks } from '../actionCreators';
import { Text, Stack } from '@chakra-ui/core';

export const SideNavLink = props => {
  return <Text {...props} />;
};

const day = new Date();
const nextDay = new Date(day);

const LeftNavigation = props => {
  return (
    <Stack className='side-nav__items' maxWidth='180px' mx='auto'>
      <SideNavLink
        className='side-nav__item'
        onClick={() => props.resetDisplayedTasks(props.tasks.taskList)}
      >
        All Tasks
      </SideNavLink>
      <SideNavLink
        className='side-nav__item'
        onClick={() => props.filterByDate(Date.now())}
      >
        Today
      </SideNavLink>
      <SideNavLink
        className='side-nav__item'
        onClick={() => props.filterByDate(nextDay.setDate(day.getDate() + 1))}
      >
        Tomorrow
      </SideNavLink>
    </Stack>
  );
};

export default connect(
  state => state,
  { filterByDate, resetDisplayedTasks }
)(LeftNavigation);
