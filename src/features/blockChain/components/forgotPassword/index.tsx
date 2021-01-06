import React, { useCallback, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Container, Typography, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Button, { buttonType } from 'root/components/materialUIs/button'
import AntTextField from 'root/components/materialUIs/textField'
import backgroundImage from 'root/asserts/images/banner.jpg'
import successPopupImage from 'root/asserts/images/successPopup.svg'

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
      minHeight: '450px',
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
    },
    buttonLink: {
      textDecoration: 'none',
      color: '#fff',
      width: '100%'
    },
    buttonHome: {
      width: '100%',
      height: '48px',
      fontWeight: 600
    }
  })
))()

interface IForgotPassProps {

}

const ForgotPass = (props: IForgotPassProps) => {
  const classes = useStyles(props)

  const [isSent, setIsSent] = useState(false)

  const handleConfirm = useCallback((event: MouseEvent) => {
    setIsSent(true)
  }, [setIsSent])

  const resetForm = (
    <form>
      <AntTextField label='Email' errorObj={{message: 'Required field'}}/>
      <Typography className={classes.errorMessage}></Typography>
      <Grid container className={classes.actions}>
        <Grid item xs className={classes.linkArea}>
          <span className={classes.dontYouHaveAccount}>Already registered? <Link className={classes.link} to='/login'>
            Login
              </Link></span>
        </Grid>
        <Grid item>
          <Button
            className={classes.buttonSubmit}
            type={buttonType.Primary}
            onClick={handleConfirm}
          >
            Send Email
          </Button>
        </Grid>
      </Grid>
    </form>
  )

  const confirmAside = (
    <aside className={classes.boxAside}><br />
      <Typography align={'center'}><img alt='v-check' src={successPopupImage}></img></Typography>
      <br />
      <Typography style={{ color: 'rgb(41, 204, 151)'}}>A reset password link have sent to your email.</Typography>
      <Typography style={{ color: 'rgb(41, 204, 151)'}}>Please follow the instructions in the email to continue.</Typography>
      <br />
      <Grid container className={classes.actions}>
        <Button
          className={classes.buttonHome}
          type={buttonType.Primary}
        >
          <Link className={classes.buttonLink} to='/home'>Home</Link>
        </Button>
      </Grid>
    </aside>
  )

  return (
    <div className={classes.root}>
      <Container className={classes.box} maxWidth='xs'>
        <aside className={classes.boxAside}>
          <Typography className={classes.title}>Reset password</Typography>
          <Typography className={classes.subTitle}>For security purposes, no withdrawals are allowed in 24 hours after resetting password completed.</Typography>
        </aside>
        {isSent ? confirmAside : resetForm}
      </Container>
    </div>
  )
}

export default ForgotPass