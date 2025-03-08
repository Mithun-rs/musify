
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    lightContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
      },
      darkContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: 'black',
      },
      lightHead: {
        fontWeight: 'bold',
        color: 'orange',
        fontSize: 30,
      },
    darkHead: {
        fontWeight: 'bold',
        color: 'orange',
        fontSize: 30,
      },
      lightText: {
        marginTop: 10,
        fontSize: 35,
        color: 'black',
      },
    darkText: {
        marginTop: 10,
        fontSize: 35,
        color: 'white',
      },
      lightSearchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#ccc',
      },
      darkSearchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#666',
      },
      input: {
        flex: 1,
        height: 40,
        color: 'black',
      },
    });
    
    export default styles;
    