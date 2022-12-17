import { useFetch } from '../../hooks/useFetch';
import { BorderCountry } from '../BorderCountry/BorderCountry';
import './BorderCountryList.css'

type BorderCountryListProps = {
      borderCountries: string[]
}

export const BorderCountryList = (props: BorderCountryListProps) => {
      const id = props.borderCountries.toString();
      const { data: countries, isPending, error } = useFetch(`https://restcountries.com/v3.1/alpha?codes=${id}`);

      return (
            <div className="borders">
                  {isPending && <div className='loader-backdrop'>
                        <div className='loader'>
                              Loading Information...
                        </div>
                  </div>}
                  {error && error ? (<span className='border-country-name'>NONE</span>)
                        : countries && countries ? (countries.map((country: any) => (
                              country ? (<span key={country.name.common} >
                                    <BorderCountry country={country} />
                              </span>) : (<span className='border-country-name'>NONE</span>)))) :
                              (<span className='border-country-name'>NONE</span>)}
            </div>
      )
}