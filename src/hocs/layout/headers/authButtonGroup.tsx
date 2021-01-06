import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Button, { buttonType } from 'root/components/materialUIs/button'


const useStyles = (props: any) => (makeStyles((theme: Theme) =>
  createStyles({
    authButtonGroup: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '20px',
      marginRight: '20px',
    },
    loginButton: {
      height: '32px',
      minWidth: '50px',
      borderRadius: '33px 0 0 33px',
      padding: '0 30px',
      fontSize: '13px',
      fontWeight: 600,
      '@media(max-width:767px)': {
        padding: '0 15px'
      },
    },
    registerButton: {
      height: '32px',
      minWidth: '50px',
      borderRadius: '0 33px 33px 0',
      padding: '0 30px',
      fontSize: '13px',
      fontWeight: 600,
      '@media(max-width:767px)': {
        padding: '0 15px'
      },
    },
    linkButton: {
      color: 'white',
      textDecoration: 'none',
    }
  }),
))()

const AuthButtonGroup = (props: any) => {

  const classes = useStyles(props)
  return (
    <div className={classes.authButtonGroup}>
      <Link className={classes.linkButton} to='/login'><Button className={classes.loginButton} type={buttonType.Primary}>Login</Button></Link>
      <Link className={classes.linkButton} to='/registration'><Button className={classes.registerButton} type={buttonType.Secondary}>Register</Button></Link>
    </div>
  )
}

export default AuthButtonGroup