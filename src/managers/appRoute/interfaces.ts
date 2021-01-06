
export interface IHocProps {
  key: string,
  params: Array<any>
}
export interface IAppRoute {
    setUpStore: Function,
    component: React.FC,
    hocs: Array<IHocProps>,
    path: string,
    childrenRoute: Array<IAppRoute>,
    isExact: boolean,
    key: string
}