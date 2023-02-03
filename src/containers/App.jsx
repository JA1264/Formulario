import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import FlexBox from '../components/molecules/FlexBox';
import AltaAutobuses from '../pages/Alta';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/AltaAutobuses' element={<AltaAutobuses/>}/>
                <Route path='/flexbox' element={<FlexBox/>}/>
            </Routes>
        </BrowserRouter>
      );
}

export default App;