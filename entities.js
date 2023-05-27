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
    x = 70
    y = i * 200
    platforms[label] = Platform(world, label, { x: x, y: y }, { height: 50, width: 100 })
  }
  for (let i = 0; i < 6; i++) {
    label = 'platform2' + i
    x = 330
    y = i * 200
    platforms[label] = Platform(world, label, { x: x, y: y }, { height: 50, width: 100 })
  }

  return {
    physics: { engine, world },

    Peter: Peter(world, { x: 200, y: 0 }, { height: 80, width: 100 }),
    ...platforms
    // platform1: Platform(world, 'platform1', { x: 200, y: 200 }, { height: 50, width: 200 }),
  }
}

