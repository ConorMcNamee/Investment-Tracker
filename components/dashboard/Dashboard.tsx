import React from "react";
import { useState } from "react";
import { View, Text, SectionList, ScrollView } from "react-native";
import { StyleSheet } from "react-native";

import DashboardPieChart from "./DashboardPieChart";
import Investment from "../Investment";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212032',
        alignItems: 'center',
      },
      listItem: {
        flexDirection: "row",
        justifyContent: "center",
        padding:16,
      },
  
      listContainer: {
        flexDirection: "row",
        backgroundColor: "#9C4717",
        width: 300,
        overflow: "hidden",
        justifyContent: "space-between",
  
        borderBottomRightRadius: 24,
        borderTopLeftRadius: 24,
      },
  
      listItemText: {
        color: '#fff',
        padding: 16,
        fontSize: 32,
        justifyContent: "space-between",
        textAlign: "center",
      },
  
      ListItemAmount: {
        color: '#fff',
        padding: 16,
        fontSize: 24,
        justifyContent: "space-between",
        textAlign: "center",
      },
  
      listItemLabel: {
        color: '#fff',
        padding: 16,
        fontSize: 24,
        justifyContent: "space-between",
        textAlign: "center",
      },
    
      text: {
        color: '#fff',
        fontSize: 32,
      },
});

const Dashboard = () => {

    const [investments, addInvestments] = useState<Investment[]>(
        [
            {id: 0, investmentTitle: 'Bitcoin', amount: 1000000, weekly: false, recurringAmount: 50},
            {id: 1, investmentTitle: 'Ethereum', amount: 100000, weekly: false, recurringAmount: 50},
            {id: 2, investmentTitle: 'XRP', amount: 100, weekly: false, recurringAmount: 50},
            {id: 3, investmentTitle: 'Luna ', amount: 100, weekly: false, recurringAmount: 50},
            {id: 4, investmentTitle: 'ASTRA ', amount: 400, weekly: false, recurringAmount: 50},
        ]
    );

    return (

        <View style={styles.container}>           
            <View>
                <DashboardPieChart investments={investments} />
            </View>
            
            <ScrollView>
                {
                    investments.map((investment) => {
                        return (
                                <View key={investment.id} style={styles.listItem}>
                                        <View style={styles.listContainer}>
                                            <Text style={styles.ListItemAmount}>${investment.amount}</Text>
                                            <Text style={styles.listItemLabel}>{investment.investmentTitle}</Text>
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