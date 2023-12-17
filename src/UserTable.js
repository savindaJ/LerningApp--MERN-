
import {Paper ,Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";



const UserTable = ({usr})=>{
    return(
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        usr.map(row=>(
                            <TableRow key={row.id} sx={{'&:last-child td , &:last-child td ': {border:0}}}>
                                <TableCell componet='th' scope='row'>{row.id}</TableCell>
                                <TableCell componet='th' scope='row'>{row.name}</TableCell>
                                <TableCell>
                                    <Button
                                        sx={{margin:'0px 10px'}}
                                        onClick={()=>{}}
                                    >Update</Button>
                                    <Button
                                        sx={{margin:'0px 10px'}}
                                        onClick={()=>{}}
                                    >Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );

}

export default UserTable;