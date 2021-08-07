import React, { useState, useRef, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import CanvasDraw from 'react-canvas-draw';
import * as ArtService from '../../utils/artService';
import LZ from 'lz-string';

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

    // async function loadArt(art) {
    //     return (
    //         <CanvasDraw 
    //             disabled
    //             hideGrid
    //         />
    //     )
    // }

    useEffect(()=> {
        getArt();
    }, [])


    async function showArt() {

    }

    return (
        <div id='gallery'>
            {/* Loop through database to get savedData strings for 
            each art piece. Then use loadSaveData() */}
            <CanvasDraw
                disabled
                hideGrid
                loadTimeOffset={0}
                saveData={pieces[0].compressedFile}
            />
            <CanvasDraw
                disabled
                hideGrid
                loadTimeOffset={0}
                saveData={pieces[1].compressedFile}
            />
            <CanvasDraw
                disabled
                hideGrid
                loadTimeOffset={0}
                saveData={pieces[2].compressedFile}
            />
            <CanvasDraw
                disabled
                hideGrid
                loadTimeOffset={0}
                saveData={pieces[3].compressedFile}
            />
            <CanvasDraw
                disabled
                hideGrid
                loadTimeOffset={0}
                saveData={pieces[4].compressedFile}
            />
            {/* {pieces.forEach(piece => {
                console.log('piece  # ' + piece.index);
                console.log(piece.compressedFile);
                <CanvasDraw
                    disabled
                    hideGrid
                    loadTimeOffset={0}
                    saveData={piece.compressedFile}
                />
            })} */}
        </div>
    )
}