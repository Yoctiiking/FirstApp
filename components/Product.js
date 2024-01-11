import React from "react";
import { 
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
 } from "react-native";

 const Products = ( {name, idString, deleteProduct} ) => {
    return (
        <View style = {styles.items}>
            <Text style = {styles.element}>{name}</Text>
            <TouchableOpacity style={styles.delete} onPress={() => deleteProduct(idString)}
              activeOpacity = {0.45}>
            </TouchableOpacity>
        </View>
      
    )
 }

const styles = StyleSheet.create({  
    items:{
      flexDirection: 'row',
      marginVertical: 0,
    },
  
    element:{
      padding: 20,
      fontSize: 17,
      backgroundColor: "lightpink",
      marginVertical: 6,
      flexGrow: 1,
    },

    delete: {
      marginVertical: 6,
      width: "22%",
      backgroundColor: "#ff9999",
    }
  });
  
  export default Products;