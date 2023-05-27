import Matter from "matter-js";

import { Dimensions } from 'react-native'


export const physics = (entities, { time }) => {
    let engine = entities['physics'].engine;
    Matter.Engine.update(engine, time.delta);
    return entities;
}


export const updatePlatforms = (entities, { touches, time }) => {
    let speed = 0.02;
    // for (entity in entities) {
    //     const isPlatform = entity.includes('platform')
    //     const curPlatform = entities[entity]

    //     if (isPlatform) {
    //         const newPosition = {
    //             x: curPlatform.position.x,
    //             y: curPlatform.position.y + speed * time.delta,
    //         };
    //         Matter.Body.setPosition(curPlatform, newPosition)
    //     }
    // }

    return entities;
}


export const updatePeter = (entities, { touches }) => {
    touches.filter(t => t.type === 'press')
        .forEach(t => {
            Matter.Body.setVelocity(entities.Peter.body, {
                x: 0,
                y: -8
            })
        })
    let move = touches.find(x => x.type == 'move');
    if (move) {
        const newPosition = {
            x: entities.Peter.body.position.x + move.delta.pageX,
            y: entities.Peter.body.position.y,
        }
        Matter.Body.setPosition(entities.Peter.body, newPosition)
    }

    return entities
}
