import Logo from "./logo.png"
import { Link, useHistory } from "react-router-dom";
import React, { useContext, useState } from "react";
import { postLogin } from "../../Service/trackit";
import {Form, Input, Logotype, Button} from "../../GlobalStyle/GlobalStyle";
import UserContext from "../../Contexts/UserContext";
import Loader from "react-loader-spinner";
export default function Login() {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setUserInfo} = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    
    function login (event) {

        event.preventDefault();

        const body = {
            email,
            password
        }

        //const promise = postLogin();
        setLoading(true);

        postLogin(body).then((response) => {
            setUserInfo(response.data);
            history.push("/hoje");
        });
        postLogin(body).catch((error) => {
            alert("Email ou senha inválidos");
            setLoading(false);
        });
    }

    
    return (
        <Form onSubmit={login}>
            <Logotype src={Logo} alt="Logo" />
            <Input type="email" placeholder="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading}></Input>
            <Input type="password" placeholder="senha" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading}></Input>
            <Button type="submit"> {!loading ? "Entrar" : <Loader type="Oval" color="#FFFFFF" height={40} width={40} /> } </Button>
            
            <h6 onClick={() => history.push("/cadastro")}>Não tem uma conta? Cadastre-se!</h6>
            
        </Form >
    );
}