import React,{useState} from 'react';
import './table.styles.css';
import MaterialTable from 'material-table';

export const Table = () => {
    return(
        <div className="table-container">
            <MaterialTable
                title="Multiple Actions Preview"
                columns={[
                    { title: 'Name', field: 'name' },
                    { title: 'Surname', field: 'surname' },
                    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                    {
                    title: 'Birth Place',
                    field: 'birthCity',
                    lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                    },
                ]}
                data={[
                    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                    { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                ]}
                actions={[
                    {
                    icon: 'save',
                    tooltip: 'Save User',
                    onClick: (event, rowData) => alert("You saved " + rowData.name)
                    },
                    {
                    icon: 'delete',
                    tooltip: 'Delete User',
                    onClick: (event, rowData) => alert("Deleted " + rowData.name)
                    }
                ]}
            />
        </div>
  )


}