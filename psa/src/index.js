import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './screens/Home';
import { Project } from './screens/Project';
import { Resources } from './screens/Resources';
import { Support } from './screens/Support';
import { ProjectDescription } from './screens/ProjectDescription';
import { SupportTicketViews } from './screens/SupportTicketViews';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/support" element={<Support />} />
      <Route path="/projects/id" element={<ProjectDescription />} />
      <Route path="/supportticketviews" element={<SupportTicketViews />} />
    </Routes>
  </BrowserRouter>
);

