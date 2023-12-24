import {
    Box,
    Button,
    Grid, Input,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Typography
} from "@mui/material";

import {useEffect, useState} from "react";
import Axios from "axios";

const User = () => {
    const [usr, setUsers] = useState([]);

    const [id, setId] = useState('');

    const [name, setName] = useState('');

    const buttonText = 'Submit';

    useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {
        Axios.get('http://localhost:3001/api/users').then(responce => {
            console.log(responce.data);
            setUsers(responce.data || []);
        }).catch(error => {
            alert(error.text)
        })

    }

    const addUser = (data) => {

        console.log("Save !")

        const payLoad = {
            id: data.id,
            name: data.name
        }

        Axios.post('http://localhost:3001/createuser', payLoad).then(() => {
            getUser();
            alert("User Successfully Added !");
        }).catch(err => {
            alert(err.text)
        })
    }

    const updateUser = (updateData) => {
        const payLoad = {
            id: updateData.id,
            name: updateData.name
        }

        Axios.put('http://localhost:3001/api/updateuser', payLoad).then(() => {
            getUser();
            alert("Successfully updated !")
        }).catch(err => {
            alert(err.text)
        })

    }

    const deleteUser = (data) => {
        if (window.confirm("Are you sure to delete this USER ?")){
            Axios.put('http://localhost:3001/api/deleteuser', data)
                .then(response => {
                    console.log(response.data);
                    getUser();
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                });
        }else {
            alert("Delete Cancel !")
        }

    }


    return (
        <Box sx={{width: 'calc(100%-100px)'}}>

            {/*<UserForm adduser={addUser} setU={selectUser}/>*/}

            <Grid
                container
                spacing={2}
                sx={{
                    backgroundColor: 'white',
                    margin: 'auto',
                    display: 'block',
                    width: '60vw',
                    height: 'max-content'
                }}
            >
                <Grid item xs={12}>
                    <Typography components={'h1'} sx={{color: 'black', marginBottom: '50px'}}>Sample Form</Typography>
                    <Grid item xs={12} sm={6} sx={{display: 'flex'}}>
                        <Typography component={'label'}
                                    htmlFor='id'
                                    sx={{
                                        color: 'black',
                                        marginRight: '20px',
                                        width: '100px',
                                        display: 'block',
                                        fontSize: '16px'
                                    }}
                        >
                            ID

                        </Typography>
                        <Input

                            type='text'
                            id='id'
                            name='id'
                            sx={{width: '400px'}}
                            value={id}
                            onChange={e => setId(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} sx={{display: 'flex'}}>
                    <Typography component={'label'}
                                htmlFor='id'
                                sx={{
                                    color: 'black',
                                    marginRight: '20px',
                                    width: '100px',
                                    display: 'block',
                                    fontSize: '16px'
                                }}
                    >
                        Name

                    </Typography>
                    <Input

                        type='text'
                        id='name'
                        name='name'
                        sx={{width: '400px'}}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Grid>
                <Button id={'btnSave'} sx={{
                    margin: 'auto',
                    backgroundColor: 'blue',
                    color: 'white',
                    marginLeft: '15px',
                    marginTop: '20px',
                    '&:hover': {
                        backgroundColor: "black",
                        color: 'white'
                    }

                }}
                        onClick={() => {
                            addUser({id: id, name: name})
                            setName('')
                            setId('')

                        }}

                >
                    {
                        buttonText
                    }
                </Button>

                <Button sx={{
                    margin: 'auto',
                    backgroundColor: 'blue',
                    color: 'white',
                    marginLeft: '15px',
                    marginTop: '20px',
                    '&:hover': {
                        backgroundColor: "black",
                        color: 'white'
                    }

                }}
                        onClick={() => {
                            updateUser({id: id, name: name})
                            setName('')
                            setId('')

                        }}

                >
                   Update
                </Button>
            </Grid>

            <TableContainer component={Paper} sx={{marginTop: '50px'}}>
                <Table sx={{width: "70vw", margin: 'auto', border: '1px solid black'}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {

                            usr.length > 0 ? usr.map(row => (
                                <TableRow key={row.user_id} sx={{
                                    transitionDuration: '2s', '&:hover': {
                                        backgroundColor: "#e9a6f1",
                                        color: 'white'
                                    }
                                }}>
                                    <TableCell componet='th' scope='row'>{row.user_id}</TableCell>
                                    <TableCell componet='th' scope='row'>{row.user_name}</TableCell>
                                    <TableCell>
                                        <Button
                                            sx={{
                                                margin: '0px 10px',
                                                border: '1px solid black',
                                                backgroundColor: '#8587ed',
                                                color: 'black'
                                            }}
                                            onClick={() => {
                                                setId(row.user_id)
                                                setName(row.user_name)
                                            }}
                                        >Update</Button>
                                        <Button
                                            sx={{
                                                margin: '0px 10px',
                                                border: '1px solid black',
                                                backgroundColor: '#ed4040',
                                                color: 'black'
                                            }}
                                            onClick={() => {
                                                deleteUser({id: row.user_id})
                                            }}
                                        >Delete</Button>
                                    </TableCell>
                                </TableRow>
                            )) : (
                                // alert("no Users !")
                                console.log("om empty !")
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );

}

export default User;