import UserForm from "./UserForm";
import {Box} from "@mui/material";
import UserTable from "./UserTable";

const usr = [
    {
        id: "U001",
        name: "kamal"
    }, {
        id: "U002",
        name: "savinda"
    }
]
const User = () => {
    return (
        <Box sx={{width:'calc(100%-100px)'}}>
            <UserForm/>
            <UserTable rows={usr}/>
        </Box>
    );

}

export default User;