import React from 'react'
import Footer from './footer'

const useFooter = (ComposedComponent: React.FC) => {
  const UseFooterComponent = (props: any) => {
    return (
      <>
        <ComposedComponent {...props}/>
        <Footer />
      </>
    )
  }

  return UseFooterComponent
}

export default useFooter

