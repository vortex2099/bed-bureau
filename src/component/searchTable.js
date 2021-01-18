import React from 'react';
import { MDBDataTable, MDBDataTableV5, MDBBtn, MDBTableHead, MDBTableBody, MDBTable, Button } from 'mdbreact';

const DatatablePage = () => {

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('http://helixsmartlabs.in/portfolio/old/bed_bureau/bed.php')
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result)
    //             setData(result.posts)
    //         })
    // }, [])

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
            },
            {
                label: 'Action',
                field: 'action',
                width: 100,


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
                admin: "vivek@gmail.com",
                action: <MDBBtn rounded color="info" size="sm">Action</MDBBtn>

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
                admin: "dhruv@gmail.com",
                action: <MDBBtn rounded color="info" size="sm">Action</MDBBtn>
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
                admin: "dhruv@gmail.com",
                action: <MDBBtn rounded color="info" size="sm">Action</MDBBtn>
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
                admin: "dhruv@gmail.com",
                action: <MDBBtn rounded color="info" size="sm">Action</MDBBtn>
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
                admin: "dhruv@gmail.com",
                action: <MDBBtn rounded color="info" size="sm">Action</MDBBtn>
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
                admin: "dhruv@gmail.com",
                action: <MDBBtn rounded color="info" size="sm">Action</MDBBtn>
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
                admin: "vivek@gmail.com",
                action: <MDBBtn rounded color="info" size="sm">Action</MDBBtn>
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
                admin: "vivek@gmail.com",
                action: <MDBBtn rounded color="info" size="sm">Action</MDBBtn>
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
                admin: "vikas@gmail.com",
                action: <MDBBtn rounded color="info" size="sm">Action</MDBBtn>
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
                admin: "vikas@gmail.com",
                action: <MDBBtn rounded color="info" size="sm">Action</MDBBtn>
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
                admin: "tusar@gmail.com",
                action: <MDBBtn rounded color="info" size="sm">Action</MDBBtn>
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
                admin: "tusar@gmail.com",
                action: <MDBBtn rounded color="info" size="sm">Action</MDBBtn>
            }

        ]
    };

    return (


        <MDBDataTable
            striped
            bordered
            small
            hover

            data={data}
            btn
            className="blueTable"
        />
    );
}

export default DatatablePage;