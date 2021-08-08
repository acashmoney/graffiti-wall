import React, { useState, useRef, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import CanvasDraw from 'react-canvas-draw';
import * as ArtService from '../../utils/artService';
import LZ from 'lz-string';

export default function Gallery() {

    const [pieces, setPieces] = useState([]);
    let numPieces = 0;

    async function getArt() {
        try {
            const artPieces = await ArtService.getAll();
            numPieces = artPieces.artPieces.length;
            setPieces(artPieces.artPieces);
        } catch (err) {
            console.log(err, "No art pieces uploaded");
        }
    }

    console.log(pieces);

    // async function loadArt(art) {
    //     return (
    //         <CanvasDraw 
    //             disabled
    //             hideGrid
    //         />
    //     )
    // }

    useEffect(() => {
        getArt();
    }, [])


    async function showArt() {
        for (let i=0; i<numPieces; i++) {
            return (
                <CanvasDraw 
                    disabled
                    hideGrid
                    loadTimeOffset={0}
                    saveData={pieces[i].compressedFile}
                />
            )
        }
    }

    useEffect(() => {
        showArt();
    }, [])

    return (
        <div id='gallery'>
            <Grid>

            </Grid>
            {pieces.map((piece, i) => 
                <CanvasDraw
                    disabled
                    hideGrid
                    loadTimeOffset={0}
                    saveData={piece.compressedFile}
                />
            )}
        </div>
    )
}