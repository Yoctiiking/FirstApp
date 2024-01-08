import React, { useState } from "react";
import { 
  Text,
  View,
  StyleSheet,
 } from "react-native";

 const Products = ( {name} ) => {
    return (
        <View style = {styles.items}>
            <Text style = {styles.element}>{name}</Text>
        </View>
    )
 }

const styles = StyleSheet.create({  
    items:{
      marginVertical: 0,
    },
  
    element:{
      padding: 20,
      fontSize: 17,
      backgroundColor: "lightpink",
      marginVertical: 6,
    }
  });
  
  export default Products;