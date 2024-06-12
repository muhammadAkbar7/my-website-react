// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import TopicsPage from './pages/TopicsPage'; // Adjust the path as needed
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import OrderPage from './pages/OrderPage';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 

import ProjectsPage from './pages/ProjectsPage';

// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
import AddProjectPageForm from './pages/AddProjectPageForm';
import EditProjectPageForm from './pages/EditProjectPageForm';

// Define the function that renders the content in Routes, using State.
function App() {
  const [projectToEdit, setProjectToEdit] = useState(null);

  return (
    <>
      <BrowserRouter>
        <header>
          <h1>Portfolio</h1>
        </header>

        <Navigation />

        <main>
          <section>
            <Routes> 
              {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
              <Route path="/" element={<HomePage />} />
              <Route path="/topic" element={<TopicsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/projects" element={<ProjectsPage setProjectToEdit={setProjectToEdit} />} />
              <Route path="/create" element={<AddProjectPageForm />} />   
              <Route path="/update" element={<EditProjectPageForm projectToEdit={projectToEdit} />} />
            </Routes>
          </section>
        </main>

        <footer>
          <p>&copy; 2024 Muhammad Akbar</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
