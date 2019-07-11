import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
//import Grid from '@material-ui/core/Grid'; //currently vertical
import {Link} from 'react-router-dom';
import { isAbsolute } from 'path';

/*
NOTES:
-) stylize (bootstrap) + ./css sheet
*/

function ViewDatabase() {
    return (
        <Link to='/database'>
            <Button variant = "outline-danger">
                Database
            </Button>
        </Link>
    )
}

function ViewGlossary() {
    return (
        <Link to='/glossary'>
            <Button variant = "outline-danger">
                Glossary
            </Button>
        </Link>
    )
}

class Home extends React.Component {
    state = {
    }

    render() {
        return (
            <div>
                <h1>Creators Circle</h1>
                <ViewDatabase />
                <ViewGlossary />
            </div>
        )
    }
}


export default Home;