import { BrowserRouter as Router } from "react-router-dom";  
import { useState } from "react";  
import Navbar from './Navbar';  
import Cards from './Cards';  
import Heading from './Heading';  
import Sidebar from './components/SideBar';  

const InitialPage: React.FC = () => {  
  const [sidebarOpen, setSidebarOpen] = useState(false);  

  const toggleSidebar = () => {  
    setSidebarOpen(!sidebarOpen);  
  };  
  const projects = [  
    {  
      id: 1,  
      name: 'Project Alpha',  
      services: 1,
      status: 'in progress',  
    },  
    {  
      id: 2,  
      name: 'Project Beta',  
      services: 1,
      status: 'in progress',  
    },  
    {  
      id: 3,  
      name: 'Project Gamma', 
      services: 1, 
      status: 'in progress',  
    }, 
    {  
        id: 1,  
        name: 'Project Alpha',  
        services: 1,
        status: 'in progress',  
      },  
      {  
        id: 2,  
        name: 'Project Beta',  
        services: 1,
        status: 'in progress',  
      },  
      {  
        id: 3,  
        name: 'Project Gamma', 
        services: 1, 
        status: 'in progress',  
      }, 
  ];  
  return (  
    <Router>  
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />  
      <Cards projects={projects} sidebarOpen={sidebarOpen} />
    </Router>  
  );  
};  

export default InitialPage;  