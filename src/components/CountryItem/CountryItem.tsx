import './CountryItem.css'

type CountryItemProps = {
      country?: any
}

export const CountryItem = (props: CountryItemProps) => {
      return (
            <div className="country">
                  <img src={props.country.flags.png} alt='flag'></img>
                  <div className="country-details">
                        <h3>{props.country.name.official}</h3>
                        <p><b>Population:</b> {props.country.population.toLocaleString("en-US")}</p>
                        <p><b>Region:</b> {props.country.region}</p>
                        <p><b>Capital:</b> {props.country.capital}</p>
                  </div>
            </div>
      )
}