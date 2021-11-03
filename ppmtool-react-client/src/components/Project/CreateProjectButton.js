import React from 'react'
import { Link } from 'react-router-dom';

const CreateProjectButton = function CreateProjectButton() {
    return (
        <React.Fragment>
            <Link to="/addProject" href="ProjectForm.html" className="btn btn-lg btn-info">
                <b>Create a Project</b>
            </Link>
        </React.Fragment>
    )
}

export default CreateProjectButton;