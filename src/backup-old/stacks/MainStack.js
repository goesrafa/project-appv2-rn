import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Inicio from '../screens/Inicio'
import Login from '../screens/Login'
import Cadastro from '../screens/Cadastro'
import MainTab from "./MainTab";

export default () => (
    <Stack.Navigator 
        initialRouteName="Inicio"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Inicio" component={Inicio}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="MainTab" component={MainTab}/>
    </Stack.Navigator>
)