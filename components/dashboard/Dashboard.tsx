import React from "react";
import { useState } from "react";
import { View, Text } from "react-native";

import styles from "../../styles/mainStyles";

interface Investment {
    investmentTitle: string,
    amount: number,
    monthlyAmount: number
}


const Dashboard = () => {

    const [investments, addInvestments] = useState<Investment[]>();

    return (
        <View>
            <Text style={styles.text}>Hello World</Text>
        </View>
    );
}

export default Dashboard;