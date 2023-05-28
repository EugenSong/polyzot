import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";

const SampleSound = () => {
  const [sound, setSound] = React.useState();

  // play the music indefinitely
  async function playSound() {
    // init Sound object using asset & set its state
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/cut-off-beg.mp3")
    );
    setSound(sound);

    await sound.playAsync(); // play the song
    await sound.setIsLoopingAsync(true); // loop song indefinitely
  }

  // play jump sound
  async function playJumpSound() {
    // init Sound object using asset & set its state
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/jump.mp3")
    );
    setSound(sound);

    await sound.playAsync(); // play the song
  }

  // stops the music
  async function stopSound() {
    await sound.stopAsync();
  }

  // useEffect to Unload the song from memory whenever stops
  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View>
      <View style={styles.container}>
        <Button title="Play Sound" onPress={playSound} />
      </View>
      <View style={styles.container}>
        <Button title="Play Jump Sound" onPress={playJumpSound} />
      </View>
      <View style={styles.container}>
        <Button title="Stop Sound" onPress={stopSound} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue", // Example background color
    // Add other style properties for the container label here
    marginTop: 100,
    padding: 10,
    borderRadius: 5,
    alignItems: "center", // Center horizontally
    justifyContent: "center", // Center vertically
  },
});

export default SampleSound;
