import { useState } from 'react';
import './Login.css';
import Logo from '../header/img/logo.png';
import Patas from './patas.png';
import api from '../../services/api';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
 
    

async function handleSubmit(e) {
    e.preventDefault();

    try {
        const payload = {
            email: email,
            senha: senha
        };

        const response = await api.get('/usuarios/', { params: payload });


        if (response.data.status === 1) {
            alert('Login realizado com sucesso!');
            console.log(response.data);
        } else {
            alert(`Erro: ${response.data.mensagem.erro}`);
        }

    } catch (error) {
        console.error(error);
        if (error.response) {
            alert(`Erro: ${error.response.data.erro || 'Erro desconhecido.'}`);
        } else {
            alert('Erro ao conectar com o servidor.');
        }
    }
}
    return (
        <div className='container'>
            <img src={Logo} alt="logo" />
            <img src={Patas} alt="patas" className="patas" />

            <p>Entre na sua conta para continuar</p>
            <form className='card' onSubmit={handleSubmit}>
                <h1>Entrar</h1>
                <h4>Digite suas credenciais para acessar sua conta</h4>

                <p>Email</p>
                <input
                    name='email'
                    type='email'
                    placeholder='seu@email.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <p>Senha</p>
                <input
                    name='senha'
                    type='password'
                    placeholder='Digite sua senha'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <a href='#' >Esqueceu a senha?</a>

                <button type='submit'>Entrar</button>

                <p>
                    Não tem uma conta?  <a href='#'> Criar conta</a>
                </p>
            </form>
            
        </div>
    );
}

export default Login;

