import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-dom';

import CanvasDraw from "react-canvas-draw";
import { Grid } from 'semantic-ui-react';
import { CirclePicker, AlphaPicker } from 'react-color';
import LZ from 'lz-string';

export default function Canvas(props) {
    const [color, setColor] = useState('#666666');
    const [transparency, setTransparency] = useState();
    const [brushSize, setBrushSize] = useState();


    // const updateSize =

    function updateColor(value) {
        setColor(`rgba(${value.rgb.r},${value.rgb.g},${value.rgb.b},${value.rgb.a})`);
    }

    // useEffect(() => {

    // })

    return (
        <>
            <CanvasDraw
                brushColor={color}
                transparency={transparency}
                lazyRadius={1}
            />
            <CirclePicker 
                color={color}
                onChange={updatedColor => setColor(updatedColor.hex)}
            />
            <AlphaPicker />
        </>
    )
}