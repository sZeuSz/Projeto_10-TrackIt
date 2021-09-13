
import styled from "styled-components";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../Contexts/UserContext";

export default function Footer() {

    const {percentage} = useContext(UserContext);    
    const history = useHistory();

    return (
        <FooterComponent>
            <p onClick={() => history.push("/habitos")}>Hábitos</p>
            <div onClick={() => history.push("/hoje")}>
                <CircularProgressbar 
                    value={percentage}
                    text={`Hoje`}
                    styles={{
                        root: {backgroundColor: '#52B6FF', borderRadius: `${50}%`, width: 100, height: 100, marginBottom: 45, strokeWidth: 8},
                        path: {
                        stroke: `#FFFFFF`,
                        strokeLinecap: 'butt',
                        strokeWidth: `${8}px`,
                        transformOrigin: 'center center',
                        backgroundColor: 'black',
                        margin: 5,
                        },
                        trail: {
                        stroke: '#52B6FF',
                        strokeLinecap: 'butt',
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                        },
                        text: {
                        fill: '#FFFFFF',
                        fontSize: '16px',
                        },
                        background: {
                        fill: '#3e98c7',
                        },
                    }}
                    />
            </div>
            <p onClick={() => history.push("/historico")}>Histórico</p>
        </FooterComponent>
    );
}


export const FooterComponent= styled.div`
    width: 375px;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding: 0 31px 0 36px;
    justify-content: space-between;
    p {
        color: #52B6FF;
        font-size: 17.98px;
    }

`;