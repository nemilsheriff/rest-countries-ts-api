import './Heading.css';
import { useTheme } from '../../hooks/useTheme';

export const Heading = () => {
      const { toggleDarkTheme, darkTheme } = useTheme();

      return (
            <div className={darkTheme ? ("Heading Dark") : ("Heading")}>
                  <h2>Where in the world?</h2>
                  <div className="theme">
                        <div className="theme__dark" onClick={toggleDarkTheme}>
                              <figure>
                                    <div>
                                          <svg viewBox="0 0 60 55" width="26" height="26">
                                                <path xmlns="http://www.w3.org/2000/svg" d="M24 42q-7.5 0-12.75-5.25T6 24q0-7.5 5.25-12.75T24 6q.4 0 .85.025.45.025 1.15.075-1.8 1.6-2.8 3.95-1 2.35-1 4.95 0 4.5 3.15 7.65Q28.5 25.8 33 25.8q2.6 0 4.95-.925T41.9 22.3q.05.6.075.975Q42 23.65 42 24q0 7.5-5.25 12.75T24 42Z" />
                                          </svg>
                                    </div>
                                    <p>
                                          {darkTheme ? ('Light Mode') : ('Dark Mode')}
                                    </p>
                              </figure>
                        </div>
                  </div>
            </div>
      )
}