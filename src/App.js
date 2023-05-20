import Counter from "./components/Counter";
import MealsList from "./components/MealsList";
import MealsProvider from "./providers/MealsProvider";
import HomePage from './Homepage'
import About from './About'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Calculator from "./components/Calculator";

function App() {
  return (
    <div >
      {/* <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider> */}
      <nav className="nav">
        {/* <a href="#" className="nav-item">Homepage</a> */}
        <Link to='/' className='nav-item'>Homepage</Link>
        <Link to='/about' className='nav-item'>About</Link>
        <Link to='/calculator' className='nav-item'>Calculator</Link>

        {/* <a href="#" className="nav-item">About</a> */}
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/calculator' element={<Calculator />}></Route>
        </Routes>



      </nav>

    </div>
  );
}

export default App;
