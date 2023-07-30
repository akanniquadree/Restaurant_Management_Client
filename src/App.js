import './App.css';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Reset from './Pages/Reset/Reset';
import ChangePass from './Pages/ChangePass.jsx/ChangePass';
import Home from './Pages/Home/Home';
import ProductPage from './Pages/ProductPage/ProductPage';

function App() {
  return (
    <>
      <div className="App">
        
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/register" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/reset" element={<Reset/>}/>
            <Route path="/newpassword" element={<ChangePass/>}/>
            <Route path="/products/:id" element={<ProductPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
    
  );
}

export default App;
