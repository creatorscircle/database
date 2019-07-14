import React, { Component } from 'react';
import MUIDataTable from 'mui-datatables'; //TODO: consider other options (firebase, mongodb)
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

//TODO: adjust categories in json + update file (i.e. website category)
//TODO: tailor options

class Database extends React.Component {
    render() {
        const columns = [
            {
                name: "Opportunity Title",
                label: "Title",
                options: {filter: true, sort: true }
            },
            {
                name: "Grade Level(s) Open To",
                label: "Grade Level(s) Open To",
                options: {filter: true, sort: true}
            },
            {
                name: "Scholarship, Award Amount, or Payment Plan (in USD)",
                label: "Scholarship, Award Amount, or Payment Plan (in USD)",
                options: {filter: true, sort: true}
            },
            {
                name: "App Deadline",
                label: "Deadline to Apply",
                options: {filter: true, sort: true}
            },
            {
                name: "Discipline",
                label: "Discipline",
                options: {filter: true, sort: true}
            },
            {
                name: "Opportunity Type",
                label: "Opportunity Type",
                options: {filter: true, sort: true}
            },
            {
                name: "Program Dates / Length",
                label: "Program Dates or Length of Time",
                options: {filter: true, sort: true}
            },
            {
                name: "Program Cost (USD)",
                label: "Program Cost (USD)",
                options: {filter: true, sort: true}
            },
            {
                name: "Location and Languages (if relevant)",
                label: "Location and Language",
                options: {filter: true, sort: true}
            },
            {
                name: "Description",
                label: "Description",
                options: {filter: true, sort: true}
            },
            {
                name: "Website",
                label: "Website",
                options: {filter: true, sort: true}
            }
        ];

        const data = require('./data_spreadsheet.json');

        const options = {
            filterType: 'checkbox',
            responsive: 'scroll',
            selectableRows: 'false',
            print: 'false',
            download: 'false',
            isRowSelectable: (dataIndex) => {
                return false;
            },
            onRowsDelete: (rowsDeleted) => {
                return;
            }
        };

        return (
            <div>
                <br />
                <Link to="/">
                    <Button variant="outline-danger">
                        Back
                    </Button>
                </Link>
                <h1>Opportunities Database</h1> 
                <MUIDataTable
                    data={data}
                    columns={columns}
                    options={options}
                />
            </div>
        )
    }
}

export default Database;