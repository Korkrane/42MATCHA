import Home from './Pages/Home/Home';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import Unknown from './Pages/Unknown/Unknown';
import Profile from './Pages/Profile/Profile';
import Chat from './Pages/Chat/Chat';
import Conversation from './Pages/Chat/Components/Conversation';
import Settings from './Pages/Settings/Settings';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import {socket, SocketContext} from './Context/socket';
import Password from './Pages/Settings/Components/Password';
import LikedUsers from './Pages/Settings/Components/LikedUsers';
import MatchedUsers from './Pages/Settings/Components/MatchedUsers';
import BlockedUsers from './Pages/Settings/Components/BlockedUsers';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
    <Provider store={store}>
        <Routes>
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
          <Route exact path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/profile/' element={<Profile />} />
          <Route path='/chat/' element={<Chat />} />
          <Route path='/chat/:id' element={<Conversation />} />
          <Route path='settings'>
            <Route index element={<Settings />} />
            <Route path="blockedUsers" element={<BlockedUsers />} />
            <Route path="matchedUsers" element={<MatchedUsers />} />
            <Route path="likedUsers" element={<LikedUsers />} />
            <Route path="password" element={<Password />} />
          </Route>
          <Route path='*' element={<Unknown />} />
        </Routes>
    </Provider>

    </>
  );
}

export default App;
