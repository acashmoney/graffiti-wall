import React, { useState } from 'react';
import './CreatePage.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import userService from '../../utils/userService';
import PageHeader from '../../components/PageHeader/PageHeader';
import Canvas from '../../components/Canvas/Canvas';
import { useHistory, Link } from 'react-router-dom';
import { Header, Grid, Container } from 'semantic-ui-react';

export default function CreatePage({user, handleLogout}) {

    return (
        <>
            <PageHeader />
            <Container>
                <Canvas />
            </Container>
        </>
    )
}