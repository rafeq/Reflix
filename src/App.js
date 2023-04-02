import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/landing-page'
import Catalog from './components/Catalog-Page'
import MoveDetail from './components/move-detail-page'
import NavBar from './components/navbar-component'

function App() {
  return (
    <Router>
      
      <NavBar />
     
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/MoveDetail/:id" element={<MoveDetail />} />

      </Routes>
    </Router>
    
  );
}

export default App;
