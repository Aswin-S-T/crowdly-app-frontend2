import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Crowdly</Text>
      <Ionicons name="chatbubble" size={24} color="white"></Ionicons>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#37CDD9",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 40,
    // margin: 5,
  },
  logo: {
    fontFamily: "sans-serif",
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  badge: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "red",
    fontSize: 12,
  },
});
