import Matter from "matter-js";
import React from "react";
import { View, Image } from "react-native";
import word1 from "../assets/game-screen/food/banana-banana.png";
let styles = {
  platform: {
    borderWidth: 1,
    borderColor: "black",
    position: "absolute",
  },
};

const Platform = ({ body, width, height, style = {}, source }) => {
  const { bounds, position } = body;
  const widthBody = width;
  const heightBody = height;

  const x = position.x - widthBody / 2;
  const y = position.y - heightBody / 2;

  return (
    <View
      style={[
        styles.platform,
        { width: widthBody, height: heightBody, left: x, top: y },
      ]}
    >
      <Image source={source} style={{ width, height, ...style }} />
    </View>
  );
};

export default (world, label, pos, size) => {
  const initialPlatform = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      label,
      isStatic: true,
    }
  );
  Matter.World.add(world, initialPlatform);

  return {
    body: initialPlatform,
    width: size.width,
    height: size.height,
    source: word1,
    renderer: <Platform />,
  };
};
