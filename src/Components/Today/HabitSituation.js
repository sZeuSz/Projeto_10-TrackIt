import styled from "styled-components";
import { CheckmarkOutline } from 'react-ionicons'
import { useContext } from "react";
import { releaseState } from "../../Service/trackit";
import UserContext from "../../Contexts/UserContext";

export default function HabitSituation({data, renderToday}) {

    const {userInfo} = useContext(UserContext);

    function release() {
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo.token}`
            }
        }

        if(data.done) {
            releaseState("uncheck", data.id, config).then(resp => {
                renderToday();
            }).catch(err => {
                alert("erro no servidor! perdona-me");
            });
        }else{
            releaseState("check", data.id, config).then(resp => {
                renderToday();
            }).catch(err => {
                alert("erro no servidor! perdona-me");
            });
        }
    }

    return (
        <Container color={data.done ? "#8FC549" : "#EBEBEB" }>
            <h3>{data.name}</h3>
            <button>
                <CheckmarkOutline
                    color={'#ffffff'} 
                    height="60px"
                    width="50px"
                    onClick={release}
                />
            </button>
            <Records color={data.currentSequence === data.highestSequence && data.done ? "#8FC549" : "#666666"}>
                <p>Sequência atual: <span>{data.currentSequence} {data.currentSequence !== 1 ? "dias" : "dia"}</span></p>
                <p>Seu recorde: <span>{data.highestSequence} {data.highestSequence !== 1 ? "dias" : "dia"}</span></p>                    
            </Records>
       </Container>
    );
}


const Container = styled.div`

    width: 340px;
    height: 94px;
    background-color: #FFFFFF;
    border-radius: 5px;
    position: relative;
    margin-top: 10px;
    h3 {
        font-size: 20px;
        margin-bottom: 8px;
        padding-left: 15px;
        padding-top: 13px;
        color: #666666; 
    }
    button {
        width: 69px;
        height: 69px;
        background-color: ${props => props.color};
        position: absolute;
        top: 13px;
        right: 13px;
        border: none;
        border-radius: 5px;
    }
`;

const Records = styled.div`
    padding-left: 15px;
    color: #666666;
    p {
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        font-size: 13px;
    }
    span {
        color: ${props => props.color};
    }
`;