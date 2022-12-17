import './BorderCountry.css'

type CountryItemProps = {
      country?: any
}

export const BorderCountry = (props: CountryItemProps) => {
      const url = `/countries/${props.country.name.official}`

      return (
            <div key={props.country.name.common}>
                  <a href={url} className='border-country-name' >
                        {props.country.name.common}
                  </a>
            </div>
      )
}