import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from "react-native";
import { Link } from "expo-router";

import { useState } from "react";
import { useNavigation } from 'expo-router';

const topics = [
  { label: 'Food', value: 'food' },
  { label: 'Verbs', value: 'verbs' },
  // Add more topics here...
];


export default function Page() {

  const [selectedTopic, setSelectedTopic] = useState();
  const peterImage = require('../assets/petr-medium.png');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View>

          <Text>SELECTION SCREEN</Text>

          <Text>LEARN</Text>
          <Text>JAPANESE</Text>
          <Text>VOCABULARY</Text>
          <Text>CHOOSE A TOPIC:</Text>
          {topics.map((topic) => (
            <TouchableOpacity
              key={topic.value}
              style={styles.topicItem}
              onPress={() => setSelectedTopic(topic.value)}
            >
              <Text>{topic.label}</Text>
              {selectedTopic === topic.value && <Image source={peterImage} style={styles.icon} />}
            </TouchableOpacity>
          ))}

          <Link href="/game">Go to Game</Link>
          <Link href="/">Go to Start</Link>

          <Link href="/game" >Start Game</Link>

        </View>
      </View>
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

  topicItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    width: 200, // adjust this as per your requirement
  },

  icon: {
    width: 40,   // Set your desired size
    height: 40,  // Set your desired size
  },

});