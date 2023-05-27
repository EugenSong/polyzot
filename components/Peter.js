import Matter from "matter-js";
import React from "react";
import { View, Image, Dimensions } from "react-native";
import peterpng from "../assets/petr-medium.png";

let styles = {
  peter: {
    borderWidth: 1,
    borderColor: "black",
    position: "absolute",
  },
};

const Peter = ({ body, width, height }) => {
  const { bounds, position } = body;
  const widthBody = width;
  const heightBody = height;

  const x = position.x - widthBody / 2;
  const y = position.y - heightBody / 2;
  return (
    <View
      style={[
        styles.peter,
        { width: widthBody, height: heightBody, left: x, top: y },
      ]}
    >
      <Image source={peterpng} />
    </View>
  );
};

export default (world, pos, size) => {
  const initialPeter = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: "Peter", inertia: Infinity }
  );

  Matter.World.add(world, initialPeter);

  return {
    body: initialPeter,
    pos,
    width: size.width,
    height: size.height,
    renderer: <Peter />,
  };
};
