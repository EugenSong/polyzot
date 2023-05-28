import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { Link } from "expo-router";
import { Audio } from 'expo-av';
import { useEffect } from "react";
import * as Animatable from 'react-native-animatable';
import { Dimensions } from 'react-native';
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router";

const { width, height } = Dimensions.get('window');

export default function Page() {

  const navigation = useNavigation();
  const router = useRouter();
  const params = useLocalSearchParams();
  const { points } = params;
  console.log(points)



  useEffect(() => {
    const soundObject = new Audio.Sound();
    const playSound = async () => {
      try {
        await soundObject.loadAsync(require('../assets/scoreboard-screen/pixelland.mp3'));
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
    <Animatable.View animation="fadeIn" duration={1000} style={styles.container}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/graph-bg.png')}
          style={styles.imageBackground}
          resizeMode="contain"
        >
          <View style={{ marginTop: 80, marginLeft: 10, }}>
            <Link href="/">
              <Image
                source={require('../assets/backbutton.png')}
                resizeMode="contain"
              />
            </Link>
          </View>
          <View style={styles.title}>
            <Image
              source={require('../assets/start-screen/polyzot-jp.png')}
              style={styles.polyzotJP}
              resizeMode="contain"
            />
            <View style={{ marginLeft: -20 }}>
              <Animatable.Image
                source={require('../assets/scoreboard-screen/petr-medium.png')}
                // style={styles.polyzotEng}
                animation="bounce"
                iterationCount="infinite"
                duration={5000}
              // direction="alternate"
              // resizeMode="contain"
              />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('../assets/scoreboard-screen/right.png')}
                style={styles.right}
                resizeMode="contain"
              />
              <Text style={{
                fontSize: 75,
                fontWeight: 'bold',
                color: '#E55807',
              }}>{points} </Text>
            </View>


            {/* <Image
              source={require('../assets/scoreboard-screen/wrong.png')}
              style={styles.wrong}
              resizeMode="contain"
            /> */}

            
          </View>

        </ImageBackground>
      </View >
    </Animatable.View >
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
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
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 60,
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
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
    width: '100%',
    height: '100%',
  },
  right: {
    marginLeft: -105,
    marginTop: 10
  },
  wrong: {
    marginLeft: -120,
  }
});