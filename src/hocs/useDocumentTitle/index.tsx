import React, { useEffect } from 'react'

interface IDocumentTitleProps {

}

const useDocumentTitle = (ComposedComponent: React.FC) => {
  const DocumentTitleComponent = (props: IDocumentTitleProps) => {

    useEffect(() => {
      let title = window.location.href
      if (title.endsWith('/')) title = title.slice(0, -1)
      document.title = title

      let url = window.location.href
      if (url.endsWith('/home')) url = url.substring(0, url.length - 5)
      window.history.pushState({}, 'home-page', url)
    }, [])

    return (
      <ComposedComponent {...props} />
    )
  }

  return DocumentTitleComponent
}

export default useDocumentTitle

