import React from 'react'
import DataTable, {
    createTheme
} from 'react-data-table-component';

createTheme('solarized', {
    text: {
        primary: '#268bd2',
        secondary: '#2aa198',
    },
    background: {
        default: '#002b36',
    },
    context: {
        background: '#cb4b16',
        text: '#FFFFFF',
    },
    divider: {
        default: '#073642',
    },
    action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
    },
});

const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
   
        }
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};


const data = [{
    id: 1,
    title: 'Conan the Barbarian',
    year: '1982'
}];
const columns = [{
        name: 'Title',
        selector: 'title',
        sortable: true,
    },
    {
        name: 'Year',
        selector: 'year',
        sortable: true,
        right: true,
    },
];

function Table() {
    return (
        // <h3>hu</h3>
        <DataTable
            columns={columns}
            data={data}
            title="My TABLE"
            customStyles={customStyles}
            // theme="solarized"
        />
    )
}

export default Table
