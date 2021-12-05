import React from "react";
import { View, Text } from "react-native";
import { VictoryPie } from "victory-native";

import Investment from "../Investment";

import { useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { StyleSheet } from "react-native";

const PieChartStyles = StyleSheet.create({
    pieChartText: {
        color: '#fff',
        fontSize: 40,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
});

const DashboardPieChart:React.FC<{investments:Investment[]}> = (investments) => {

    const chartData = investments.investments.map((item) => {
        return{
            x: item.amount,
            y: item.amount,
            label: " "
        }
    })

    const CalcTotal = () => {
        var total = 0;
        chartData.map((item) => {
            total += item.y
        })
        
        return total;
    }

    const total = CalcTotal();

    return (
        <View>
            <VictoryPie 
                innerRadius={140}
                radius={160}
                data={chartData}
            />
            <Text style={PieChartStyles.pieChartText}>${total}</Text>
        </View>
    )
}

export default DashboardPieChart;