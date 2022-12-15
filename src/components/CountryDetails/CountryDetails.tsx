import { useTheme } from '../../hooks/useTheme';
import { useFetch } from '../../hooks/useFetch';
import { useState } from 'react';
import './CountryDetails.css'
import { useNavigate } from "react-router-dom"

type CountryDetailsProps = {
      country?: any
}

export const CountryDetails = (props: CountryDetailsProps) => {
      const { darkTheme } = useTheme();
      let currencyNames = [];
      let languages = [];
      let borderCountries = [];
      const navigate = useNavigate();
      const home = `/`

      for (var prop in props.country.currencies) {
            currencyNames.push(props.country.currencies[prop].name);
      }

      for (var prop1 in props.country.languages) {
            languages.push(props.country.languages[prop1]);
      }

      for (var prop2 in props.country.borders) {
            borderCountries.push(props.country.borders[prop2]);
      }
      const id = borderCountries.toString();
      const [url, setUrl] = useState<string>(`https://restcountries.com/v3.1/alpha?codes=${id}`)
      const { data: countries, isPending, error } = useFetch(url);
      // console.log(countries);
      return (
            <div className={darkTheme ? ("country-details-page dark") : ("country-details-page")}>
                  <a className='back-button' onClick={() => navigate(home)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z" /></svg>
                        Back</a>
                  <div className="flag-and-details">
                        <img src={props.country.flags.png} alt='flag'></img>
                        <div className="text-details">
                              <h3>{props.country.name.official}</h3>
                              <p><strong>Native Name:</strong> {props.country.name.official}</p>
                              <p><b>Population:</b> {props.country.population.toLocaleString("en-US")}</p>
                              <p><b>Region:</b> {props.country.region}</p>
                              <p><b>Sub Region:</b> {props.country.subregion}</p>
                              <p><b>Capital:</b> {props.country.capital}</p>
                              <br />
                              <p><b>Top Level Domain:</b> {props.country.tld}</p>
                              <p>
                                    <b>Currencies: </b>
                                    {currencyNames.map(currencyName => (
                                          <span key={currencyName} className='currency-name'>{currencyName}</span>
                                    ))}
                              </p>
                              <p>
                                    <b>Languages: </b>
                                    {languages.map(language => (
                                          <span key={language} className='language-name'>{language}</span>
                                    ))}
                              </p>
                              <p><b>Border Countries: </b></p>
                              <div className="borders">
                                    {/* {error && <div>{error}</div>} */}
                                    {countries ? (countries.map((country: any) => (
                                          <span key={country.name.common} className='border-country-name'>{country.name.common}</span>
                                    ))) : (<span key={"NONE"} className='border-country-name'>NONE</span>)}
                              </div>
                        </div>
                  </div>
            </div>
      )
}