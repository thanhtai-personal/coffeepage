import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = (props: any) => (makeStyles((theme: Theme) =>
  createStyles({
    account: {
      display: 'flex',
      flexDirection: 'column',
      padding: '18px',
      height: '34px',
      '@media(max-width:767px)': {
        margin: '10px',
      },
      '&:hover': {
        borderBottom: '1px solid #556df6'
      }
    },
  }),
))()

const AccountTab = (props: any) => {

  const classes = useStyles(props)
  
  return (
    <div className={classes.account}>
      <Typography style={{
        color: '#fff',
        fontSize: '10px',
        textTransform: 'uppercase',
        fontWeight: 500,
      }} variant={'body2'}>DRX WALLET</Typography>
      <Typography style={{
        display: 'flex',
        color: '#fb9701',
        fontSize: '14px',
        fontWeight: 600,
        marginTop: '4px',
      }} variant={'body2'}>9999.99</Typography>
    </div>
  )
}

export default AccountTab