import React, { useState } from 'react';
import './HomePage.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import userService from '../../utils/userService';
import {Header} from 'semantic-ui-react';

export default function HomePage(props) {
    return (
        <>
            <Header as='h1'>
                Graffiti Wall
            </Header>
            <Header as='h2'>
                <a href='/create'>Make Your Mark</a>
            </Header>
            <p>
                Submitted drawings below
            </p>
        </>
    )
}