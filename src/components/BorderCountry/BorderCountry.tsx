import { useTheme } from '../../hooks/useTheme';
import { useNavigate } from "react-router-dom"
import './BorderCountry.css'

type CountryItemProps = {
      country?: any
}

export const BorderCountry = (props: CountryItemProps) => {
      const { darkTheme } = useTheme();
      const navigate = useNavigate();
      // console.log(props.country);
      const url = `/countries/${props.country.name.official}`
      // const url = `/countries/${props.country.name.official}`
      return (
            <div key={props.country.name.common}>
                  <a onClick={() => navigate(url)} className='border-country-name' >
                        {props.country.name.common}
                  </a>
            </div>
      )
}

// <a onClick={() => navigate(url)}>