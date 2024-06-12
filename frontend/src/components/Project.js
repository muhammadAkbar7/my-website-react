import React from 'react';
import { HiTrash, HiPencilAlt } from "react-icons/hi";

function Project({ project, onEdit, onDelete }) {
    const formattedDate = project.date ? project.date.slice(0, 10) : '';
    return (
        <tr>
            <td>{project.projectName}</td>
            <td>{project.projectNumber}</td>
            <td>{formattedDate}</td>
            <td>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.link}
                </a>
            </td>
            <td><HiTrash onClick={() => onDelete(project._id)} style={{ cursor: 'pointer' }} /></td>
            <td><HiPencilAlt onClick={() => onEdit(project)} style={{ cursor: 'pointer' }} /></td>
        </tr>
    );
}

export default Project;
