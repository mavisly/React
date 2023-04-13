import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Box } from '@mui/material';
import "./Navbar.css";
import "@emotion/react";


function Navbar() {

  return (
      <div className="root">
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>

            <Box style={{ cursor: "pointer" }} >
              <Typography variant="h5" className="title">
                BlogPessoal
              </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
              <Box mx={1} style={{ cursor: "pointer" }} >
                <Typography variant="h6" className="title">
                  Home
                </Typography>
              </Box>

              <Box mx={1} style={{ cursor: "pointer" }} >
                <Typography variant="h6" className="title">
                  Postagens
                </Typography>
              </Box>

              <Box mx={1} style={{ cursor: "pointer" }} >
                <Typography variant="h6" className="title">
                  Temas
                </Typography>
              </Box>

              <Box mx={1} style={{ cursor: "pointer" }} >
                <Typography variant="h6" className="title">
                  Cadastrar tema
                </Typography>
              </Box>

              <Box mx={1} style={{ cursor: "pointer" }} >
                <Typography variant="h6" className="title">
                  Logout
                </Typography>
              </Box>
            </Box>

            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    
  );
}
export default Navbar;