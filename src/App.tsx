import { useState } from 'react';

import './App.css';
import { CountrySection } from './components/CountrySection/CountrySection';
import { Heading } from './components/Heading/Heading';
import { useFetch } from './hooks/useFetch';

function App() {
  const [url, setUrl] = useState<string>('https://restcountries.com/v3.1/all')
  const { data: countries, isPending, error } = useFetch(url);

  return (
    <div className="App">
      <Heading />
      {isPending && <div className='loader-backdrop'>
        <div className='loader'>
          Loading trips...
        </div>
      </div>}
      {error && <div>{error}</div>}
      <CountrySection countries={countries} setUrl={setUrl} />
    </div>
  );
}

export default App;
