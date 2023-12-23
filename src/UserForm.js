import {Button, Grid, Input, Typography} from "@mui/material";
import {useEffect, useState} from "react";

const UserForm = (par,update,submitted,val,e) => {

    const [id,setId] = useState('');
    const [name,setName] = useState('');

    let bool = e;

    useEffect(()=>{
        setId(val.upData.setSlectedUser(id));
        setName(val.upData.setSlectedUser(name));
    },[val.updata])


   /* useEffect(()=>{
        if (!submitted.submit){
            setId('');
            setName('');
        }
    },[submitted.submit])*/

    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: 'white',
                margin:'auto',
                display: 'block',
                width:'60vw',
                height:'max-content'
            }}
        >
            <Grid item xs={12}>
                <Typography components={'h1'} sx={{color: 'black',marginBottom:'50px'}}>Sample Form</Typography>
                <Grid item xs={12} sm={6} sx={{display:'flex'}}>
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
                        sx={{width:'400px'}}
                        value={id}
                        onChange={e=>setId(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={6} sx={{display:'flex'}}>
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
                    sx={{width:'400px'}}
                    value={name}
                    onChange={e=>setName(e.target.value)}
                />
            </Grid>
            <Button sx={{
                margin:'auto',
                backgroundColor:'blue',
                color:'white',
                marginLeft:'15px',
                marginTop:'20px',
                '&:hover':{
                    backgroundColor:"black",
                    color:'white'
                }

            }}
                    onClick={()=> bool ? update.updateUser({id:id,name:name}) : par.adduser({id:id,name:name})}

            >
                {
                    bool ? 'update' : 'save'
                }
            </Button>
        </Grid>
    );
}

export default UserForm;