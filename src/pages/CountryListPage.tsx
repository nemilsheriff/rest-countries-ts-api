import { CountrySection } from '../components/CountrySection/CountrySection';
import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

export const CountryListPage = () => {
      const [url, setUrl] = useState<string>('https://restcountries.com/v3.1/all')
      const { data: countries, isPending, error } = useFetch(url);
      return (
            <>
                  {isPending && <div className='loader-backdrop'>
                        <div className='loader'>
                              Loading Information...
                        </div>
                  </div>}
                  {error && <div>{error}</div>}
                  <CountrySection countries={countries} setUrl={setUrl} />
            </>
      )
}