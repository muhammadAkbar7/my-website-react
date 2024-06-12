// Controllers for the project Collection

import 'dotenv/config';
import express from 'express';
import * as projects from './projects-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/projects', (req,res) => { 
    projects.createProject(
        req.body.projectName, 
        req.body.projectNumber, 
        req.body.date,
        req.body.link
        )
        .then(project => {
            console.log(`"${project.projectName}" was added to the Project collection.`);
            res.status(201).json(project);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Bad request. Your request could not be processed. Please try again later.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/projects', (req, res) => {
    projects.retrieveProjects()
        .then(projects => { 
            if (projects !== null) {
                console.log(`All projects were retrieved from the Project collection.`);
                res.json(projects);
            } else {
                res.status(404).json({ Error: 'Oops! The page you are looking for is not available.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Bad request. Your request could not be processed. Please try again later.' });
        });
});


// RETRIEVE by ID controller
app.get('/projects/:_id', (req, res) => {
    projects.retrieveProjectByID(req.params._id)
    .then(project => { 
        if (project !== null) {
            console.log(`"${project.projectName}" was retrieved, based on its ID.`);
            res.json(project);
        } else {
            res.status(404).json({ Error: 'Oops! The page you are looking for is not available.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Bad request. Your request could not be processed. Please try again later.' });
    });

});


// UPDATE controller ************************************
app.put('/projects/:_id', (req, res) => {
    projects.updateProject(
        req.params._id, 
        req.body.projectName, 
        req.body.projectNumber, 
        req.body.date,
        req.body.link
    )
    .then(project => {
        console.log(`"${project.projectName}" was updated.`);
        res.json(project);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Bad request. Your request could not be processed. Please try again later.' });
    });
});


// DELETE Controller ******************************
app.delete('/projects/:_id', (req, res) => {
    projects.deleteProjectById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} project was deleted.`);
                res.status(200).send({ Success: 'Action completed: Data has been deleted successfully.' });
            } else {
                res.status(404).json({ Error: 'Oops! The page you are looking for is not available.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'An unexpected error occurred. Please try again later.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});