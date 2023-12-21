import UserForm from "./UserForm";
import {Box} from "@mui/material";
import UserTable from "./UserTable";
import {useEffect, useState} from "react";
import Axios from "axios";

const User = () => {
    const [usr,setUsers] = useState([]);

    const [submitted,setSubmit] = useState(false);

    useEffect(()=> {
        getUser();
    },[]);

    const getUser = ()=>{
        Axios.get('http://localhost:3001/api/users').then(responce=>{
            console.log(responce.data);
            setUsers(responce.data || []);
        }).catch(error=>{
            console.log("err",error);
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


    return (
        <Box sx={{width:'calc(100%-100px)'}}>
            <UserForm
                adduser={addUser}
                sub = {submitted}
            />
            <UserTable rows={usr}/>
        </Box>
    );

}

export default User;