import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const EditProjectPageForm = ({ projectToEdit }) => {
    const [projectName, setProjectName] = useState('');
    const [projectNumber, setProjectNumber] = useState('');
    const [date, setDate] = useState('');
    const [link, setLink] = useState('');

    useEffect(() => {
        if (projectToEdit) {
            setProjectName(projectToEdit.projectName);
            setProjectNumber(projectToEdit.projectNumber);
            setDate(projectToEdit.date);
            setLink(projectToEdit.link);
        }
    }, [projectToEdit]);

    const navigate = useNavigate();

    const editProject = async () => {
        const response = await fetch(`/projects/${projectToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                projectName, 
                projectNumber, 
                date, 
                link 
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200) {
            alert('Successfully edited project');
        } else {
            const errMessage = await response.json();
            alert(`Unexpected editing error, please contact Muhammad Akbar with error code = ${response.status}. ${errMessage.Error}`);
        }
        navigate('/projects');
    };

    return (
        <>
            <article>
                <h2>Edit a project</h2>
                <p>Paragraph about this page.</p>
                <form onSubmit={(e) => { e.preventDefault(); }}>
                    <fieldset>
                        <legend>Edit project details</legend>
                        <label htmlFor="projectName">Project Name</label>
                        <input
                            type="text"
                            value={projectName}
                            onChange={e => setProjectName(e.target.value)}
                            id="projectName"
                            required
                        />

                        <label htmlFor="projectNumber">Project Number</label>
                        <input
                            type="number"
                            value={projectNumber}
                            onChange={e => setProjectNumber(e.target.value)}
                            id="projectNumber"
                            required
                        />

                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            id="date"
                            required
                        />

                        <label htmlFor="link">Link</label>
                        <input
                            type="url"
                            value={link}
                            onChange={e => setLink(e.target.value)}
                            id="link"
                            required
                        />

                        <label htmlFor="submit">
                            <button
                                type="submit"
                                onClick={editProject}
                                id="submit"
                            >
                                Save
                            </button> updates to the collection
                        </label>
                    </fieldset>
                </form>
            </article>
        </>
    );
}

export default EditProjectPageForm;

