import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../Contexts/UserContext";
import trackit from "./trackit.svg";
export default function TopBar() {

    const {userInfo} = useContext(UserContext);
    
    return (
        <Header>
            <LogotypeTopBar src={trackit} alt="Logo-trackit" />
            <ProfileImg src={userInfo.image} alt="Imagem de perfil" />
        </Header>
    );
}


export const Header = styled.header`
    height: 70px;
    background-color: #126BA5;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px 0 18px;  
    z-index: 2; 
`;

export const LogotypeTopBar = styled.img`
    width: 97px;
    height: 49px;
`;

export const ProfileImg = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 50%;
`;