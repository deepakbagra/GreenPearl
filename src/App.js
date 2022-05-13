/*
This is the main App component
It will provide a route system to route different component path
*/

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import Footer from './Components/Footer/Footer';

import WhatIsAutism from './Components/AboutAutism/WhatIsAutism';
import Symptoms from './Components/content/Symptoms';
import Education from './Components/content/Education';
import ServiceProvider from './Components/content/ServiceProviser';

import PostEvent from './Components/EVENTS/postEvent/EventForm';
import ViewAllEvents from './Components/EVENTS/viewEvents/AllEvents';
import ViewUserEvents from './Components/EVENTS/viewEvents/UserEvents';
import ViewEvent from './Components/EVENTS/events/ViewChosenEvent';

import PostService from './Components/SERVICES/postService/ServiceForm';
import ViewAllServices from './Components/SERVICES/viewServices/AllServices';
import ViewService from './Components/SERVICES/services/ViewChosenService';
import ViewUserServices from './Components/SERVICES/viewServices/UserServices';

import BlogDashboard from './Components/BLOGS/blogDashboard';
import BlogsByClass from './Components/BLOGS/blogsByClass/BlogsByClass';
import PostBlog from './Components/BLOGS/postBlog/BlogForm';
import ViewBlog from './Components/BLOGS/viewChosenBlog';

function App() {
  
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>         
        <Route exact path='/auth/signin' element={<SignIn />}></Route>
        <Route exact path='/auth/signup' element={<SignUp />}></Route>        

        <Route exact path='/aboutautism/whatisautism' element={<WhatIsAutism />}></Route>
        <Route exact path='/content/symptoms' element={<Symptoms />}></Route>
        <Route exact path='/content/education' element={<Education />}></Route>
        <Route exact path='/content/service-provider' element={<ServiceProvider />}></Route>        
        

        <Route exact path='/events/create-event' element={<PostEvent />}></Route>
        <Route exact path='/events/show-events' element={<ViewAllEvents />}></Route>
        <Route exact path='/events/show-user-events' element={<ViewUserEvents />}></Route>
        <Route exact path='/events/show-event' element={<ViewEvent />}></Route>

        <Route exact path='/services/create-service' element={<PostService />}></Route>
        <Route exact path='/services/show-services' element={<ViewAllServices />}></Route>
        <Route exact path='/services/show-service' element={<ViewService />}></Route>
        <Route exact path='/services/show-user-services' element={<ViewUserServices />}></Route>

        <Route exact path='/blog' element={<BlogDashboard />}></Route>
        <Route exact path='/class/show-blogs' element={<BlogsByClass />}></Route>
        <Route exact path='/class/create-blog' element={<PostBlog />}></Route>
        <Route exact path='/blogs/show-blog' element={<ViewBlog />}></Route>

    
        
       

        
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
