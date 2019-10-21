- Page to display existing todos

```jsx
<Page>
  <SideNav>
    <NavItem onClick={/* Go to /today */}>Today<NavItem>
    <NavItem onClick={/* Go to /this-week */}>This week<NavItem>
    <NavItem onClick={/* Go to /this-month */}>This month<NavItem>
  </SideNav>

  {/* Based on the url, show the corresponding content*/}
  <MainDisplay>
    <Text>This week</Text>
    <TodoList />
  <MainDisplay>
</Page>
```