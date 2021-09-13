import styled from "styled-components";
import { Input } from "../../GlobalStyle/GlobalStyle";
import TopBar from "../TopBar/TopBar";
import Footer from "../Footer/Footer";
import { useContext, useState } from "react";
import UserContext from "../../Contexts/UserContext";
import { useEffect } from "react/cjs/react.development";
import { getHabits, postHabits } from "../../Service/trackit";
import HabitUser from "./Habit";
import Loader from "react-loader-spinner";
import "react-confirm-alert/src/react-confirm-alert.css";
export default function Habits() {
    
    const weekdays = ['D','S', 'T', 'Q', 'Q', 'S', 'S'];
    const [days, setDays] = useState([]);
    const [habits, setHabits] = useState(null);
    const {userInfo} = useContext(UserContext);
    const [plus, setPlus] = useState(false);
    const [habitName, setHabitName] = useState("");
    const [reset, setReset] = useState(false);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        getHabits(userInfo.token).then((response) => {
            setHabits(response.data)});
        getHabits(userInfo.token).catch((error) => alert("erro no servidor, sorry."));
    }, [])

    if(habits === null) {

        return (
            ""
        )
    }

    function saveHabit () {

        setLoading(true);

        const body = {
            name: habitName,
            days
        }

        postHabits(userInfo.token, body)
        .then((response) => {

            if(reset){
                setReset(null);
            }
            else{
                setReset(true);
            }
    
            setTimeout(() => {
                sreset()
            }, 0);

            setHabits([...habits, response.data])
            setDays([]);
            setHabitName("");
            setPlus(!plus);
            setLoading(false);
        })
        .catch((error) => {
            if(habitName === ""){
                alert('nome invalido');
            }
            if(days.length === 0){
                alert('marque pelo menos 1 dia');
            }

            setLoading(false);

        });

    }

    function sreset (){
        setReset(null);
    }
    return (
        <>
            <TopBar />
            <HabitsContent plus={plus} days={habits}>
                <h2>Meus hábitos</h2>
                <AddHabitButton onClick={() => setPlus(!plus)}>+</AddHabitButton>
                <AddHabitBox plus={plus}>
                    <Input disabled={loading} placeholder="nome do hábito" value={habitName} onChange={e => setHabitName(e.target.value)}></Input>
                    {!reset ? <Weekdays>
                        {weekdays.map((weekday, index) => <ListWeekDay key={index} days={days} weekday={weekday} id={index} setDays={setDays} loading={loading} />)}
                    </Weekdays> : ""}
                    <h1 onClick={() => setPlus(!plus)}>Cancelar</h1>
                    <SaveButton onClick={saveHabit}>{!loading ? "Salvar" :<Loader type="Oval" color="#FFFFFF" height={20} width={20} />}</SaveButton>
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


function ListWeekDay ({days,weekday, id, setDays, loading}) {

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
    return <Weekday disabled={loading} selected={selected}  id={id} onClick={() => select(id, selected)}>{weekday}</Weekday>
}

export const HabitsContent = styled.div`
    background-color: #E5E5E5;
    padding: 98px 18px 110px  17px;
    margin:  0 0 110 0;
    /* height: ${({plus}) => !plus ? `calc(100vh + 300px);` : `calc(100vh + 520px);`}; */
    height: ${({days, plus}) => days.length >= 4 || plus ? "auto" : "100vh"};
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
    h1 {
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
    word-break: break-all;
    position: relative;
    
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