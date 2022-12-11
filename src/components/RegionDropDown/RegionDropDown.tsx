import { useState } from 'react'
import './RegionDropDown.css'

type RegionDropDownProps = {
      setUrl: React.Dispatch<React.SetStateAction<string>>
}

export const RegionDropDown = (props: RegionDropDownProps) => {
      const [searchTerm, setSearchTerm] = useState<string>('');

      const updateSearchTerm = (e: React.ChangeEvent<HTMLSelectElement>) => {
            const regionName = e.target.value;
            setSearchTerm(regionName);
            if (regionName === 'All') {
                  props.setUrl('https://restcountries.com/v3.1/all')
            } else {
                  let url = `https://restcountries.com/v3.1/region/${regionName}`
                  props.setUrl(url);
            }
      }

      return (
            <div className="region-drop-down">
                  <select
                        title="Region Drop Down"
                        name="region"
                        id="region"
                        defaultValue=''
                        onChange={(e) => updateSearchTerm(e)}
                        value={searchTerm}
                  >
                        <option value="" disabled hidden>Filter by Region</option>
                        <option value="All">All Regions</option>
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                  </select>
            </div>
      )
}