import React from 'react'
import { CountryList } from '../CountryList/CountryList'
import { RegionDropDown } from '../RegionDropDown/RegionDropDown'
import { SearchBox } from '../SearchBox/SearchBox'
import './CountrySection.css'
import { useTheme } from '../../hooks/useTheme';

type CountrySectionProps = {
      countries?: any,
      setUrl: React.Dispatch<React.SetStateAction<string>>
}

export const CountrySection = (props: CountrySectionProps) => {
      const { darkTheme } = useTheme();
      return (
            <div className={darkTheme ? ("country-section Dark") : ("country-section")}>
                  <div className="country-section__search-plus-dropdown">
                        <SearchBox setUrl={props.setUrl} />
                        <RegionDropDown setUrl={props.setUrl} />
                  </div>
                  <div className="country-section__country-list">
                        <CountryList countries={props.countries} />
                  </div>
            </div>
      )
}