import React, { useState, useRef, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
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
            <Grid columns={3} padded>
                {pieces.slice(0).reverse().map((piece, i) => 
                    <Grid.Column>
                        <CanvasDraw
                            disabled
                            hideGrid
                            loadTimeOffset={0}
                            saveData={piece.compressedFile}
                        />
                    </Grid.Column>
                )}
            </Grid>
        </div>
    )
}