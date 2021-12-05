import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from "../dashboard/Dashboard";

const Tab = createBottomTabNavigator();

const Navigation = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Dashboard" component={Dashboard}/>
        </Tab.Navigator>
    );
}

export default Navigation;