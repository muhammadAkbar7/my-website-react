// Models for the Project Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'We encountered an unexpected error. Our team has been notified and will investigate.' });
    } else  {
        console.log('Request successful: The Projects Database has been successfully connected.');
    }
});

// SCHEMA: Define the collection's schema.
const projectSchema = mongoose.Schema({
	projectName:    { type: String, required: true },
	projectNumber:     { type: Number, required: true },
	date: { type: Date, default: Date.now, required: true },
    link: { type: String, required: false}
});

// Compile the model from the schema 
// by defining the collection name "movies".
const projects = mongoose.model('Projects', projectSchema);


// CREATE model *****************************************
const createProject = async (projectName, projectNumber, date, link) => {
    const project = new projects({ 
        projectName: projectName, 
        projectNumber: projectNumber, 
        date: date,
        link: link 
    });
    return project.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveProjects = async () => {
    const query = projects.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveProjectByID = async (_id) => {
    const query = projects.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteProjectById = async (_id) => {
    const result = await projects.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateProject = async (_id, projectName, projectNumber, date, link) => {
    const result = await projects.replaceOne({_id: _id }, {
        projectName: projectName, 
        projectNumber: projectNumber, 
        date: date,
        link: link 
    });
    return { 
        _id: _id, 
        projectName: projectName, 
        projectNumber: projectNumber, 
        date: date,
        link: link 
    }
}

// EXPORT the variables for use in the controller file.
export { createProject, retrieveProjects, retrieveProjectByID, updateProject, deleteProjectById }