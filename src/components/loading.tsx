import React from 'react'
import { CircularProgress, makeStyles, Theme, createStyles } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loading: {},
  }),
);

const LoadingComponent: React.FC = (props: any) => {
    const classes = useStyles(props)
    return (<CircularProgress className={classes.loading} />)
}

export default LoadingComponent