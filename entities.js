import React from "react";
import { Dimensions } from "react-native";
import Matter from "matter-js";
import { Platform, Petr } from "./renderers";

//-- Overriding this function because the original references HTMLElement
//-- which will throw an error when running in a React Native context
Matter.Common.isElement = () => false;

//-- These variable will help us position our entities on the device's screen
const { width, height } = Dimensions.get("window");

export const Entities = () => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;

  let word_list = ["Banana", "Orange", "Apple"];

  // The origin of our world is in the top-left corner. Hence, the y-axis increases down the screen!

  engine.gravity = { x: 0, y: 2 };
  entities = {};

  entities["peter"] = {
    position: [200, 200],
    renderer: <Petr />,
  };

  for (var i = 0; i < word_list.length; i++) {
    entities["platform" + i] = {
      width: 100,
      height: 50,
      position: [200, 200 + i * 50],
      renderer: <Platform />,
    };
  }

  return entities;
};
