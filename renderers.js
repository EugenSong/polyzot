import React, { PureComponent } from "react";
import { StyleSheet, View, Image } from "react-native";
import peter from "./assets/petr-medium.png"

const Platform = ({ body }) => {
  const { position, width, height } = body;
  const x = position.x - width / 2;
  const y = position.y - height / 2;
  return <View style={[styles.platform, { width: width, height: height, left: x, top: y }]} />;
}



const styles = {
  platform: {
    backgroundColor: "#FF5877",
    borderColor: "#FFC1C1",
    borderWidth: 20,
    position: "absolute",
    borderRadius: 2
  },
};

export { Platform };
