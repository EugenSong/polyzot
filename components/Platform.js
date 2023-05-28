import Matter from "matter-js";
import React, { useState } from "react";
import { View, Image } from "react-native";

let styles = {
  platform: {
    borderWidth: 1,
    borderColor: "black",
    position: "absolute",
  },
};

const Platform = ({
  body,
  width,
  height,
  style = {},
  source,
  invSource,
  correct,
}) => {
  const [collided, setCollided] = useState(false);
  const [active, setActive] = useState(true);
  const { bounds, position } = body;
  const widthBody = width;
  const heightBody = height;

  const x = position.x - widthBody / 2;
  const y = position.y - heightBody / 2;

  body.correct = correct;
  body.setCollided = setCollided;
  body.setActive = setActive;
  if (!active) {
    body.collisionFilter = { group: -1 };
    return;
  }
  return (
    <View
      style={[
        styles.platform,
        {
          width: widthBody,
          height: heightBody,
          left: x,
          top: y,
          padding: 0,
          margin: 0,
        },
      ]}
    >
      <Image
        source={collided ? invSource : source}
        style={{
          width: width,
          height: height,
          ...style,
          resizeMode: "cover",
          transform: [{ scale: 1.2 }],
        }}
      />
    </View>
  );
};

export default (world, label, pos, size, source, invSource, correct) => {
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
    source: source,
    invSource: invSource,
    correct: correct,
    renderer: <Platform />,
  };
};
