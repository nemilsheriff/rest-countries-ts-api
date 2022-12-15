import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CountryDetailsPage } from './pages/CountryDetailsPage';
import { CountryListPage } from './pages/CountryListPage';
import './App.css';

import { Heading } from './components/Heading/Heading';

function App() {
  return (
    <div className="App">
      <Heading />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CountryListPage />} />
          <Route path="/countries/:id" element={<CountryDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
