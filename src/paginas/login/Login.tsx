import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import UsuarioLogin from '../../models/UsuarioLogin';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';

function Login() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            token: '',
            foto: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token))
            navigate('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, usuarioLogin, setToken);

            toast.success("Usuário logado com sucesso", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
              });
        } catch (error) {
            toast.error("Dados do usuário inconsistentes. Erro ao logar!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
              });
        }
    }

    return (
        <>

        <Grid container justifyContent='center' alignItems='center'>
                    <Grid alignItems='center' xs={3} >
                        <div className='login' >
                            <Box paddingX={5} >
                                <form onSubmit={onSubmit} >
                                    <br></br>
                                    <br></br>
                                    <Typography variant='h6'  color='textPrimary'  align='center' className='textos1'>Preparade para conhecer um novo universo?</Typography>
                                    <TextField  value={usuarioLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' />
                                    <TextField value={usuarioLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'  />

                                    <Box marginTop={1} textAlign='center'>
                                        <Button type='submit' variant='contained' color='primary'>
                                            Logar
                                        </Button>
                                    </Box>
                                </form>
                            </Box>
                       
                        <Box display='flex' justifyContent='center'>
                            <Box marginTop={1} >
                                <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                            
                        
                            <Link to='/cadastro' >
                                <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                            </Link> 
                        </Box>
                        </Box>
                    </div>
                  </Grid>  
                </Grid>
               
               </>
                );
            }
                export default Login;