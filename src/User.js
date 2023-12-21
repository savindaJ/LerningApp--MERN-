import UserForm from "./UserForm";
import {Box} from "@mui/material";
import UserTable from "./UserTable";
import {useEffect, useState} from "react";
import Axios from "axios";

const User = () => {
    const [usr,setUsers] = useState([]);

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
    return (
        <Box sx={{width:'calc(100%-100px)'}}>
            <UserForm/>
            <UserTable rows={usr}/>
        </Box>
    );

}

export default User;