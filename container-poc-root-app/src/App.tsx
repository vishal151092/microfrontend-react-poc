import React, {Suspense} from 'react';
import './App.css';
import Header from './pages/header/header';
import Footer from './pages/footer/footer';
//import Home from 'FIRST_APP/Home';

const Home = React.lazy(()=> import('FIRST_APP/Home')); 

function App() {
  return (
    <div className="App">
        <Header></Header>
        <div>Hello</div>
        <Footer></Footer>

    <Suspense fallback={<div>Loading...</div>}>
        <Home ></Home>
    </Suspense>
    </div>
  );
}

export default App;
