import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const ScoreBoard = ({ score }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.scoreBoard}>
        <Text style={styles.scoreText}>Score: {score}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'flex-end', // This will align items to the right
  },
  scoreBoard: {
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 5,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ScoreBoard;
