import './BorderCountry.css';
import { Link } from 'react-router-dom';

type CountryItemProps = { country?: any }

export const BorderCountry = (props: CountryItemProps) => {
      const url = `/countries/${props.country.name.official}`

      return (
            <div key={props.country.name.common}>
                  <Link className='border-country-name' to={url}>
                        {props.country.name.common}
                  </Link>
            </div>
      )
}