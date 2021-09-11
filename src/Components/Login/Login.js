import Logo from "./logo.png"
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

export default function Login() {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [valid, setValid] = useState(null);
            
    history.push("/");

    function register () {

        if(/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email) && password.replaceAll(" ", "").length > 0){

            history.push('/');
        }
        else{
            setValid(false);
        }
        
    }
    
    return (
        <Form valid={valid}>
            <Logotype src={Logo} alt="Logo" />
            <Input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
            <span>Insira um email válido</span>
            <Input type="text" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
            <span>Insira uma senha válida</span>
            <p>{email}</p>
            <p>{password}</p>
            <Button  onClick="">Entrar</Button>
            <Link to="/registration">
                Não tem uma conta? Cadastre-se!
            </Link>
        </Form >
    );
}

function validInfo(email, password){
    
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email) && password.replaceAll(" ", "").length > 0;
}

export const Form = styled.form`
    ${props => console.log(props.valid)}
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
        color: #52B6FF;
        font-size: 13.98px;
    }
    span {
        font-style: italic;
        width: 303px;
        color: red;
        padding-left: 3px;

        display: ${props => props.valid === null ? "none" : props.valid === true ? "none" : "block"}
    }
`;


export const Logotype = styled.img`
    width: 180px;
    height: 178.38px;
    margin-top: 68px;
    margin-bottom: 32.62px;
`;

export const Input = styled.input`
    width: 303px;
    height: 45px;
    margin-bottom: 6px;
    padding-left: 11px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
`;

export const Button = styled.button`
    width: 303px;
    height: 45px;
    margin-bottom: 25px;
    background-color: #52B6FF;
    font-size: 20.98px;
    color: #FFFFFF;
`;