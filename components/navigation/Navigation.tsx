import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from "../dashboard/Dashboard";

const Tab = createBottomTabNavigator();

const Navigation = () => {

    return (
        <Tab.Navigator
            screenOptions = {({route}) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#14141F',
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    elevation: 0,
                    height: 80,

                },
                tabBarActiveTintColor: '#fff',
            })}
        >
            <Tab.Screen name="Dashboard" component={Dashboard}/>
        </Tab.Navigator>
    );
}

export default Navigation;