import React, { useState } from 'react';
import './CreatePage.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import userService from '../../utils/userService';
import Canvas from '../../components/Canvas/Canvas';
import { useHistory, Link } from 'react-router-dom';
import { Grid, Container } from 'semantic-ui-react';

export default function CreatePage(props) {




    return (
        <>
            <Container>
                <Canvas />
            </Container>
        </>
    )
}