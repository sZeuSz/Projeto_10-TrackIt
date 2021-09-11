import TopBar from "../TopBar/TopBar";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import { CircularProgressbar, CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Today() {
    const percentage = 25;
    return (
        <>
            <TopBar />
            <SituationHabitsContent>
                <Date>Segunda, 17/05</Date>
                <Span>Nenhum hábito concluído ainda</Span>
                <HabitSituation>
                    <HabitTitle>Ler 1 capítulo de livro</HabitTitle>
                    <button></button>
                    
                    <Records>Sequência atual: 3 dias</Records>
                    <Records>Seu recorde: 5 dias</Records>
                </HabitSituation>
                <HabitSituation>
                    <HabitTitle>Ler 1 capítulo de livro</HabitTitle>
                    <button></button>
                    <Records>Sequência atual: 3 dias</Records>
                    <Records>Seu recorde: 5 dias</Records>
                </HabitSituation>
                <Example label="Default">
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </Example>
            </SituationHabitsContent>
            <Footer />

        </>
    );
}
function Example(props) {
    return (
      <div style={{ marginBottom: 80 , display: "fixed", zIndex: 555}}>
        <hr style={{ border: "2px solid purple" }} />
        <div style={{ marginTop: 30, display: "flex" }}>
          <div style={{ width: "30%", paddingRight: 30 }}>{props.children}</div>
          <div style={{ width: "70%" }}>
            <h3 className="h5">{props.label}</h3>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    );
  }

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

export const Date = styled.h2`
    color: #126BA5;
    font-size: 22.98px;
    margin-bottom: 50px;
`;

export const HabitSituation = styled.div`
    width: 340px;
    height: 94px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 13px 11px 0 17px;
    margin-bottom: 10px;
    position: relative;
    button {
        width: 69px;
        height: 69px;
        background-color: #EBEBEB;
        position: absolute;
        top: 13px;
        right: 13px;
    }
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