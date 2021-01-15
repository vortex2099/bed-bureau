import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = () => {
    const data = {
        columns: [
            {
                label: 'Ward Name',
                field: 'name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Region',
                field: 'region',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Location',
                field: 'location',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Specialism',
                field: 'specialism',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Total',
                field: 'total',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Occupied',
                field: 'occupied',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Reserve',
                field: 'reserve',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Free',
                field: 'free',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Queue',
                field: 'queue',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Type',
                field: 'type',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Gender',
                field: 'gender',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Admin',
                field: 'admin',
                sort: 'asc',
                width: 100
            }
        ],
        rows: [
            {
                name: 'Apollo',
                region: 'Faridabad',
                location: "sector 43",
                specialism: 'Heart',
                total: '61',
                occupied: '25',
                reserve: "10",
                free: "26",
                queue: "0",
                type: "Covid-19",
                gender: "Male",
                admin: "vivek@gmail.com"
            },
            {
                name: 'Max',
                region: 'Faridabad',
                location: "sector 15",
                specialism: 'Brain',
                total: '25',
                occupied: '10',
                reserve: "10",
                free: "5",
                queue: "0",
                type: "General",
                gender: "Female",
                admin: "dhruv@gmail.com"
            },
            {
                name: 'Escort',
                region: 'Faridabad',
                location: "sector 12",
                specialism: 'Kidney',
                total: '50',
                occupied: '30',
                reserve: "10",
                free: "10",
                queue: "0",
                type: "General",
                gender: "Female",
                admin: "dhruv@gmail.com"
            },
            {
                name: 'Vedanta',
                region: 'Delhi',
                location: "Saket",
                specialism: 'Heart',
                total: '30',
                occupied: '15',
                reserve: "5",
                free: "10",
                queue: "0",
                type: "Covid-19",
                gender: "Male",
                admin: "dhruv@gmail.com"
            },
            {
                name: 'Vedanta',
                region: 'Delhi',
                location: "Saket",
                specialism: 'Heart',
                total: '30',
                occupied: '15',
                reserve: "5",
                free: "10",
                queue: "0",
                type: "Covid-19",
                gender: "Female",
                admin: "dhruv@gmail.com"
            },
            {
                name: 'Escort',
                region: 'Faridabad',
                location: "sector 12",
                specialism: 'Kidney',
                total: '50',
                occupied: '30',
                reserve: "10",
                free: "10",
                queue: "0",
                type: "General",
                gender: "Male",
                admin: "dhruv@gmail.com"
            },
            {
                name: 'AIIMS',
                region: 'Delhi',
                location: "South Delhi",
                specialism: 'Lungs',
                total: '100',
                occupied: '70',
                reserve: "10",
                free: "20",
                queue: "0",
                type: "Covid-19",
                gender: "Male",
                admin: "vivek@gmail.com"
            },
            {
                name: 'AIIMS',
                region: 'Delhi',
                location: "South Delhi",
                specialism: 'Lungs',
                total: '100',
                occupied: '70',
                reserve: "10",
                free: "20",
                queue: "0",
                type: "Covid-19",
                gender: "Female",
                admin: "vivek@gmail.com"
            },
            {
                name: 'Aditya',
                region: 'Hyderabad',
                location: "Tilak",
                specialism: 'Lungs',
                total: '50',
                occupied: '40',
                reserve: "5",
                free: "5",
                queue: "0",
                type: "General",
                gender: "Male",
                admin: "vikas@gmail.com"
            },
            {
                name: 'Aditya',
                region: 'Hyderabad',
                location: "Tilak",
                specialism: 'Lungs',
                total: '50',
                occupied: '40',
                reserve: "5",
                free: "5",
                queue: "0",
                type: "General",
                gender: "Female",
                admin: "vikas@gmail.com"
            },
            {
                name: 'Apex',
                region: 'Jaipur',
                location: "Malviya Nagar",
                specialism: 'Heart',
                total: '25',
                occupied: '16',
                reserve: "4",
                free: "5",
                queue: "0",
                type: "Covid-19",
                gender: "Female",
                admin: "tusar@gmail.com"
            },
            {
                name: 'Apex',
                region: 'Jaipur',
                location: "Malviya Nagar",
                specialism: 'Heart',
                total: '25',
                occupied: '16',
                reserve: "4",
                free: "5",
                queue: "0",
                type: "Covid-19",
                gender: "Male",
                admin: "tusar@gmail.com"
            }

        ]
    };

    return (
        <MDBDataTable
            striped
            bordered
            small
            data={data}
        />
    );
}

export default DatatablePage;