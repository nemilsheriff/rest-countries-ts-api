import { useParams } from 'react-router-dom';
import { CountryDetails } from '../components/CountryDetails/CountryDetails';
import { useFetch } from '../hooks/useFetch';
import { useTheme } from '../hooks/useTheme';
import './CountryDetailsPage.css'

export const CountryDetailsPage = () => {
      const { darkTheme } = useTheme();
      const { id } = useParams();
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
}