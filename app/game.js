import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Link } from "expo-router";
import { GameEngine } from 'react-native-game-engine';

import entities from '../entities';
import { physics, updatePlatforms, updatePeter, checkForCollision } from '../physics';

import ScoreBoard from "../ScoreBoard";

export default function Page() {
  const [running, setRunning] = useState(true)
  const [gameEngine, setGameEngine] = useState(null)
  const [currentPoints, setCurrentPoints] = useState(0)
  return (
    <View style={{ flex: 1 }}>

      <ScoreBoard score={currentPoints} />

      <GameEngine
        ref={(ref) => { setGameEngine(ref) }}
        systems={[physics, updatePlatforms, updatePeter, checkForCollision]} 
        entities={entities()}
        running={running}
        onEvent={(e) => {
          switch (e.type) {
            case 'game_over':
              setRunning(false)
              gameEngine.stop()
              break;
            case 'new_point':
              setCurrentPoints(currentPoints + 1)
              break;
          }
        }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      >



      </GameEngine>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});