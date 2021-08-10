import React from 'react';
import './HomePage.css';
import Gallery from '../../components/Gallery/Gallery';
import PageHeader from '../../components/PageHeader/PageHeader';

export default function HomePage({user, handleLogout}) {
    return (
        <>
            <PageHeader user={user} handleLogout={handleLogout}/>
            <div id='gallery'>
                <Gallery />
            </div>
        </>
    )
}