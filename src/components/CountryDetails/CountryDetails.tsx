import { useTheme } from '../../hooks/useTheme';

import { Link } from 'react-router-dom';
import './CountryDetails.css'

import { BorderCountryList } from '../BorderCountryList/BorderCountryList';

type CountryDetailsProps = {
      country?: any
}

export const CountryDetails = (props: CountryDetailsProps) => {
      const { darkTheme } = useTheme();
      let currencyNames = [];
      let languages = [];
      let borderCountries = [];

      for (var prop in props.country.currencies) {
            currencyNames.push(props.country.currencies[prop].name);
      }

      for (var prop1 in props.country.languages) {
            languages.push(props.country.languages[prop1]);
      }

      for (var prop2 in props.country.borders) {
            borderCountries.push(props.country.borders[prop2]);
      }

      return (
            <div className={darkTheme ? ("country-details-page dark") : ("country-details-page")}>
                  <Link to="/" className='back-button'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z" /></svg>
                        Back
                  </Link>
                  <div className="flag-and-details">
                        <img className='flag-image' src={props.country.flags.png} alt='flag'></img>
                        <div className="text-details">
                              <h3>{props.country.name.official}</h3>
                              <p><b>Native Name:</b> {props.country.name.official}</p>
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
                              <BorderCountryList borderCountries={borderCountries} />
                        </div>
                  </div>
            </div>
      )
}