import React, { createContext, useReducer } from 'react';

interface IThemeContext {
      darkTheme: boolean,
      toggleDarkTheme?: () => void
}

const defaultState = {
      darkTheme: false
}

enum ThemeActionKind {
      TOGGLE_DARK_THEME = 'TOGGLE_DARK_THEME'
}

interface ThemeAction {
      type: ThemeActionKind
}

interface ThemeState {
      darkTheme: boolean
}

type ThemeProviderProps = {
      children: React.ReactNode
}

export const ThemeContext = createContext<IThemeContext>(defaultState);

const themeReducer = (state: ThemeState, action: ThemeAction) => {
      switch (action.type) {
            case ThemeActionKind.TOGGLE_DARK_THEME:
                  console.log(state.darkTheme);
                  return { ...state, darkTheme: !(state.darkTheme) }
            default:
                  return state
      }
}

export function ThemeProvider(props: ThemeProviderProps) {
      const [state, dispatch] = useReducer(themeReducer, {
            darkTheme: false
      })

      const toggleDarkTheme = () => {
            dispatch({ type: ThemeActionKind.TOGGLE_DARK_THEME })
      }

      return (
            <ThemeContext.Provider value={{ ...state, toggleDarkTheme }}>
                  {props.children}
            </ThemeContext.Provider>
      )
}