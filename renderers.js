import React, { PureComponent } from "react";
import { StyleSheet, View, Image } from "react-native";
import peter from "./assets/petr-medium.png";

const WIDTH = 100;
const HEIGHT = 20;

const Platform = ({ body }) => {
  const { position } = body;
  const x = position.x - WIDTH / 2;
  const y = position.y - HEIGHT / 2;
  return <View style={[styles.platform, { left: x, top: y }]} />;
}

const Peter = ({ body }) => {
  const { position } = body;
  const x = position.x - 50 / 2;
  const y = position.y - 50 / 2;
  return (
    <View style={{ left: x, top: y }}>
      <Image source={peter} />
    </View>
  );
}

const styles = {
  platform: {
    backgroundColor: "#FF5877",
    borderColor: "#FFC1C1",
    borderWidth: 20,
    width: WIDTH,
    height: HEIGHT,
    position: "absolute",
    borderRadius: 2
  },
};

export { Platform, Peter };
