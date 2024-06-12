import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddProjectPageForm = () => {
    const [projectName, setProjectName] = useState('');
    const [projectNumber, setProjectNumber] = useState('');
    const [date, setDate] = useState('');
    const [link, setLink] = useState('');

    const redirect = useNavigate();

    const addProject = async () => {
        const newProject = { projectName, projectNumber, date, link };
        const response = await fetch('/projects', {
            method: 'post',
            body: JSON.stringify(newProject),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert('Successfully added project');
            redirect('/projects');
        } else {
            alert(`Unexpected adding error, please contact Muhammad Akbar with error code = ${response.status}`);
            redirect('/projects');
        }
    };

    return (
        <>
            <article>
                <h2>Add a project</h2>
                <p>Please add a current or former project.</p>
                <form onSubmit={(e) => { e.preventDefault(); }}>
                    <fieldset>
                        <legend>Which project are you adding?</legend>
                        <label htmlFor="projectName">Project Name</label>
                        <input
                            type="text"
                            placeholder="Name of the project"
                            value={projectName}
                            onChange={e => setProjectName(e.target.value)}
                            id="projectName"
                            required
                        />

                        <label htmlFor="projectNumber">Project Number</label>
                        <input
                            type="number"
                            value={projectNumber}
                            placeholder="Number of the project"
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
                            placeholder="URL of the project"
                            value={link}
                            onChange={e => setLink(e.target.value)}
                            id="link"
                            required
                        />

                        <label htmlFor="submit">
                            <button
                                type="submit"
                                onClick={addProject}
                                id="submit"
                            >
                                Add
                            </button> to the collection
                        </label>
                    </fieldset>
                </form>
            </article>
        </>
    );
};

export default AddProjectPageForm;
