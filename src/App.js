

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import Footer from './Components/Footer/Footer';
import AdminPanel from './Components/Navbar/AdminPanel';
import WhatIsAutism from './Components/AboutAutism/WhatIsAutism';
import PostEvent from './Components/EVENTS/postEvent/EventForm';
import ViewAllEvents from './Components/EVENTS/viewEvents/AllEvents';
import ViewUserEvents from './Components/EVENTS/viewEvents/UserEvents';
import ViewEvent from './Components/EVENTS/events/ViewChosenEvent';
import PostService from './Components/SERVICES/postService/ServiceForm';
import ViewAllServices from './Components/SERVICES/viewServices/AllServices';
import ViewService from './Components/SERVICES/services/ViewChosenService';
import ViewUserServices from './Components/SERVICES/viewServices/UserServices';

function App() {
  
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>         
        <Route exact path='/auth/signin' element={<SignIn />}></Route>
        <Route exact path='/auth/signup' element={<SignUp />}></Route>
        <Route exact path='/auth/admin' element={<AdminPanel />}></Route>

        <Route exact path='/aboutautism/whatisautism' element={<WhatIsAutism />}></Route>

        <Route exact path='/events/create-event' element={<PostEvent />}></Route>
        <Route exact path='/events/show-events' element={<ViewAllEvents />}></Route>
        <Route exact path='/events/show-user-events' element={<ViewUserEvents />}></Route>
        <Route exact path='/events/show-event' element={<ViewEvent />}></Route>

        <Route exact path='/services/create-service' element={<PostService />}></Route>
        <Route exact path='/services/show-services' element={<ViewAllServices />}></Route>
        <Route exact path='/services/show-service' element={<ViewService />}></Route>
        <Route exact path='/services/show-user-services' element={<ViewUserServices />}></Route>
       

        
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
