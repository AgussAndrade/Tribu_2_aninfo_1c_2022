import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './screens/Home';
import { Project } from './screens/Project';
import { Resources } from './screens/Resources';
import { ResourcesEmployee } from './screens/Resources/components/ResourcesEmployee';
import { ResourcesError } from './screens/Resources/components/Error';
import { Support } from './screens/Support';
import { PantallaCrearTicket } from './screens/Support/PantallaCrearTicket';
import { PantallaVerTickets } from './screens/Support/PantallaVerTickets';
import  PantallaDerivarTicket  from './screens/Support/PantallaDerivarTicket';
import { ProjectDescription } from './screens/ProjectDescription';
import { SupportTicketViews } from './screens/SupportTicketViews';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/resources/employee" element={<ResourcesEmployee />} />
      <Route path="/resources/error" element={<ResourcesError/>}/>
      <Route path="/support" element={<Support />} />
      <Route path="/support/pantallaCrearTicket" element={<PantallaCrearTicket />} />
      <Route path="/support/pantallaVerTickets" element={<PantallaVerTickets />} />
      <Route path="/support/pantallaDerivarTicket" element={<PantallaDerivarTicket />} />
      <Route path="/projects/id" element={<ProjectDescription />} />
      <Route path="/supportticketviews" element={<SupportTicketViews />} />
    </Routes>
  </BrowserRouter>
);

