import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './screens/Home';
import { Project } from './screens/Project';
import { Resources } from './screens/Resources';
import { ResourcesEmployee } from './screens/Resources/components/ResourcesEmployee';
import { Support } from './screens/Support';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/resources/employee" element={<ResourcesEmployee />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  </BrowserRouter>
);

