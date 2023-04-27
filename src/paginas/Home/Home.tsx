import { Grid, Paper, Button, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import { useEffect } from "react";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import {toast} from "react-toastify";

function Home() {
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    
    useEffect(() => {
      if (token == "") {
        toast.error("Você precisa estar logado", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
          });
          navigate("/login")
  
      }
  }, [token])
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid item xs={6}>
                    <Box alignItems="center" paddingX={14} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vinde ao Mundo Bruxo!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" className='citacao'>"Palavras são, na minha nada humilde opinião, nossa inesgotável fonte de magia, capazes de causar grandes sofrimentos e também de remediá-los.”</Typography>
                        <Typography gutterBottom color="textPrimary" component="h5" className='ct-autor'>-Alvo Dumbledore</Typography>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/posts" className="text-decorator-none">
                            <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="src/assets/imagens/hogwarts.png" alt="" width="673px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;