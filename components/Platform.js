import Matter from 'matter-js'
import React from "react";
import { View } from "react-native";

let styles = {
    platform: {
        borderWidth: 2,
        borderColor: 'black',
    }
}

const Platform = ({ body }) => {
    const { bounds, position } = body;
    const widthBody = bounds.max.x - bounds.min.x
    const heightBody = bounds.max.y - bounds.min.y

    const x = position.x - widthBody / 2;
    const y = position.y - heightBody / 2;

    return (
        <View style={[styles.platform, { width: widthBody, height: heightBody, left: x, top: y }]} />
    );
}

export default (world, label, pos, size) => {
    const initialPlatform = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        {
            label,
            isStatic: true
        }
    )
    Matter.World.add(world, initialPlatform)

    return {
        body: initialPlatform,
        pos,
        renderer: <Platform />
    }
}

