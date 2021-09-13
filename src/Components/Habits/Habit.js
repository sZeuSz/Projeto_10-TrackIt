import styled from "styled-components";
import { Weekdays } from "./Habits";
import { Day } from "./Habits";
import { IoIosTrash } from "react-icons/io";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { deleteHabit } from "../../Service/trackit";
import { useContext } from "react";
import UserContext from "../../Contexts/UserContext";

export default function HabitUser({habit, weekdays, setHabits, habits}) {

    const weekd = [{name: 'D', id: 0},{name: 'S', id: 1},{name: 'T', id: 2},{name: 'Q', id: 3},{name: 'Q', id: 4},{name: 'S', id: 5},{name: 'S', id: 6},];
    const {userInfo} = useContext(UserContext);

    const submit = (id) => {
        confirmAlert({
          title: "Confirme para deletar",
          message: "Tem certeza que deseja deletar este hábito?",
          buttons: [
            {
              label: "Sim",
              onClick: () => deleteHabit(userInfo.token, id)
              .then((response) => setHabits(habits.filter((habit) => habit.id !== id)))
              .catch((error) => alert("erro no servidor! perdona-me"))
            },
            {
              label: "Não"
            }
          ]
        });
      };
      
    return (
        <Habit>
             <h3>{habit.name}</h3>
             <Weekdays>
                 <span onClick={() => submit(habit.id)}>
                    <IoIosTrash size="30px"/>
                 </span>
                 {weekd.map((weekday, index) => (
                    <Day key={index} selected={habit.days.includes(weekday.id) ? true : false}>{weekday.name}</Day>
                 ))}
            </Weekdays>
        </Habit>
    );
}


const Habit = styled.div`
     width: 340px;
     height: 91px;
     background-color: #FFFFFF;
     border-radius: 5px;
     padding: 13px 11px 0 17px;
     margin-bottom: 10px;
     word-break: break-all;
     position: relative;
     h3 {
        width: 92%;
        font-size: 19.98px;
        margin-bottom: 8px;
        color: #666666;
     }
     span {
      position: absolute;
      top: 15px;
      right: 11px;
     }
 `;