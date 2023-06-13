import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Crowdly</Text>
      <Ionicons name="chatbubble" size={24} color="black" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 20,
    // margin: 5,
  },
  logo: {
    fontFamily: "sans-serif",
    fontSize: 25,
    fontWeight: 600,
    color: "darkcyan",
  },
});
