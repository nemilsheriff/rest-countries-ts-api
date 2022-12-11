import { CountryItem } from "../CountryItem/CountryItem"
import './CountryList.css'

type CountryListProps = {
      countries?: any
}

export const CountryList = (props: CountryListProps) => {
      return (
            props.countries && props.countries.map((country: any) => (
                  <div
                        key={country.cca2}
                        className='country-detail'
                  >
                        <CountryItem country={country} />
                  </div>
            ))
      )
}