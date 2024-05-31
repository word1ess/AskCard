import "./App.scss";
import ProfileContainer from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Index from "./components/Index/Index";
import Layout from "./components/Layout/Layout";
import UsersContainer from "./components/Users/UsersContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Game from "./components/Game/Game";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout store={props.store} />}>
          <Route index element={<Index />} />
          <Route path="/profile/:userId?" element={<ProfileContainer />} />
          <Route path="dialogs/*" element={<DialogsContainer />} />
          <Route path="game" element={<Game />} />
          <Route path="news" element={<News />} />
          <Route path="music" element={<Music />} />
          <Route path="settings" element={<Settings />} />
          <Route path="users" element={<UsersContainer />} />
          <Route path="login" element={<Login />} />
          <Route path="users" element={<UsersContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
