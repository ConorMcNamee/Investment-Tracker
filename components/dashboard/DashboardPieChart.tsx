import React from "react";
import { View, Text } from "react-native";
import { VictoryPie } from "victory-native";

import Investment from "../Investment";

import styles from "../../styles/mainStyles";
import { useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

const DashboardPieChart:React.FC<{investments:Investment[]}> = (investments) => {

    const chartData = investments.investments.map((item) => {
        return{
            x: item.investmentTitle,
            y: item.amount
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
                innerRadius={100}
                data={chartData}
            />
            <Text>{total}</Text>
        </View>
    )
}

export default DashboardPieChart;