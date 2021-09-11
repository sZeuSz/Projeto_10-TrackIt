import styled from "styled-components";
import { Input } from "../../GlobalStyle/GlobalStyle";
import TopBar from "../TopBar/TopBar";
import Footer from "../Footer/Footer";
export default function Habits() {
    return (
        <>
            <TopBar />
            <HabitsContent>
                <h2>Meus hábitos</h2>
                <AddHabitButton></AddHabitButton>
                <AddHabitBox>
                    <Input placeholder="nome do hábito"></Input>
                    <Weekdays>
                        <Weekday>D</Weekday>
                        
                        <Weekday>S</Weekday>
                        
                        <Weekday>T</Weekday>
                        
                        <Weekday>Q</Weekday>
                        
                        <Weekday>Q</Weekday>
                        
                        <Weekday>S</Weekday>
                       
                        <Weekday>S</Weekday>
                    </Weekdays>
                    <a href="#">Cancelar</a>
                    <SaveButton>Salvar</SaveButton>
                </AddHabitBox>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </HabitsContent>
            <Footer />
        </>
    );
};

export const HabitsContent = styled.div`
    background-color: #E5E5E5;
    padding: 98px 18px 0 17px;
    height: 100vh;
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
`;


export const AddHabitBox = styled.div`
    width: 340px;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 18px 19px 0 18px;
    margin-bottom: 29px;
    position: relative;
    a {
        font-size: 15.98px;
        color: #52B6FF;
        position: absolute;
        top: 139px;
        right: 123px;
        text-decoration: none;
        
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
    background-color: #FFFFFF;
    margin-left: 4px;
    font-size: 19.98px;
    color: #DBDBDB;
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