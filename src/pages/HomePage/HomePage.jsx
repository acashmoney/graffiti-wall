import React, { useState } from 'react';
import './HomePage.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Gallery from '../../components/Gallery/Gallery';
import userService from '../../utils/userService';
import {Header} from 'semantic-ui-react';

export default function HomePage(props) {
    return (
        <>
            <Header as='h1'>
                <div id='site-title'>Graffiti Wall</div>
            </Header>
            <Header as='h2'>
                <a className= 'site-action' href='/create'>
                    Make Your Mark
                </a>
            </Header>
            <p>
                Submitted drawings below
            </p>
            <Gallery />
        </>
    )
}