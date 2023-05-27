import Matter from 'matter-js';
import Platform from './components/Platform';
import Peter from './components/Peter'

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

export default restart => {
  let engine = Matter.Engine.create({ enableSleeping: false })
  let world = engine.world

  engine.gravity.y = 0.4;

  let platforms = {}

  let spacing = 200
  let startHeight = 400

  for (let i = 0; i < 6; i++) {
    label = 'platform' + i
    if (i % 2 == 0) {
      for (let j = 0; j < 3; j++) {
        x = j * width / 3 + width / 6
        y = startHeight - i * spacing
        platforms[label] = Platform(world, label, { x, y }, { width: 100, height: 50 })
      }
    }
    else {
      for (let j = 0; j < 2; j++) {
        x = j * width / 2 + width / 4
        y = startHeight - i * spacing
        platforms[label] = Platform(world, label, { x, y }, { width: 100, height: 50 })
      }
    }
  }

  return {
    physics: { engine, world },

    Peter: Peter(world, { x: 200, y: 0 }, { height: 50, width: 120 }),

    ...platforms
  }
}

