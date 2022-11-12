import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from '../screens';
import {COLORS, icons} from '../constants';
import {TabIcon} from '../components';
import {View, Text} from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={icons.home} />
          ),
        }}
        name="HomeScreen"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={icons.search} />
          ),
        }}
        name="Search"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={icons.bookmark} />
          ),
        }}
        name="Bookmark"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={icons.settings} />
          ),
        }}
        name="Settings"
        component={Home}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
