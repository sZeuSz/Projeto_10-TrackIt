import react from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { Input, Form, Button, Logotype } from "../Login/Login";
import Logo from "../Login/logo.png";

export default function Registration () {

    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [name, setName] = useState();



    /*const config = {
        headers: {
            "Authorization": "Bearer token_recebido"
        }
    }

    axios.get("http://meusite.com/messages", config);*/

    function register (event) {
        /*
        if(/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email) && password.replaceAll(" ", "").length > 0){

            history.push('/');
        }
        else{
            setValid(null);
        }*/
        event.preventDefault();
        console.log("(achôô");
    }

    return  (
        <Form onSubmit={register}>
            <Logotype src={Logo} alt="Logo" />
            <Input type="email" placeholder="email" required></Input>
            <span>Insira um email válido</span>
            <Input type="password" placeholder="senha"required ></Input>
            <span>Insira uma senha válido</span>
            <Input type="text" placeholder="nome" required></Input>
            <span>Insira um nome válido</span>
            <Input type="file" placeholder="foto" required></Input>
            <span>Insira um foto válido</span>
            <Button type="submit">Cadastrar</Button>
        </Form >
    );
}


