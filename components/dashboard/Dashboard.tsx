import React from "react";
import { useState } from "react";
import { View, Text } from "react-native";

import styles from "../../styles/mainStyles";

interface Investment {
    id: number,
    investmentTitle: string,
    amount: number,
    monthlyAmount: number
}


const Dashboard = () => {

    const [investments, addInvestments] = useState<Investment[]>(
        [
            {id: 0, investmentTitle: 'bitcoin', amount: 100, monthlyAmount: 100},
            {id: 1, investmentTitle: 'Luna ', amount: 100, monthlyAmount: 100}
        ]
    );



    return (
        <View>
            {
                investments.map((investment) => {
                    return (
                        <Text style={styles.text} key={investment.id}>{investment.investmentTitle}</Text>
                    )
                })
            }
        </View>
    );
}

export default Dashboard;