import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#212032',
      alignItems: 'center',
    },

    listItem: {
      flexDirection: "row",
      padding:16,
    },

    listContainer: {
      flexDirection: "row",
      backgroundColor: "#9C4717",
      padding: 8,
      overflow: "hidden",
      justifyContent: "center",

      borderTopRightRadius: 24,
      borderBottomLeftRadius: 24,
    },

    listItemText: {
      color: '#fff',
      padding: 16,
      fontSize: 32,
      justifyContent: "space-between",
      textAlign: "center",
    },
  
    text: {
      color: '#fff',
      fontSize: 32,
    },
  });

export default styles;