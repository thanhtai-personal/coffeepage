import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import Loading from 'root/components/loading'
import { IHomeContainerProps } from './interfaces'
import { reducerNames } from '../reducers/enums'

const HomeComponent = React.lazy(() => import('../components/home'))

const HomeContainer: React.FC<IHomeContainerProps> = (props: IHomeContainerProps) => {
    return <Suspense fallback={<Loading />}>
        <HomeComponent {...props} />
    </Suspense>
}

const mapStateToProps = (state: any) => ({
    title: state[reducerNames.home]?.title
})

const mapProps = {}

export default connect(mapStateToProps, mapProps)(HomeContainer)