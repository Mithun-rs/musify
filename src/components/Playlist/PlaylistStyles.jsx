import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    lightContainer: {
      flex: 1,
      backgroundColor: "white",
    },
    darkContainer: {
      flex: 1,
      backgroundColor: "black",
    },
    lightHeader: {
      fontSize: 20,
      fontWeight: "bold",
      color: "black",
      paddingVertical: 8,
      backgroundColor: "#f4f4f4",
      paddingLeft: 10,
    },
    darkHeader: {
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
      paddingVertical: 8,
      backgroundColor: "#333",
      paddingLeft: 10,
    },
    itemContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 10,
      paddingLeft: 10,
    },
    image: {
      width: 55,
      height: 50,
      borderRadius: 10,
      marginRight: 10,
    },
    lightText: {
      fontSize: 16,
      color: "black",
      flex: 1,
    },
    darkText: {
      fontSize: 16,
      color: "white",
      flex: 1,
    },
    lightmodalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    darkmodalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.27)",
    },
    lightmodalView: {
      width: 300,
      padding: 20,
      backgroundColor: "white",
      borderRadius: 10,
      alignItems: "center",
    },
    darkmodalView: {
      width: 300,
      padding: 20,
      backgroundColor: "black",
      borderRadius: 10,
      alignItems: "center",
    },
    lightmodalText: {
      fontSize: 18,
      marginBottom: 15,
      textAlign: "center",
    },
    darkmodalText: {
      fontSize: 18,
      color:'white',
      marginBottom: 15,
      textAlign: "center",
    },
    button: {
      backgroundColor: "orange",
      padding: 6,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
      marginRight:5,
    },
    buttonText: {
      fontWeight: "bold",
    },
  });
  
  export default styles;
  