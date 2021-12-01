import React from "react";
import { View, Text } from "react-native";
import { Path, Svg, Circle } from "react-native-svg";

import Investment from "../Investment";

import styles from "../../styles/mainStyles";

const PieChart = () => {

    return (
        <View>
            <Svg height="300" width="300">
                <Circle cx="150" cy="150" r="140" stroke="#fff" strokeWidth="20" />
            </Svg>
        </View>
    )
}

export default PieChart;