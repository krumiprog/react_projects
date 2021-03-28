import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Header from './components/Header';
import Products from './components/Products';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(open => !open);
  };

  return (
    <>
      <BrowserRouter>
        <Header open={open} toggleSidebar={handleClick} />
        <Sidebar open={open} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
