
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from "../../Contexts/UserContext";
import GlobalStyle from "../../GlobalStyle/GlobalStyle";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Today from "../Today/Today";
import Habits from "../Habits/Habits";
import Historic from "../History/History";
function App() {

  const [userInfo, setUserInfo] = useState("");
  const [percentage, setPercentage]= useState(0);

  return (
    <UserContext.Provider value={{userInfo, setUserInfo, percentage, setPercentage}} >
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/cadastro" exact>
            <Registration />
          </Route>
          <Route path="/habitos" exact>
            <Habits />
          </Route>
          <Route path="/hoje">
            <Today />
          </Route>
          <Route path="/historico" exact>
            <Historic />
          </Route>
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;