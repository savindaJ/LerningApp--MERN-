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
        <Box>
            <UserForm/>
            <UserTable rows={usr}/>
        </Box>
    );

}

export default User;