import React from "react";
import { View, Text } from "react-native";
import { VictoryPie } from "victory-pie";

import Investment from "../Investment";

import styles from "../../styles/mainStyles";
import { useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { StyleSheet } from "react-native";

const PieChartStyles = StyleSheet.create({
    pieChartText: {
        color: '#fff',
        fontSize: 64,
        height: 21,
        position: 'absolute',
        top: '41%',
        left: '41%'
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
                innerRadius={128}
                radius={160}
                data={chartData}
            />
            <Text style={PieChartStyles.pieChartText}>${total}</Text>
        </View>
    )
}

export default DashboardPieChart;