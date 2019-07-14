import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
//import Grid from '@material-ui/core/Grid'; //currently vertical
import {Link} from 'react-router-dom';
import { isAbsolute } from 'path';

//TODO: stylize (bootstrap) + ./css sheet

const titleStyle = {
    top: '10%',
    //font??
}

const subtitleStyle = {
    top: '20%',
    //font??
}

const databaseStyle = {
    top: '50%',
}

const glossaryStyle = {
    bottom: '10%',
}

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
                <h1 style={titleStyle}>
                    Creators Circle
                </h1>
                <h2 style={subtitleStyle}>
                    Opportunities Database
                </h2>
                <div style={databaseStyle}>
                    <ViewDatabase />
                </div>
                <br />
                <div style={glossaryStyle}>
                    <ViewGlossary />
                </div>
            </div>
        )
    }
}


export default Home;