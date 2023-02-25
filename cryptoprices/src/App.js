import  { Route, Routes } from 'react-router-dom'
import Currencies from './pages/Currencies';
import Main from './pages/Main';
import Price from './pages/Price';
import Nav from './components/Nav';
import { Navigate } from 'react-router-dom';

function App(){
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/currencies" element={< Currencies/>}/>
                <Route path="/price/:symbol" element={< Price/>} />
                <Route path="*" element={<Navigate to="/"/>} />
                // {<>Could not find page..</>} //Make an errorpage component
            </Routes>
        </div>
    );
}
export default App;