import Matter from "matter-js";
import Platform from "./components/Platform";
import Peter from "./components/Peter";

import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
function importAll(r) {
  return r.keys().map(r);
}

export default (restart) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;

  engine.gravity.y = 0.4;
  const images = importAll(
    require.context("./assets/game-screen/food", false, /\.(png)$/)
  );
  const invImages = importAll(
    require.context("./assets/game-screen/food/inverses", false, /\.(png)$/)
  );
  const wrongImages = importAll(
    require.context("./assets/game-screen/animals", false, /\.(png)$/)
  );
  const invWrongImages = importAll(
    require.context("./assets/game-screen/animals/inverses", false, /\.(png)$/)
  );

  let platforms = {};

  let spacing = 200;
  let startHeight = 200;
  const platformWidth = 100;
  const platformHeight = 30;

  correct_array = Array.from({ length: 6 }, () => Math.floor(Math.random() * 2))

  for (let i = 0; i < 6; i++) {
    label = "platform" + i;
    x = 70;
    y = startHeight - i * 200;
    correct = correct_array[i]
    platforms[label] = Platform(
      world,
      label,
      { x: x, y: y },
      { height: platformHeight, width: platformWidth },
      correct ? images[i] : wrongImages[i],
      correct ? invImages[i] : invWrongImages[i],
      correct,
    );
  }
  for (let i = 0; i < 6; i++) {
    label = "platform2" + i;
    x = 330;
    y = startHeight - i * 200;
    correct = 1 - correct_array[i]
    platforms[label] = Platform(
      world,
      label,
      { x: x, y: y },
      { height: platformHeight, width: platformWidth },
      correct ? images[i + 6] : wrongImages[i + 6],
      correct ? invImages[i + 6] : invWrongImages[i + 6],
      correct,
    );
  }

  return {
    physics: { engine, world },

    Peter: Peter(world, { x: 200, y: 0 }, { height: 50, width: 120 }),
    ...platforms,
    platformfloor: Platform(
      world,
      "platformfloor",
      { x: 200, y: startHeight + 200 },
      { height: 50, width: 600 },
      null,
      null,
      true
    ),
  };
};
