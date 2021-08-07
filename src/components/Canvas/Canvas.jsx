import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as ArtService from '../../utils/artService';

import CanvasDraw from "react-canvas-draw";
import { Grid, Button } from 'semantic-ui-react';
import { CirclePicker, AlphaPicker } from 'react-color';
import Slider from '@material-ui/core/Slider';
import LZ from 'lz-string';

export default function Canvas(props) {
    const [color, setColor] = useState('#666666');
    const [transparency, setTransparency] = useState();
    const [brushRadius, setBrushRadius] = useState(6);
    const [art, setArt] = useState('art');
    
    const canvasRef = useRef();

    const history = useHistory();

    async function updateColor(value) {
        setColor(value.hex);
    }

    async function updateBrushRadius(event, value) {
        setBrushRadius(value);
    }

    // async function updateTransparency(value) {
    //     setTransparency(value);
    // }

    const handleSubmit = async () => {
        console.log(canvasRef.current);
        let artData = await canvasRef.current.getSaveData();
        // ---- Compression for saving the art piece to the db -----

        // artData = await LZ.compress(artData);
        // console.log(artData);
        let piece = await ArtService.saveArt(artData);
        console.log(piece.compressedFile);

        history.push('/');
    }

    return (
        <>
            <CanvasDraw
                ref={canvasRef}
                brushColor={color}
                // transparency={transparency}
                brushRadius={brushRadius}
                lazyRadius={1}
            />
            {/* create a textfield for inputting art title */}
            <CirclePicker 
                color={color}
                onChange={updateColor}
            />
            {/* <AlphaPicker onChange={updateTransparency} color={color}/> */}
            <Slider
                defaultValue={brushRadius}
                min={1}
                max={100}
                onChange={updateBrushRadius}
                valueLabelDisplay='on'
            />
            <Button onClick={handleSubmit}>Save Art</Button>
        </>
    )
}