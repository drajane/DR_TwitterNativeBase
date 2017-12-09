/* @flow */

import React from "react";
import { DrawerNavigator, TabNavigator } from "react-navigation";

import Home from "./components/home/";
import SideBar from "./components/sidebar";
import TabBarComponent from './TabBar';
import SearchScreen from './SearchScreen';
import Notifications from './Notifications';
import Messages from './Messages';


const HomeScreenTab = TabNavigator({
  Home: {screen: Home},
  Search: { screen: SearchScreen},
  Notif: {screen: Notifications}, 
  Message: {screen: Messages},
	},{
		tabBarComponent: props => (
		<TabBarComponent{...props} />), 
      tabBarPosition: 'top',
      animationEnabled: true,
      tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'grey',
      activeBackgroundColor: "#fff",
      inactiveBackgroundColor: "#fff",
      showIcon: true,
      showLabel: false,		
    },
 
  
} );

const DrawerExample = DrawerNavigator(
    {
      Home: { screen: HomeScreenTab },
    },
    {
      initialRouteName: "Home",
      contentOptions: {
        activeTintColor: "#e91e63"
      },
      contentComponent: props => <SideBar {...props} />
    }
  );


  export default DrawerExample;
  