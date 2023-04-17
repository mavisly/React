import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box } from '@mui/material';
import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Link to="/" className='text-decorator-none'>
          <Box className='cursor'>
            <Typography variant="h5" color="inherit" >
              BlogPessoal
            </Typography>
          </Box>
        </Link>
        
        <Box display="flex" justifyContent="start">
          <Link to="/home" className='text-decorator-none'>
            <Box mx={1} className='cursor'>
              <Typography variant="h6" color="inherit" >
                Home
              </Typography>
            </Box>
          </Link>

          <Box mx={1} className='cursor'>
            <Typography variant="h6" color="inherit">
              Postagens
            </Typography>
          </Box>

          <Box mx={1} className='cursor'>
            <Typography variant="h6" color="inherit">
              Temas
            </Typography>
          </Box>

          <Box mx={1} className='cursor'>
            <Typography variant="h6" color="inherit">
              Cadastrar tema
            </Typography>
          </Box>

          <Link to='/login' className='text-decorator-none'>
            <Box mx={1} className='cursor'>
              <Typography variant="h6" color="inherit">
                Logout
              </Typography>
            </Box>
          </Link>

        </Box>

      </Toolbar>
    </AppBar>

  );
}
export default Navbar;