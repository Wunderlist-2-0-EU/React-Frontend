import React from 'react';
import { connect } from 'react-redux';
import {
  filterByDate,
  resetDisplayedTasks,
  filterByMonth,
  filterByCompleted
} from '../actionCreators';
import { Text, Stack } from '@chakra-ui/core';

export const SideNavLink = props => {
  return <Text {...props} />;
};

const LeftNavigation = props => {
  return (
    <Stack maxWidth='180px' mx='auto'>
      <SideNavLink
        className='side-nav__item'
        onClick={() => {
          props.resetDisplayedTasks(props.tasks.taskList);
          props.setShowCompleted(false);
        }}
      >
        All Tasks
      </SideNavLink>
      <SideNavLink
        className='side-nav__item'
        onClick={() => {
          props.filterByDate(Date.now());
          props.setShowCompleted(false);
        }}
      >
        Today
      </SideNavLink>
      <SideNavLink
        className='side-nav__item'
        onClick={() => {
          props.filterByMonth(Date.now());
          props.setShowCompleted(false);
        }}
      >
        This Month
      </SideNavLink>
      <SideNavLink
        className='side-nav__item'
        onClick={() => {
          props.filterByCompleted();
          props.setShowCompleted(true);
        }}
      >
        Completed
      </SideNavLink>
    </Stack>
  );
};

export default connect(
  state => state,
  { filterByDate, resetDisplayedTasks, filterByMonth, filterByCompleted }
)(LeftNavigation);
