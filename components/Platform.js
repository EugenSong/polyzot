import Matter from 'matter-js'
import React from "react";
import { View } from "react-native";


const WIDTH = 100;
const HEIGHT = 20;

const Platform = ({ body }) => {
    const { bounds, position } = body;
    const widthBody = bounds.max.x - bounds.min.x
    const heightBody = bounds.max.y - bounds.min.y

    const x = position.x - widthBody / 2;
    const y = position.y - heightBody / 2;

    return (
        <View style={[styles.platform, { left: x, top: y }]} />
    );
}

let styles = {
    platform: {
        borderWidth: 1,
        borderColor: 'black',
    }
}