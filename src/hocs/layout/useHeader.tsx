import React from 'react'
import Header from './header'

const useHeader = (ComposedComponent: React.FC, isFixed = false) => {
  const UseHeaderComponent = (props: any) => {
    return (
      <>
        <Header isFixed={isFixed}/>
        <ComposedComponent {...props}/>
      </>
    )
  }

  return UseHeaderComponent
}

export default useHeader

