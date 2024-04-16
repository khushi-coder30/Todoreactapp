import React from 'react';
import './App.css';
import Header from './components/header';
import ToDoList from './components/ToDolist';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header />
      <div className="ToDoApp">
        <ToDoList />
      </div>
      <Footer />
    </>
  );
}

export default App