import ListChanel from '../screens/ListChanel';
import MenuSide from '../components/MenuSide';
import { DrawerNavigator } from 'react-navigation';
import React from 'react';
const DrawerNavigation = DrawerNavigator({
   Main: { screen: ListChanel },
}, {
  headerMode: 'screen',
  contentComponent: props => <MenuSide {...props} />
});

export default DrawerNavigation;
