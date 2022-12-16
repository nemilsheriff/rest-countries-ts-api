import { useTheme } from '../../hooks/useTheme';
import { useNavigate } from "react-router-dom"
import './BorderCountry.css'

type CountryItemProps = {
      country?: any
}

export const BorderCountry = (props: CountryItemProps) => {
      const { darkTheme } = useTheme();
      const navigate = useNavigate();
      const url = `/countries/${props.country.name.official}`
      return (
            <a onClick={() => navigate(url)} className='border-country-name' key={props.country.name.common}>
                  {props.country.name.common}
            </a>
      )
}