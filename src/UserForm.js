import {Button, Grid, Input, Typography} from "@mui/material";

const UserForm = (par) => {
    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: 'white',
                marginBottom: '30px',
                display: 'block'
            }}
        >
            <Grid item xs={12}>
                <Typography components={'h1'} sx={{color: 'black'}}>Sample Form</Typography>
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
                        value={''}
                        onChange={e=>{}}
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
                    value={''}
                    onChange={e=>{}}
                />
            </Grid>
            <Button sx={{
                margin:'auto',
                backgroundColor:'red',
                color:'white',
                marginLeft:'15px',
                marginTop:'20px',
                '$:hover':{
                    backgroundColor:"black",
                    color:'black'
                }

            }}>Submit</Button>
        </Grid>
    );
}

export default UserForm;