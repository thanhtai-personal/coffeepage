import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import Loading from 'root/components/loading'
import { IAgencyProps } from './interfaces'
import { reducerNames } from '../reducers/enums'

const AgencyComponent = React.lazy(() => import('./../components/agency'))

const ForgotPassword: React.FC<IAgencyProps> = (props: IAgencyProps) => {
    return <Suspense fallback={<Loading />}>
        <AgencyComponent {...props} />
    </Suspense>
}

const mapStateToProps = (state: any) => ({
    title: state[reducerNames.register]?.title
})

const mapProps = {}

export default connect(mapStateToProps, mapProps)(ForgotPassword)