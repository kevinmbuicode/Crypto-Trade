<<<<<<< HEAD
import {
  AppBar,
  createTheme,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import "../App.css";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CryptoContextProvider from "../CryptoContext";
=======
<<<<<<< HEAD
import { AppBar, MenuItem, Select, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import '../App.css';
import React from 'react';

>>>>>>> 624dc8d118d9b49943be228719ef9b53178b20e7

const Header = () => {
  const { currency, symbol} = useContext(CryptoContextProvider)
    
  const navigate = useNavigate();

  //created dark theme to cover our Header with dark mode:
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate("/")}
              className="Header-Typography"
              variant="h6"
            >
              Goldridge Crypto Trade
            </Typography>
            <Select
              variant="outlined"
              style={{
                width: 100,
                marginLeft: 20,
                height: 40,
                marginRight: 15,
              }}
              value={{currency, symbol}}
            >
              <MenuItem value={(e)=> e.target.value}>USD</MenuItem>
              <MenuItem value={(e)=> e.target.value}>Ksh</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
<<<<<<< HEAD
=======
=======
import React from 'react';

const Header = () => {
  return (
    <div>Header</div>
  )
}

export default Header
>>>>>>> 348dabd56a645a7d0b784cd61b9e4961b8b4a980
>>>>>>> 624dc8d118d9b49943be228719ef9b53178b20e7
