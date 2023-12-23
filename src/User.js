import UserForm from "./UserForm";
import {Box} from "@mui/material";
import UserTable from "./UserTable";
import {useEffect, useState} from "react";
import Axios from "axios";

const User = () => {
    const [usr,setUsers] = useState([]);

    const [submitted,setSubmit] = useState(false);
    const [edit,setEdit] = useState(false);
    const [selectUser,setSlectedUser] = useState({});

    useEffect(()=> {
        getUser();
    },[]);

    const getUser = ()=>{
        Axios.get('http://localhost:3001/api/users').then(responce=>{
            console.log(responce.data);
            setUsers(responce.data || []);
        }).catch(error=>{
            alert(error.text)
        })

    }

    const addUser = (data)=>{

        setSubmit(true);

        const payLoad = {
            id: data.id,
            name: data.name
        }

        Axios.post('http://localhost:3001/createuser',payLoad).then(()=>{
            getUser();
            setSubmit(false);
        }).catch(err =>{
            alert(err.text)
        })
    }

    const updateUser = (updateData)=>{
        const payLoad = {
            id: updateData.id,
            name: updateData.name
        }

        Axios.put('http://localhost:3001/updateuser',payLoad).then(()=>{
            getUser();
            setSubmit(false);
        }).catch(err =>{
            alert(err.text)
        })

    }


    return (
        <Box sx={{width:'calc(100%-100px)'}}>
            <UserForm
                adduser={addUser}
                updateUser={updateUser}
                sub = {submitted}
                upData={setSlectedUser}
                e={edit}
            />
            <UserTable rows={usr}
                selectedUser={selectUser}
            />
        </Box>
    );

}

export default User;