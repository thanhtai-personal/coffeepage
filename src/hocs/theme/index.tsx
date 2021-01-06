import React from 'react'
import ThemeProvider from './multiThemeProvider'
import { IThemeProps } from './interfaces'

const useMultiThemes = (ComposedComponent: React.FC) => {
  const UseThemeComponent = (props: IThemeProps) => {
    return (
      <ThemeProvider>
        <ComposedComponent {...props} />
      </ThemeProvider>
    )
  }

  return UseThemeComponent
}

export default useMultiThemes

