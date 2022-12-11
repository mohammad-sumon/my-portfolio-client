import React from 'react';
import { useLoaderData } from 'react-router-dom';
import data from '../component/Features/Features-Api';

const Project = (props) => {
    // const data = useLoaderData();
    
    console.log(props);
    return (
        <div>
            <h2>This is single project</h2>
        </div>
    );
};

export default Project;