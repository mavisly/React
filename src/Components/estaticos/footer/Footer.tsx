import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import "./Footer.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { GitHub } from "@mui/icons-material";

function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token !== ""){
        footerComponent =  <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box style={{ backgroundColor: "#3F51B5", height: "120px" }}>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://www.github.com/mavisly" target="_blank" rel="noopener noreferrer">
                        <GitHub style={{ fontSize: 60, color: "white" }} />
                    </a>
                    <a href="https://www.linkedin.com/in/maria20vitoria" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                    </a>
                </Box>
            </Box>
            <Box style={{ backgroundColor: "#303F9F", height: "60px" }}>
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2020 Copyright:</Typography>
                </Box>
                <Box>
                    <a target="_blank" href="https://brasil.generation.org" rel="noopener noreferrer">
                        <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">brasil.generation.org</Typography>
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>
    }

    return (
        <>
           {footerComponent}
        </>
    );
}

export default Footer;