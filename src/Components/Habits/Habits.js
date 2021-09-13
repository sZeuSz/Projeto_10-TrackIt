import styled from "styled-components";
import { Input } from "../../GlobalStyle/GlobalStyle";
import TopBar from "../TopBar/TopBar";
import Footer from "../Footer/Footer";
import svg from "./+.svg";
import { useContext, useState } from "react";
import UserContext from "../../Contexts/UserContext";
import { useEffect } from "react/cjs/react.development";
import { getHabits, postHabits } from "../../Service/trackit";
import HabitUser from "./Habit";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
export default function Habits() {
    
    const weekdays = ['D','S', 'T', 'Q', 'Q', 'S', 'S'];
    const [days, setDays] = useState([]);
    const [habits, setHabits] = useState(null);
    const {userInfo, setUserInfo} = useContext(UserContext);
    const [plus, setPlus] = useState(false);
    const [habitName, setHabitName] = useState("");
    const [reset, setReset] = useState(false);
    
    useEffect(() => {
        console.log(userInfo);
        getHabits(userInfo.token).then((response) => {
            console.log(response.data);
            setHabits(response.data)});
        getHabits(userInfo.token).catch((error) => alert("erro no servidor, sorry."));
    }, [])

    if(habits === null) {

        return (
            <h1>LOADING</h1>
        )
    }

    function saveHabit () {

        const body = {
            name: habitName,
            days
        }

        postHabits(userInfo.token, body).then((response) => {
            console.log(response.data);
            setHabits([...habits, response.data])
            setPlus(!plus);
        }).catch((error) => console.log(error));

    }
    return (
        <>
            <TopBar />
            <HabitsContent>
                <h2>Meus hábitos</h2>
                <AddHabitButton onClick={() => setPlus(!plus)}>+</AddHabitButton>
                <AddHabitBox plus={plus}>
                    <Input placeholder="nome do hábito" value={habitName} onChange={e => setHabitName(e.target.value)}></Input>
                    <Weekdays>
                        {weekdays.map((weekday, index) => <ListWeekDay key={index} days={days} weekday={weekday} id={index} setDays={setDays} />)}
                    </Weekdays>
                    <a href="#">Cancelar</a>
                    <SaveButton onClick={saveHabit}>Salvar</SaveButton>
                </AddHabitBox>
                {habits.length === 0 ? 
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> :
                        habits.map((habit, index) => (
                            <HabitUser habit={habit} key={index} weekdays={weekdays} setHabits={setHabits} habits={habits}/>
                        )) 
                }    
                
            </HabitsContent>
            <Footer />
        </>
    );
};


function ListWeekDay ({ days,weekday, id, setDays}) {

    const [selected, setSelected] = useState(null);

    function select (id, selected) {

        if(selected){
            setSelected(!selected);
            setDays(days.filter((day) => day !== id));  
        }
        else{
            setSelected(!selected);
            setDays([...days, id]);
        }
    }
    return <Weekday selected={selected}  id={id} onClick={() => select(id, selected)}>{weekday}</Weekday>
}

export const HabitsContent = styled.div`
    background-color: #E5E5E5;
    padding: 98px 18px 110px 17px;
    height: auto;
    h2 {
        color: #126BA5;
        font-size: 22.98px;
        margin-bottom: 28px;
    }
    p {
        color: #666666;
        font-size: 17.98px;
        width: 340px;
        overflow-wrap: break-word;
    }
`;

export const AddHabitButton = styled.button`
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 4.64px;
    position: absolute;
    top: calc(70px + 21px);
    right: 18px;
    font-size: 20px;
    color: white;
`;


export const AddHabitBox = styled.div`
    width: 340px;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 18px 19px 0 18px;
    margin-bottom: 29px;
    position: relative;
    display: ${({plus}) => !plus ? "none" : "block"};
    a {
        font-size: 15.98px;
        color: #52B6FF;
        position: absolute;
        top: 139px;
        right: 123px;
        text-decoration: none;
        
    }
`;

export const Habit = styled.div`
    min-width: 340px;
    min-height: 91px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 13px 11px 0 17px;
    margin-bottom: 10px;
    position: relative;
    word-break: break-all;
    h3 {
        font-size: 19.98px;
        margin-bottom: 8px;
        margin-left: 6px;
    }

    button:nth-child(2n) {
        background-color: #CFCFCF;
        color: #FFFFFF;
    }
`;

export const Weekdays = styled.div`
    display: flex;
`;


export const Weekday = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #D4D4D4; 
    background-color: ${({selected}) => selected === null ?  "#FFFFFF" : !selected ?  "#FFFFFF" : "#CFCFCF"};
    margin-left: 4px;
    margin-bottom: 10px;
    font-size: 19.98px;
    color: ${({selected}) => selected === null ? "#DBDBDB" : !selected ? "#DBDBDB" : "#FFFFFF"};
`;

export const Day = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    background-color:  ${({selected}) => selected === false ? "#FFFFFF" : "#CFCFCF"};
    margin-left: 4px;
    font-size: 19.98px;
    color: ${({selected}) => selected === false ? "#DBDBDB" : "#FFFFFF"};
`;

export const SaveButton = styled.button`
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 4.64px;
    color: #FFFFFF;
    font-size: 15.98px;
    position: absolute;
    top: 130px;
    right: 16px;
`;