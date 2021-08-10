import React, { useState } from 'react';
import './HomePage.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Gallery from '../../components/Gallery/Gallery';
import userService from '../../utils/userService';
import {Header} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';

export default function HomePage({user, handleLogout}) {
    return (
        <>
            <PageHeader/>
            <div id='gallery'>
                <Gallery />
            </div>
        </>
    )
}