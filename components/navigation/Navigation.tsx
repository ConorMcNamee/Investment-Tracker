import React from "react";
import { View, Text, Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from "../dashboard/Dashboard";
import AddInvestment from "../dataStorage/AddInvestment";
import VisualiseInvestments from "../visualise-investments/VisualiseInvestments";

const Tab = createBottomTabNavigator();

const Navigation = () => {

    return (
        <Tab.Navigator
            screenOptions = {({route}) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#14141F',
                    borderTopLeftRadius: 32,
                    borderTopRightRadius: 32,
                    elevation: 0,
                    height: 80,
                    position: 'absolute',
                },
                tabBarActiveTintColor: '#fff',
            })}
        >
            <Tab.Screen name="Dashboard" component={Dashboard} options={{
                tabBarIcon: ({focused}) => (
                    <View>
                        <Image 
                            source={require('../../assets/dashboard.png')}
                            style={{
                                width: 45, 
                                height: 45,
                            }}
                        />
                    </View>
                )
            }} />

            <Tab.Screen name="Add Investment" component={AddInvestment} options={{
                tabBarIcon: ({focused}) => (
                    <View>
                        <Image 
                            source={require('../../assets/add.png')}
                            style={{
                                width: 45, 
                                height: 45,
                            }}
                        />
                    </View>
                )
            }} />

            <Tab.Screen name="Visualise Investment" component={VisualiseInvestments} options={{
                tabBarIcon: ({focused}) => (
                    <View>
                        <Image 
                            source={require('../../assets/engineering.png')}
                            style={{
                                width: 45, 
                                height: 45,
                            }}
                        />
                    </View>
                )
            }} />

        </Tab.Navigator>
    );
}

export default Navigation;