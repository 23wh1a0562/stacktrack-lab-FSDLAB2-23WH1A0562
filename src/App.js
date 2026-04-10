import React, { useEffect } from 'react';
import { fetchTaskById } from './api/client';
import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import QuestionPage from './pages/QuestionPage';


function App() {
  useEffect(() => {
    const testApi = async () => {
     const data = await fetchTaskById("1");
     console.log('Fetched task:', data);
    }
    testApi();
  }, []);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks/:id" element={<QuestionPage />} />
        <Route path="/task/:id" element={<QuestionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
