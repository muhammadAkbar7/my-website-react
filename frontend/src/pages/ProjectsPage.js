import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectList from '../components/ProjectList';
import { Link } from 'react-router-dom';

function ProjectsPage({ setProjectToEdit }) {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);

    const loadProjects = async () => {
        const response = await fetch('/projects');
        const projects = await response.json();
        setProjects(projects);
    };

    const onEditProject = (project) => {
        setProjectToEdit(project);
        navigate('/update');
    };

    const onDeleteProject = async (_id) => {
        const response = await fetch(`/projects/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            loadProjects(); // Reload projects after deletion
        } else {
            console.error(`Unexpected deleting error, please contact Muhammad Akbar with error code = ${_id}, status code = ${response.status}`);
        }
    };

    useEffect(() => {
        loadProjects();
    }, []);

    return (
        <>
            <h2>List of Projects</h2>
            <p>These are all my projects.</p>
            <Link to="/create">Add Project</Link>
            <ProjectList 
                projects={projects} 
                onEdit={onEditProject} 
                onDelete={onDeleteProject} 
            />
        </>
    );
}

export default ProjectsPage;
