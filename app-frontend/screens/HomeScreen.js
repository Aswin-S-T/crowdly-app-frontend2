import { View, ScrollView, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import RecipeReviewCard from "../components/RecipeReviewCard";
import Post from "../components/Post";

const HomeScreen = () => {
  return (
    <ScrollView>
      <View>
        <Header />
        <View>
          <Post />
        </View>
        {/* <RecipeReviewCard /> */}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
