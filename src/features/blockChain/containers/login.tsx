import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import Loading from 'root/components/loading'
import { ILoginContainerProps } from './interfaces'
import { reducerNames } from '../reducers/enums'

const LoginComponent = React.lazy(() => import('./../components/login'))

const LoginContainer: React.FC<ILoginContainerProps> = (props: ILoginContainerProps) => {
    return <Suspense fallback={<Loading />}>
        <LoginComponent {...props} />
    </Suspense>
}

const mapStateToProps = (state: any) => ({
    title: state[reducerNames.login]?.title
})

const mapProps = {}

export default connect(mapStateToProps, mapProps)(LoginContainer)