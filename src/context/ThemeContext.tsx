import React, { createContext, useReducer } from 'react';

interface IThemeContext {
      darkTheme: boolean,
      error?: any,
      toggleDarkTheme?: () => void,
      setError?: (error: any) => any
}

const defaultState = {
      darkTheme: true,
      error: null,
}

enum ThemeActionKind {
      TOGGLE_DARK_THEME = 'TOGGLE_DARK_THEME',
      ADD_ERROR = 'ADD_ERROR'
}

interface ThemeAction {
      type: ThemeActionKind
      payload?: any
}

type ThemeProviderProps = {
      children: React.ReactNode
}

export const ThemeContext = createContext<IThemeContext>(defaultState);

const themeReducer = (state: IThemeContext, action: ThemeAction) => {
      switch (action.type) {
            case ThemeActionKind.TOGGLE_DARK_THEME:
                  // console.log('TOGGLE DARK THEME!')
                  return { ...state, darkTheme: !(state.darkTheme) }
            case ThemeActionKind.ADD_ERROR:
                  return { ...state, error: action.payload }
            default:
                  return state
      }
}

export function ThemeProvider(props: ThemeProviderProps) {
      const [state, dispatch] = useReducer(themeReducer, defaultState)

      const toggleDarkTheme = () => { dispatch({ type: ThemeActionKind.TOGGLE_DARK_THEME }) }

      const setError = (error: any) => { dispatch({ type: ThemeActionKind.ADD_ERROR, payload: error }) }

      return (
            <ThemeContext.Provider value={{ ...state, toggleDarkTheme, setError }}>
                  {props.children}
            </ThemeContext.Provider>
      )
}