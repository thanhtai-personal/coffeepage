import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import Loading from 'root/components/loading'
import { IForgotPasswordProps } from './interfaces'
import { reducerNames } from '../reducers/enums'

const ForgotPassComponent = React.lazy(() => import('./../components/forgotPassword'))

const ForgotPassword: React.FC<IForgotPasswordProps> = (props: IForgotPasswordProps) => {
    return <Suspense fallback={<Loading />}>
        <ForgotPassComponent {...props} />
    </Suspense>
}

const mapStateToProps = (state: any) => ({
    title: state[reducerNames.register]?.title
})

const mapProps = {}

export default connect(mapStateToProps, mapProps)(ForgotPassword)