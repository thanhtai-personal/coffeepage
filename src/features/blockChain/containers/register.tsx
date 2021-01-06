import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import Loading from 'root/components/loading'
import { IRegisterContainerProps } from './interfaces'
import { reducerNames } from '../reducers/enums'

const RegisterComponent = React.lazy(() => import('./../components/register'))

const RegisterContainer: React.FC<IRegisterContainerProps> = (props: IRegisterContainerProps) => {
    return <Suspense fallback={<Loading />}>
        <RegisterComponent {...props} />
    </Suspense>
}

const mapStateToProps = (state: any) => ({
    title: state[reducerNames.register]?.title
})

const mapProps = {}

export default connect(mapStateToProps, mapProps)(RegisterContainer)