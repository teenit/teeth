import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './component/Content/Content';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
