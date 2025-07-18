import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar'
import Form from './components/Form';

export default function App(){
  return (
    <>
    <Form />
      <BrowserRouter>
      <h1>Learning React Router</h1>
      <Navbar />
      </BrowserRouter >
    </>
  );
}