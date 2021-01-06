import useMultiThemes from './theme'
import useHeader from './layout/useHeader'
import useFooter from './layout/useFooter'
import useDocumentTitle from './useDocumentTitle'
import { IHocProps } from 'root/managers/appRoute/interfaces'

const combineHoc = (hocObj: { [key: string]: Function }) => {
  return Object.keys(hocObj).map((key) => hocObj[key])
}

function createHocs() {
  // Create an object which maps keys to hocs
  const hocObj: { [key: string]: Function } = {
    useMultiThemes,
    useHeader,
    useFooter,
    useDocumentTitle
  }
  // Create the initial combinedHOC
  let hocs : Array<Function> = [
    useMultiThemes,
    useHeader,
    useFooter,
    useDocumentTitle
  ]

  return {
    getHocsMap: () => hocObj,

    // The root HOC function exposed by this object
    reduce: () => {
      return hocs
    },


    call: (hocProps: IHocProps, wrappedComponent: React.FC) => {
      return hocObj[hocProps.key](wrappedComponent, ...hocProps.params)
    },

    // Adds a new HOC with the specified key
    add: (key: string, hoc: Function) => {
      if (!key || hocObj[key]) {
        return
      }

      // Add the HOC to the HOC mapping
      hocObj[key] = hoc

      // Generate a new combined HOC
      hocs = combineHoc(hocObj)
    },

    // Removes a HOC with the specified key
    remove: (key: string) => {
      if (!key || !hocObj[key]) {
        return
      }

      // Remove it from the HOC mapping
      delete hocObj[key]

      // Generate a new combined HOC
      hocs = combineHoc(hocObj)
    }
  }
}

export default createHocs