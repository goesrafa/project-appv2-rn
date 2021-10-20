import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import Search from '../screens/Search'
import Agenda from '../screens/Agenda'
import Informacoes from '../screens/Informacoes'

import CustomTabBar from '../components/CustomTabBar'



const Tab = createBottomTabNavigator();

export default () => (

    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Agenda" component={Agenda} />
        <Tab.Screen name="Informacoes" component={Informacoes} />
    </Tab.Navigator>
);