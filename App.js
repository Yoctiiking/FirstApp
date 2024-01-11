import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ToastAndroid,
  Modal,
  Pressable,
} from "react-native";
import Products from "./components/Product";
import AddProduct from "./components/AddProduct";

export default function App() {
  const [myProducts, setMyProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const submitHandler = (product) => {
    const newProduct = product.trim();
    if (newProduct !== "") {
      const idString = Date.now().toString();
      setMyProducts((currentMyProducts) => [
        { key: idString, name: newProduct },
        ...currentMyProducts,
      ]);
      console.log(myProducts);
    }
  };

  const deleteProduct = (key) => {
    setShowModal(true);
    if(showModal === false){
      setMyProducts((currentMyProducts) => {
        currentMyProducts.map( (product) => product.key === key ? ToastAndroid.show(`Vous avez supprimé ${product.name}`, 3000) : null )
        return currentMyProducts.filter((product) => product.key !== key);
      });
    }
  };

  return (
    <View style={styles.container}>
      <Modal
      visible={showModal}
      animationType="slide"
      onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.centered}>
          <View style={styles.modalView}>
            <Text>Voulez vous vraiment supprimer cet item ?</Text>
            <Pressable onPress={() => setShowModal(false)}>
              <Text style={{alignSelf: "flex-end", marginVertical: 19}}>Oui</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <AddProduct submitHandler={submitHandler} />
      <FlatList
        data={myProducts}
        renderItem={({ item }) => (
          <Products
            name={item.name}
            idString={item.key}
            deleteProduct={deleteProduct}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },

  centered:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalView:{
    margin: 20,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
  }
});
