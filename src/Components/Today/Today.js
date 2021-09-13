import TopBar from "../TopBar/TopBar";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import "react-circular-progressbar/dist/styles.css";
import { useEffect } from "react/cjs/react.development";
import { getToday } from "../../Service/trackit";
import { useContext, useState } from "react";
import UserContext from "../../Contexts/UserContext";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import HabitSituation from "./HabitSituation";
import { useHistory } from "react-router";

export default function Today() {

    const history = useHistory();
    const {userInfo} = useContext(UserContext);
    const {setPercentage} = useContext(UserContext);    
    const [data, setData] = useState([]);

    if(userInfo === ""){

        history.push("/");
    }
    function renderToday() {
        getToday(userInfo.token).then((response) => {setData(response.data)}).catch(err => {
            alert("erro")
        });
    }

    useEffect(renderToday, []);

    const habitsDone = data.filter((e) => e.done);

    habitsDone.length > 0 ? setPercentage((habitsDone.length/data.length*100).toFixed(0)) : setPercentage(0);

    return (
        <>
            <TopBar />
            <Container>
                <Date>{`${dayjs().locale('pt-br').format("dddd")}, ${dayjs().format("D")}/${dayjs().format("MM")}`}</Date>
                <Status color={habitsDone.length > 0 ? "#8FC549" : "#BABABA"}>
                    <p>{habitsDone.length > 0 ? `${(habitsDone.length/data.length*100).toFixed(0)}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}</p>
                </Status>
                {data.length > 0 ? data.map((d) => <HabitSituation key={d.id} data={d} renderToday={renderToday}/>) : ""}
            </Container>
            <Footer />
        </>
    );
}


  const Container = styled.div`
  height: 100vh;
  margin-top: 70px;
  padding: 0 18px 0 18px;
  background-color: #E5E5E5;
`;

const Date = styled.h2`
  color: #126BA5;
  font-size: 23px;
  padding-top: 20px;
  margin-bottom: 5px;
`;

const Status = styled.div`
  color: ${props => props.color};
  font-size: 18px;
  margin-bottom: 28px;
`;

export const SituationHabitsContent = styled.div`
    background-color: #E5E5E5;
    padding: 98px 18px 0 17px;
    height: 100vh;
`;

export const Span = styled.span`
    color: #BABABA;
    font-size: 17.98px;
    position: absolute;
    top: calc(70px + 57px);
    margin-bottom: 28px;
    margin-bottom: 50px;
`;

export const HabitTitle = styled.h3`
    font-size: 19.98px;
    margin-bottom: 8px;
    color: #666666;
`;

export const Records = styled.h4`
    font-size: 12.98px;
    color: #666666;

`;