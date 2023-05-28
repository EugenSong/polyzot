import Matter from "matter-js";

import { Dimensions } from 'react-native'
import { log } from "react-native-reanimated";


export const physics = (entities, { time }) => {
    let engine = entities['physics'].engine;
    Matter.Engine.update(engine, time.delta);
    return entities;
}


export const updatePlatforms = (entities, { touches, time }) => {
    let speed = 0.02;
    for (entity in entities) {
        const isPlatform = entity.includes('platform')
        const curPlatform = entities[entity]

        if (isPlatform) {
            // console.log(curPlatform)
            const newPosition = {
                x: curPlatform.body.position.x,
                y: curPlatform.body.position.y + speed * time.delta,
            };
            Matter.Body.setPosition(curPlatform.body, newPosition)


        }
    }

    return entities;
}


export const updatePeter = (entities, { touches }) => {
    touches.filter(t => t.type === 'start')
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

export const checkForCollision = (entities, { time }) => {
    if (entities.Peter.body.velocity.y == 0) {
        noPetr = Object.values(entities).filter(s => s != entities.Peter && s != entities.physics)

        // console.log(noPetr);

        let minDist = Infinity
        let closest = null
        for (entity of noPetr) {
            if (!(entity.body)) { continue; }
            console.log(entities.Peter.body.position)
            let dist = Matter.Vector.magnitude(Matter.Vector.sub(entities.Peter.body.position, entity.body.position))
            if (dist < minDist) {
                minDist = dist
                closest = entity
            }
        }
        console.log(closest)
        if (closest) {
            closest.body.setCollided(true);
            if (!closest.body.correct) {
                closest.body.setActive(false)

            }
        }
    }
    // for (entity in entities) {

    //     const isPlatform = entity.includes('platform')
    //     const curPlatform = entities[entity]

    //     if (isPlatform) {
    //         if (Matter.Collision.collides(curPlatform.body, entities.Peter.body) != null) {
    //             console.log("Collision occured");
    //             console.log(curPlatform.body.setCollided)
    //             curPlatform.body.setCollided(true);
    //         }
    //     }
    // }
    return entities;
}
