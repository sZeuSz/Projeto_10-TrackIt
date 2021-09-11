import react from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useHistory } from "react-router";
import {Form, Input, Logotype, Button} from "../../GlobalStyle/GlobalStyle"
import Logo from "../Login/logo.png";
import { postRegister } from "../../Service/trackit";
import Loader from "react-loader-spinner";
export default function Registration () {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [UrlImage, setUrlImage] = useState(null);
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    function register (event) {
        event.preventDefault();

        const body = {
            email,
            name,
            image : UrlImage,
            password
        }
        setLoading(true);
        postRegister(body).then(() => history.push('/'));
        postRegister(body).catch(() => alert("Insira os dados corretamente"));
    }

    return  (
        <Form onSubmit={register}>
            <Logotype src={Logo} alt="Logo" />
            <Input type="email" placeholder="email" required value={email} onChange={e => setEmail(e.target.value)} disabled={loading}></Input>
            <Input type="password" placeholder="senha"required value={password} onChange={e => setPassword(e.target.value)} disabled={loading}></Input>
            <Input type="text" placeholder="nome" required value={name} onChange={e => setName(e.target.value)} disabled={loading}></Input>
            <Input type="url" placeholder="foto" required onChange={e => setUrlImage(e.target.value)} disabled={loading}></Input>
            <Button type="submit">{!loading ? "Cadastrar" : <Loader type="Oval" color="#FFFFFF" height={40} width={40} /> }</Button>
            <Link to="/">
                Já tem uma conta? Faça login!
            </Link>
        </Form >
    );
}


