import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>

        <View style={{
          backgroundColor: "green",
          padding: 20
        }}>
          <Text>search</Text>
        </View>
        <View style={{
          flex: 1,
          backgroundColor: "blue",
          padding: 20
        }}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
});

//SafeAreaView Only Supports IOS
//StatusBar.currentHeight Supports Android

