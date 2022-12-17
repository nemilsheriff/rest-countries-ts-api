import { useParams } from 'react-router-dom';
import { CountryDetails } from '../components/CountryDetails/CountryDetails';
import { useFetch } from '../hooks/useFetch';
// import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import './CountryDetailsPage.css'

export const CountryDetailsPage = () => {
      const { darkTheme } = useTheme();
      const { id } = useParams();
      // console.log(id);
      // const [url, setUrl] = useState<string>(`https://restcountries.com/v3.1/name/${id}`)
      // const { data: countries, isPending, error } = useFetch(url);
      const { data: countries, isPending, error } = useFetch(`https://restcountries.com/v3.1/name/${id}`);

      return (
            <div className={darkTheme ? ('country-details-page-component dark') : ('country-details-page-component')}>
                  {isPending && <div className='loader-backdrop'>
                        <div className='loader'>
                              Loading Information...
                        </div>
                  </div>}
                  {error && <div>{error}</div>}
                  {countries && <CountryDetails country={countries[0]} />}
            </div>
      )

      // if (Array.isArray(countries)) {
      //       const country = countries[0];

      //       return (
      //             <div className={darkTheme ? ('country-details-page-component dark') : ('country-details-page-component')}>
      //                   {isPending && <div className='loader-backdrop'>
      //                         <div className='loader'>
      //                               Loading Countries...
      //                         </div>
      //                   </div>}
      //                   {error && <div>{error}</div>}
      //                   <CountryDetails country={country} />
      //             </div>
      //       )
      // } else {
      //       return (
      //             <div>Country is not found</div>
      //       )
      // }
}