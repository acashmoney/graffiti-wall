import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment } from 'semantic-ui-react';

export default function PageHeader({user, handleLogout}) {
    return (
        <>
            <Header>
                <Link to='/'>
                    <h1 id='site-title'>Graffiti Wall</h1>
                </Link>
            </Header>
            <Header as='h2'>
                <Link className='site-action' to='/create'>
                    Make your Mark
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link className='site-action' to='' onClick={handleLogout}>
                    PTFO
                </Link>
            </Header>
        </>
    )
}