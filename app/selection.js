import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, Button } from "react-native";
import { Link } from "expo-router";
import * as Animatable from 'react-native-animatable';
import { useState } from "react";
import { useNavigation } from 'expo-router';
import { Dimensions } from 'react-native';

// import * as SoundManager from '../soundManager';

// SoundManager.playSound();


const topics = [
  { label: 'Food', value: 'food' },
  { label: 'Animal', value: 'animals' },
  // Add more topics here...
];

const { width, height } = Dimensions.get('window');


export default function Page() {

  const [selectedTopic, setSelectedTopic] = useState();
  const peterImage = require('../assets/selection-screen/petr-small.png');
  const navigation = useNavigation();

  return (
    // fades in the screen
    <Animatable.View animation="fadeIn" duration={3000} style={styles.container}>

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

          <View>
            <View style={{ marginTop: -30 }}>
              <Image
                source={require('../assets/selection-screen/selection-title.png')}
                style={styles.selectionTitle}
                resizeMode="contain"
              />
            </View>
            <View style={{ marginLeft: 33, marginTop: -35 }}>
              <Image
                source={require('../assets/selection-screen/topic-text.png')}
                style={styles.topicTitle}
                resizeMode="contain"
              />
            </View>

            {topics.map((topic) => (
              <TouchableOpacity
                key={topic.value}
                style={styles.topicItem}
                onPress={() => setSelectedTopic(topic.value)}
              >
                {/* displays food selection */}
                {topic.value === 'food' && (
                  <View style={{ marginLeft: -40, marginTop: -10 }}>
                    <Image
                      source={require('../assets/selection-screen/food-text.png')}
                      style={styles.topicTitle}
                      resizeMode="contain"
                    />
                  </View>
                )}
                {/* displays animal selection */}
                {topic.value === 'animals' && (
                  <View style={{ marginLeft: -40, marginTop: -28 }}>
                    <Image
                      source={require('../assets/selection-screen/animal-text.png')}
                      style={styles.topicTitle}
                      resizeMode="contain"
                    />
                  </View>
                )}

                {/* placement of peter cursor */}
                {selectedTopic === topic.value &&
                  <View style={{ marginLeft: -30, marginTop: selectedTopic === 'animals' ? -32 : -6 }}>
                    <Image source={peterImage} />
                  </View>
                }
              </TouchableOpacity>
            ))}

            {/* selectedTopic val needs to be processed when Start Game Link pressed */}
            <View style={{ marginLeft: 33, marginTop: 35 }}>
              <Link href="/game">
                <Animatable.Image
                  source={require('../assets/selection-screen/startgame-button.png')}
                  style={styles.topicTitle}
                  animation="pulse"
                  iterationCount="infinite"
                  duration={1000}
                  
                // resizeMode="contain"
                />
              </Link>
            </View>

          </View>
        </ImageBackground>
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },

  topicItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    padding: 8,
    borderRadius: 8,
    // borderWidth: 1,
    borderColor: '#ccc',
    width: 200, // adjust this as per your requirement
  },

  icon: {
    width: 40,   // Set your desired size
    height: 40,  // Set your desired size
  },

  imageBackground: {
    width: '100%',
    height: '100%',
  },
  selectionTitle: {
    width: 380,
    height: 200
  },
  topicTitle: {
    width: 320,
  }

});