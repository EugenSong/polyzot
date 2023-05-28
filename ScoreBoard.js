import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const ScoreBoard = ({ score }) => {
  return (
    <View style={styles.scoreBoard}>
      <Text style={styles.scoreText}>Score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "flex-end", // This will align items to the right
  },
  scoreBoard: {
    padding: 10,
    backgroundColor: "#ffff",
    borderRadius: 5,
    alignSelf: "flex-end",
    borderWidth: 5,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: "bold",
    zIndex: 100,
  },
});

export default ScoreBoard;
