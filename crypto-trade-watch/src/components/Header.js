import { AppBar, MenuItem, Select, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import '../App.css';
import React from 'react';


const Header = () => {


    return(
        <AppBar position='static'> 
            <Container>
                <Toolbar>
                    <Typography className="Header-Typography">
                        Goldridge Crypto Trade
                    </Typography>
                    <Select variant='outlined' 
                            style={{
                                width: 100,
                                marginLeft: 20,
                                height: 40,
                    }}>
                        <MenuItem value={"USD"}>USD</MenuItem>
                        <MenuItem value={"KSH"}>Ksh</MenuItem>
                    </Select> 
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;