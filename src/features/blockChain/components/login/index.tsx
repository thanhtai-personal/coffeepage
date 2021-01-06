import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Container, Typography, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Button, { buttonType } from 'root/components/materialUIs/button'
import AntTextField from 'root/components/materialUIs/textField'
import backgroundImage from 'root/asserts/images/banner.jpg'

const useStyles = (props: any) => (makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '550px',
    },
    box: {
      width: '460px',
      '-webkit-backdrop-filter': 'blur(5px)',
      backdropFilter: 'blur(5px)',
      borderRadius: '10px',
      padding: '40px 45px',
      background: 'rgba(13,15,18,.8)',
      '@media(max-width:767px)': {
        width: '100%',
        padding: '30px 15px'
      },
    },
    boxAside: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '30px',
    },
    title: {
      fontWeight: 600,
      fontSize: '30px',
      color: '#556df6',
      marginBottom: '10px',
      '@media(max-width:767px)': {
        fontSize: '26px'
      },
    },
    subTitle: {
      fontWeight: 400,
      fontSize: '15px',
      lineHeight: '24px',
      color: '#77818b',
      '@media(max-width:767px)': {
        fontSize: '13px',
        lineHeight: '20px',
      },
    },
    errorMessage: {
      color: '#bb3232',
      fontSize: '13px'
    },
    buttonSubmit: {
      width: '143px',
      height: '48px',
      fontWeight: 600
    },
    actions: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '15px',
    },
    linkArea: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: 0,
    },
    link: {
      color: '#06f',
      marginBottom: '10px',
      cursor: 'pointer',
      fontWeight: 400,
      fontSize: '13px',
      lineHeight: '13px',
      textDecoration: 'none'
    },
    dontYouHaveAccount: {
      color: '#fff',
      fontWeight: 400,
      fontSize: '13px',
      lineHeight: '13px',
    }
  })
))()

interface ILoginProps {

}

const Login = (props: ILoginProps) => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <Container className={classes.box} maxWidth='xs'>
        <aside className={classes.boxAside}>
          <Typography className={classes.title}>Login</Typography>
          <Typography className={classes.subTitle}>Login to your account to play</Typography>
        </aside>
        <form>
          <AntTextField label='Email or username' errorObj={{message: 'Required field'}}/>
          <AntTextField label='Password' type='password' errorObj={{message: 'Required field'}}/>
          <Typography className={classes.errorMessage}></Typography>
          <Grid container className={classes.actions}>
            <Grid item xs className={classes.linkArea}>
              <Link to='/forgot-password' className={classes.link}>
                Forgot password
              </Link>
              <span className={classes.dontYouHaveAccount}>Don't you have account? <Link className={classes.link} to='/registration'>
                Register
              </Link></span>
            </Grid>
            <Grid item>
              <Button
                className={classes.buttonSubmit}
                type={buttonType.Primary}
              >
                Sign In
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  )
}

export default Login