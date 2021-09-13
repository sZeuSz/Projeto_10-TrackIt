
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from "../../Contexts/UserContext";
import GlobalStyle from "../../GlobalStyle/GlobalStyle";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Today from "../Today/Today";
import Habits from "../Habits/Habits";

function App() {

  const [userInfo, setUserInfo] = useState("");

  return (
    <UserContext.Provider value={{userInfo, setUserInfo}} >
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/registration" exact>
            <Registration />
          </Route>
          <Route path="/nohabits" exact>
            {/* <NoHabits /> */}
          </Route>
          <Route path="/habits" exact>
            <Habits />
          </Route>
          <Route path="/with-habits" exact>
            {/* <WithHabits /> */}
          </Route>
          <Route path="/hoje">
            <Today />
          </Route>
          <Route path="/today2">
            {/* <Today2 /> */}
          </Route>
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;