import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import Loading from 'root/components/loading'
import { IWalletProps } from './interfaces'
import { reducerNames } from '../reducers/enums'

const WalletComponent = React.lazy(() => import('./../components/wallet'))

const Wallet: React.FC<IWalletProps> = (props: IWalletProps) => {
    return <Suspense fallback={<Loading />}>
        <WalletComponent {...props} />
    </Suspense>
}

const mapStateToProps = (state: any) => ({
    title: state[reducerNames.register]?.title
})

const mapProps = {}

export default connect(mapStateToProps, mapProps)(Wallet)