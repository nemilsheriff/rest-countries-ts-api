import './CountryItem.css'
import { useTheme } from '../../hooks/useTheme';
import { Link } from 'react-router-dom';

type CountryItemProps = {
      country?: any
}

export const CountryItem = (props: CountryItemProps) => {
      const { darkTheme } = useTheme();
      const url = `/countries/${props.country.name.official}`
      return (
            <Link className='border-country-name' to={url}>
                  <div className={darkTheme ? ("country Dark") : ("country")}>
                        <img src={props.country.flags.png} alt='flag'></img>
                        <div className={darkTheme ? ("country-details Dark") : ("country-details")}>
                              <h3>{props.country.name.official}</h3>
                              <p><b>Population:</b> {props.country.population.toLocaleString("en-US")}</p>
                              <p><b>Region:</b> {props.country.region}</p>
                              <p><b>Capital:</b> {props.country.capital}</p>
                        </div>
                  </div>
            </Link>
      )
}