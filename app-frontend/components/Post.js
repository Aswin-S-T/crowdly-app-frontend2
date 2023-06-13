import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Button,
} from "react-native";
import React from "react";
import {
  POST_IMAGE,
  POST_IMAGE2,
  POST_IMAGE3,
  POST_IMAGE4,
} from "../images/images";
import { style } from "@mui/system";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const Post = () => {
  const screenWidth = Dimensions.get("window").width;
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.postHeader}>
          <Image
            style={styles.thumb}
            source={{
              uri: POST_IMAGE,
            }}
          />
          <Text>Username here</Text>
          <Button
            title="Follow"
            onPress={() => {
              // Button press logic
            }}
          />
        </View>
        <View>
          <Image
            style={{ width: "100%", height: 250 }}
            source={{
              uri: POST_IMAGE,
            }}
          />
        </View>
        <View style={styles.postActions}>
          <AntDesign
            name="like1"
            size={25}
            color="black"
            style={{ marginLeft: 10 }}
          />
          <EvilIcons
            name="comment"
            size={25}
            color="black"
            style={{ marginLeft: 10 }}
          />
        </View>
        <Text style={{ margin: 10 }}>View all comments</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.postHeader}>
          <Image
            style={styles.thumb}
            source={{
              uri: POST_IMAGE2,
            }}
          />
          <Text>Username here</Text>
          <Button
            title="Follow"
            onPress={() => {
              // Button press logic
            }}
          />
        </View>
        <View>
          <Image
            style={{ width: "100%", height: 250 }}
            source={{
              uri: POST_IMAGE2,
            }}
          />
        </View>
        <View style={styles.postActions}>
          <AntDesign
            name="like1"
            size={25}
            color="black"
            style={{ marginLeft: 10 }}
          />
          <EvilIcons
            name="comment"
            size={25}
            color="black"
            style={{ marginLeft: 10 }}
          />
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.postHeader}>
          <Image
            style={styles.thumb}
            source={{
              uri: POST_IMAGE3,
            }}
          />
          <Text>Username here</Text>
          <Button
            title="Follow"
            onPress={() => {
              // Button press logic
            }}
          />
        </View>
        <View>
          <Image
            style={{ width: "100%", height: 250 }}
            source={{
              uri: POST_IMAGE3,
            }}
          />
        </View>
        <View style={styles.postActions}>
          <AntDesign
            name="like1"
            size={25}
            color="black"
            style={{ marginLeft: 10 }}
          />
          <EvilIcons
            name="comment"
            size={25}
            color="black"
            style={{ marginLeft: 10 }}
          />
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.postHeader}>
          <Image
            style={styles.thumb}
            source={{
              uri: POST_IMAGE4,
            }}
          />
          <Text>Username here</Text>
          <Button
            title="Follow"
            onPress={() => {
              // Button press logic
            }}
          />
        </View>
        <View>
          <Image
            style={{ width: "100%", height: 250 }}
            source={{
              uri: POST_IMAGE4,
            }}
          />
        </View>
        <View style={styles.postActions}>
          <AntDesign
            name="like1"
            size={25}
            color="black"
            style={{ marginLeft: 10 }}
          />
          <EvilIcons
            name="comment"
            size={25}
            color="black"
            style={{ marginLeft: 10 }}
          />
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.postHeader}>
          <Image
            style={styles.thumb}
            source={{
              uri: POST_IMAGE,
            }}
          />
          <Text>Username here</Text>
          <Button
            title="Follow"
            onPress={() => {
              // Button press logic
            }}
          />
        </View>
        <View>
          <Image
            style={{ width: "100%", height: 250 }}
            source={{
              uri: POST_IMAGE,
            }}
          />
        </View>
        <View style={styles.postActions}>
          <AntDesign
            name="like1"
            size={25}
            color="black"
            style={{ marginLeft: 10 }}
          />
          <EvilIcons
            name="comment"
            size={25}
            color="black"
            style={{ marginLeft: 10 }}
          />
        </View>
      </View>
    </View>
  );
};

export default Post;
const styles = StyleSheet.create({
  postImage: {
    width: "100%",
    maxHeight: 400,
  },
  postHeader: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    margin: 5,
  },
  thumb: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  card: {
    backgroundColor: "white",
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  postActions: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    margin: 15,
  },
});
