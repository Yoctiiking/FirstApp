import React, { useState } from "react";
import { 
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  Button,
  FlatList,
 } from "react-native";
import Products from "./components/Product";
import AddProduct from "./components/AddProduct";

export default function App() {

  const [myProducts, setMyProducts] = useState([]);

  const submitHandler = (product, setProduct) => {
    const newProduct = product.trim();
    if(newProduct !== "")
      {
        const idString = Date.now().toString();
        setMyProducts( currentMyProducts => [{key: idString, name: newProduct}, ...currentMyProducts] );
        console.log(myProducts);
      }
      setProduct("");
  };
  
  return(
    <View style={styles.container}>
      <AddProduct submitHandler={submitHandler}/>
      <FlatList
        data = {myProducts}
        renderItem = { ({item}) => <Products name={item.name} /> }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },

});
