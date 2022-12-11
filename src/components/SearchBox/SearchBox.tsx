import { useState } from 'react';
import './SearchBox.css';
import { useTheme } from '../../hooks/useTheme';

type SearchBoxProps = {
      setUrl: React.Dispatch<React.SetStateAction<string>>
}

export const SearchBox = (props: SearchBoxProps) => {
      const { darkTheme } = useTheme();
      const [searchTerm, setSearchTerm] = useState<string>('');

      const updateSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
            const countryName = e.target.value;
            setSearchTerm(countryName);
            if (countryName) {
                  let url = `https://restcountries.com/v3.1/name/${countryName}`
                  props.setUrl(url);
            } else {
                  props.setUrl('https://restcountries.com/v3.1/all')
            }
      }

      return (
            <label>
                  <input
                        className={darkTheme ? ("country-search Dark") : ("country-search")}
                        placeholder="Search for a country..."
                        onChange={(e) => updateSearchTerm(e)}
                        value={searchTerm}
                  >
                  </input>
            </label>
      )
}