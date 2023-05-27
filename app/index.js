import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { Link } from "expo-router";
import SampleSound from "../sample-sound";
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons'; 
import { useRef, useState, useEffect} from "react";
import { Audio } from 'expo-av';


const zoomOut = {
  0: {
    opacity: 1,
    scale: 1,
  },
  0.5: {
    opacity: 1,
    scale: 0.3,
  },
  1: {
    opacity: 0,
    scale: 0,
  },
};

export default function Page() {
  const [isSoundPlaying, setIsSoundPlaying] = useState(true);

  useEffect(() => {
    const soundObject = new Audio.Sound();
    const playSound = async () => {
      try {
        await soundObject.loadAsync(require('../assets/cut-off-beg.mp3'));
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

  const handleStopSound = () => {
    setIsSoundPlaying(false);
  };

  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/graph-bg.png')}
        style={styles.imageBackground}
        resizeMode="contain"
      >
      <View style={styles.title}>
        <Image 
          source={require('../assets/start-screen/polyzot-jp.png')}
          style={styles.polyzotJP}
          resizeMode="contain"
        />
        <View style={{marginLeft: -20}}>
          <Animatable.Image 
            source={require('../assets/start-screen/polyzot-eng.png')}
            style={styles.polyzotEng}
            animation="flash" 
            iterationCount="infinite"
            duration={5000}
            // direction="alternate"
            // resizeMode="contain"
          />
        </View>
        <View style={{marginLeft: -12,    
        alignItems: 'center'}}>
          <Animatable.Image 
            source={require('../assets/start-screen/petr.png')}
            style={styles.petr}
            // animation="flash"
            iterationCount="infinite"
            duration={500}
            resizeMode="contain"
          />
        </View>
        <Link href="/selection">
        <View style={{marginLeft: -5}}>
          <Animatable.Image
            source={require('../assets/start-screen/playgame-button.png')}
            style={styles.gamebutton}
            animation="pulse"
            iterationCount="infinite"
            duration={1000}
          />
        </View>
        </Link>
      </View>

      {/* <Ionicons
          name="volume-mute-outline"
          size={24}
          color="black"
          onPress={handleStopSound}
        />
        {isSoundPlaying && <SampleSound />} */}
      
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    // flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  sound: {
    marginTop: 100,
    backgroundColor: "green",
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  polyzotJP: {
    width: 300,
    height: 100,
  },
  polyzotEng: {
    width: 300,
    height: 70,
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 150,
  },
  petr: {
    height: 180,
  },
  gamebutton:{
    height: 86
  }
});
