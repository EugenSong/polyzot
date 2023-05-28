import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Text, View, Image, ImageBackground, Modal } from "react-native";
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Link } from "expo-router";
import { GameEngine } from 'react-native-game-engine';
import { Audio } from 'expo-av';
import { Dimensions } from 'react-native';
import entities from '../entities';
import { physics, updatePlatforms, updatePeter, checkForCollision } from '../physics';
import ScoreBoard from "../ScoreBoard";
import * as Animatable from 'react-native-animatable';


const { width, height } = Dimensions.get('window');


export default function Page() {
  const [running, setRunning] = useState(true)
  const [gameEngine, setGameEngine] = useState(null)
  const [currentPoints, setCurrentPoints] = useState(0)
  const [overlayVisible, setOverlayVisible] = useState(true);

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  const playChoice = async () => {
    try {
      // Load the audio file
      const soundObject = new Audio.Sound();
      await soundObject.loadAsync(require('../assets/choice.mp3'));
  
      // Play the audio
      await soundObject.playAsync();
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  useEffect(() => {
    const soundObject = new Audio.Sound();
    const playSound = async () => {
      try {
        await soundObject.loadAsync(require('../assets/game-screen/virtualboy.mp3'));
        await soundObject.playAsync();
        await soundObject.setIsLoopingAsync(true);
      } catch (error) {
        console.error('Error playing sound:', error);
      }
    };

    playSound();

    return () => {
      soundObject.stopAsync();
      soundObject.unloadAsync();
    };
  }, []);
  
  return (
    <Animatable.View animation="fadeIn" duration={3000} style={styles.container}>
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={overlayVisible}
        onRequestClose={toggleOverlay}
      >
        <TouchableWithoutFeedback onPress={toggleOverlay}>
          <View style={styles.overlayContainer}>
            <Image
                source={require('../assets/game-screen/instructions.png')}
                resizeMode="contain" />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
    
    <View style={{ marginTop: -103 }}>
        <ImageBackground
          source={require('../assets/graph-bg.png')}
          style={styles.imageBackground}
          resizeMode="cover"
        >

          {/* <> */}
          {/* go back button */}
          <View style={styles.goBackContainer
          }>
            <View> 
              <Link href="/selection">
                <Image
                  source={require('../assets/backbutton.png')}
                  resizeMode="contain" />
              </Link>
            </View>
            <View style={{marginTop: 10}}>
            <Link href="/scoreboard" onPress={playChoice}>
              <Animatable.Image
                source={require('../assets/game-screen/end-game.png')}
                resizeMode="contain"
                animation="flash"
                iterationCount="infinite"
                duration={5000}
               />
            </Link>
            </View>
     
            <View style={{marginTop: -3, marginLeft: 26}}>
              <ScoreBoard score={currentPoints} />
            </View>
          </View>


            <GameEngine
              ref={(ref) => { setGameEngine(ref); } }
              systems={[physics, updatePlatforms, updatePeter, checkForCollision]}
              entities={entities()}
              running={running}
              onEvent={(e) => {
                switch (e.type) {
                  case 'game_over':
                    setRunning(false);
                    gameEngine.stop();
                    break;
                  case 'new_point':
                    setCurrentPoints(currentPoints + 1);
                    break;
                }
              } }
              style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
            >

            </GameEngine>

        </ImageBackground>
      </View>
    </Animatable.View>

  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent dark background
    justifyContent: 'center',
    alignItems: 'center',
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
  imageBackground: {
    width: width,
    height: height + 210,
  },
  goBackContainer: {
    marginTop: 180,
    marginLeft: 10,
    zIndex: 100,
    flexDirection: "row"
  },
});
