import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar, Dimensions } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Platform, Peter } from "./renderers";
import Matter from 'matter-js'

const { width, height } = Dimensions.get("window");

const plankSettings = {
  isStatic: true
};

const engine = Matter.Engine.create({ enableSleeping: false })
const world = engine.world;

let planks = []

let spacing = 200
let startHeight = 400

for (let i = 0; i < 6; i++) {
  if (i % 2 == 0) {
    for (let j = 0; j < 3; j++) {
      planks.push(
        Matter.Bodies.rectangle(
          j * width / 3 + width / 6,
          startHeight - i * spacing,
          100,
          50,
          {
            ...plankSettings,
            label: "plank" + i
          }
        )
      )
    }
  }
  else {
    for (let j = 0; j < 2; j++) {
      planks.push(
        Matter.Bodies.rectangle(
          j * width / 2 + width / 4,
          startHeight - i * spacing,
          100,
          50,
          {
            ...plankSettings,
            label: "plank" + i
          }
        )
      )
    }
  }

}
Matter.World.add(world, planks)

let entities = {}
for (let i = 0; i < planks.length; i++) {
  entities[i] = {
    body: planks[i],
    renderer: Platform,
  }
}

let peterBody = Matter.Bodies.rectangle(
  200,
  200,
  50,
  50,
  {
    ...plankSettings,
    label: "peter"
  }
)
entities['peter'] = {
  body: peterBody,
  renderer: Peter
}


export default class BestGameEver extends React.Component {

  constructor() {

    super();
  }

  physics(entities, { time }) {
    let engine = entities['physics'].engine;
    Matter.Engine.update(engine, time.delta);
    return entities;
  }

  movePlank(entities, { touches, time }) {
    let speed = 0.02;
    var newPosition = {}
    for (let i = 0; i < planks.length; i++) {
      newPosition = {
        x: planks[i].position.x,
        y: planks[i].position.y + speed * time.delta,
      };
      Matter.Body.setPosition(planks[i], newPosition)
    }

    return entities;
  }

  movePeter(entities, { touches }) {
    let move = touches.find(x => x.type == 'move');
    if (move) {
      const newPosition = {
        x: peterBody.position.x + move.delta.pageX,
        y: peterBody.position.y,
      }
      Matter.Body.setPosition(peterBody, newPosition)
    }

    return entities
  }


  render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[this.physics, this.movePlank, this.movePeter]}
        entities={{
          physics: {
            engine: engine,
            world: world,
          },
          ...entities,
        }}
      >
        <StatusBar hidden={true} />
      </GameEngine >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});

AppRegistry.registerComponent("BestGameEver", () => BestGameEver);
