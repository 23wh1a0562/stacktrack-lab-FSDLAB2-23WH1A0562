import React, { useEffect } from 'react';
import { fetchTaskById } from './api/client';
import './App.css';
import { Route } from 'react-router-dom';


function App() {
  // useEffect(() => {
  //   const testApi = async () => {
  //    const data = await fetchTaskById(1);
  //    console.log('Fetched task:', data);
  //   }
  //   testApi();
  // }, []);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks/:id" element={<QuestionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
