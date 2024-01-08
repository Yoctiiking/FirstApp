import React, { useState } from "react";
import { 
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
 } from "react-native";

const AddProduct = ({submitHandler}) => {

    const [product, setProduct] = useState("");

    const inputHandler = (val) => {
        setProduct(val);
      };

    return (
        <View style = {styles.inputContainer}>
            <TextInput
            style = {styles.textInput}
            placeholder = "Nouveau produit"
            onChangeText = {inputHandler}
            value = {product}
            cursorColor={"#0099ff"}
            />
            <Button 
            title="Valider"
            onPress={ () => submitHandler(product, setProduct) }
            disabled={product.trim() === "" ? true : false}
            />
      </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
      flexDirection: "row",
      marginBottom: 15,
    },
  
    textInput:{
      borderColor: "grey",
      borderWidth: 1,
      padding: 5,
      paddingLeft: 9,
      fontSize: 19,
      flexGrow: 1,
      maxWidth: "77%",
    },
  });
  export default AddProduct;