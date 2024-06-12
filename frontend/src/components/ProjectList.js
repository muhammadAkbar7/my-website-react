import React from 'react';
import Project from './Project';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function ProjectList({ projects, onDelete, onEdit }) {
    return (
        <table id="projects">
            <caption>Add and Edit Projects</caption>
            <thead>
                <tr>
                    <th>Project Name</th>
                    <th>Project Number</th>
                    <th>Date</th>
                    <th>Link</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {projects.map((project, i) => 
                    <Project 
                        project={project} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default ProjectList;

