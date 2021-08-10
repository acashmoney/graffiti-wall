import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import * as ArtService from '../../utils/artService';
import CanvasDraw from "react-canvas-draw";
import { Grid, Button } from 'semantic-ui-react';
import { CirclePicker } from 'react-color';
import Slider from '@material-ui/core/Slider';

export default function Canvas(props) {
    const [color, setColor] = useState('#666666');
    const [brushRadius, setBrushRadius] = useState(6);
    
    const canvasRef = useRef();

    const history = useHistory();

    async function updateColor(value) {
        setColor(value.hex);
    }

    async function updateBrushRadius(event, value) {
        setBrushRadius(value);
    }

    const handleSubmit = async () => {
        let artData = await canvasRef.current.getSaveData();
        await ArtService.saveArt(artData);
        history.push('/');
    }

    return (
        <>
            <Grid divided='horizontally' columns={2}>
                <Grid.Column>
                    <CanvasDraw
                        ref={canvasRef}
                        brushColor={color}
                        // transparency={transparency}
                        brushRadius={brushRadius}
                        lazyRadius={1}
                    />
                </Grid.Column>
                <Grid.Column>
                    <CirclePicker 
                        color={color}
                        onChange={updateColor}
                    />
                    <br/><br/>
                    <Slider
                        defaultValue={brushRadius}
                        min={1}
                        max={100}
                        onChange={updateBrushRadius}
                        valueLabelDisplay='on'
                    />
                    <br/><br/>
                    <Button onClick={handleSubmit}>Add to Wall</Button>
                </Grid.Column>
                
            </Grid>
        </>
    )
}