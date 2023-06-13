import { StyleSheet } from "react-native";

const CommonStyles = StyleSheet.create({
  screen: {
    margin: 8,
    backgroundColor: "white",
  },
  test: {
    backgroundColor: "#FDFFFF",
  },
  card: {
    backgroundColor: "white",
    borderWidth: 0,
    shadowColor: "red",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
});

export default CommonStyles;
