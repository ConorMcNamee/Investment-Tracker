import React from "react";
import { useState } from "react";
import { View, Text, SectionList, ScrollView } from "react-native";

import styles from "../../styles/mainStyles";

import DashboardPieChart from "./DashboardPieChart";
import Investment from "../Investment";

const Dashboard = () => {

    const [investments, addInvestments] = useState<Investment[]>(
        [
            {id: 0, investmentTitle: 'Bitcoin', amount: 100, weekly: false, recurringAmount: 50},
            {id: 1, investmentTitle: 'Ethereum', amount: 100, weekly: false, recurringAmount: 50},
            {id: 2, investmentTitle: 'XRP', amount: 100, weekly: false, recurringAmount: 50},
            {id: 3, investmentTitle: 'Luna ', amount: 100, weekly: false, recurringAmount: 50},
        ]
    );

    return (
        <View>
            <View>
                <DashboardPieChart investments={investments} />
            </View>
            
            <ScrollView>
                {
                    investments.map((investment) => {
                        return (
                                <View key={investment.id} style={styles.listItem}>
                                        <View style={styles.listContainer}>
                                            <Text style={styles.listItemText}>${investment.amount}</Text>
                                            <Text style={styles.listItemText}>{investment.investmentTitle}</Text>
                                        </View>
                                </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
}

export default Dashboard;