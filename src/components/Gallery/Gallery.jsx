import React, { useState, useRef, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import CanvasDraw from 'react-canvas-draw';
import * as ArtService from '../../utils/artService';

export default function Gallery() {

    const [pieces, setPieces] = useState([]);

    async function getArt() {
        try {
            const artPieces = await ArtService.getAll();
            setPieces(artPieces.artPieces);
        } catch (err) {
            console.log(err, "No art pieces uploaded");
        }
    }

    console.log(pieces);

    async function loadArt(art) {
        return (
            <CanvasDraw 
                disabled
                hideGrid
                
            />
        )
    }

    useEffect(()=> {
        getArt();
    }, [])


    async function showArt() {

    }

    // async function loadArt(artData) {
    //     let artPiece = (
    //         <CanvasDraw
    //             disabled
    //             hideGrid
    //             ref={canvasRef}
    //             saveData={artData}
    //         />
    //     )
    //     return (
    //         <CanvasDraw 
    //             disabled
    //             hideGrid
    //             ref={canvasRef}
    //         />
    //     )
    // }



    return (
        <div id='gallery'>
            Gallery
            Number of art pieces: {}
            <Grid>
                <CanvasDraw
                    disabled
                    hideGrid
                    // ref={canvasRef}
                />
                {/* Loop through database to get savedData strings for 
                each art piece. Then use loadSaveData() */}
                {}
            </Grid>
        </div>
    )
}