import React from "react";
import { StatusBar, StyleSheet, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.components";
export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <RestaurantInfo/>
    </View>
  </SafeAreaView>
);
const styles = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight },
  search: {
    backgroundColor: "green",
    padding: 20,
  },
  list: {
    flex: 1,
    backgroundColor: "blue",
    padding: 20,
  },
});
