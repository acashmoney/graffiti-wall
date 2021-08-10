import React from 'react';
import './CreatePage.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import Canvas from '../../components/Canvas/Canvas';
import { Container } from 'semantic-ui-react';

export default function CreatePage({user, handleLogout}) {

    return (
        <>
            <PageHeader user={user} handleLogout={handleLogout}/>
            <br/><br/>
            <Container>
                <Canvas />
            </Container>
        </>
    )
}