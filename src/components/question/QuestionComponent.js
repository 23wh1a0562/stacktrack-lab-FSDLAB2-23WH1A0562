import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { fetchTaskById } from '../../api/client';
const QuestionComponent = () => {
    const { id } = useParams();
    const [task, setTask] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    useEffect(() => {
      const getTask = async () => {
        const data = await fetchTaskById(id);
        setTask(data);
        setLoading(false);
      };
      if(id) getTask();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return (

        <div className ="task-container" style ={{border: '1px solid #ccc', padding: '20px', borderRadius: '5px'}}>
          <h2>Task Details</h2>
          <p><strong>ID:</strong> {task.id}</p>
          <p><strong>Title:</strong> {task.title}</p>
          <p><strong>Description:</strong> {task.description}</p>
          <p><strong>Status:</strong> {task.status}</p>
        </div>
    );
};

export default QuestionComponent;
