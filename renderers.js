import { GameEngine } from "react-native-game-engine";
import React, { PureComponent } from "react";
import { StyleSheet, View, Image } from "react-native";
import peter from "./assets/petr-medium.png";

const WIDTH = 100;
const HEIGHT = 20;

class Platform extends PureComponent {
  render() {
    const { position, width, height } = this.props;
    const x = position[0] - WIDTH / 2;
    console.log(width);
    const y = position[1] - HEIGHT / 2;
    return <View style={[styles.platform, { left: x, top: y }]} />;
  }
}

class Petr extends PureComponent {
  render() {
    const { position } = this.props;
    const x = position[0];
    const y = position[1];
    return (
      <View style={{ left: x, top: y }}>
        <Image source={peter} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  platform: {
    borderColor: "#CCC",
    borderWidth: 4,
    // borderRadius: 0,
    width: WIDTH * 2,
    height: HEIGHT * 2,
    backgroundColor: "pink",
    position: "absolute",
  },
});

export { Platform, Petr };
