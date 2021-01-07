import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Grid, Container, Typography, useMediaQuery } from '@material-ui/core'
// import drakenxImage from 'root/asserts/images/drakenx.svg'
import {
  Facebook as FacebookIcon
  , Telegram as TelegramIcon
  , Twitter as TwitterIcon
} from '@material-ui/icons'

interface FooterProps {

}

const useStyles = (props: FooterProps) => (makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#15181d',
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
    riskWarning: {
      fontWeight: 400,
      fontSize: '10px',
      lineHeight: '18px',
      color: '#77818b',
      borderTop: '1px solid #292929',
      paddingTop: '25px',
      marginTop: '25px',
    },
    footerText: {
      fontWeight: 400,
      fontSize: '14px',
      paddingBottom: '15px',
      display: 'block',
      color: '#77818b',
    },
    footerLogo: {
      marginBottom: '20px',
      width: '140px'
    },
    footerTextTitle: {
      fontWeight: 600,
      fontSize: '13px',
      color: '#bfcbd0',
      paddingBottom: '15px',
      display: 'block',
    },
    linkText: {
      opacity: 0.4,
      cursor: 'pointer',
      color: 'white',
      '&:hover': {
        color: '#556df6',
        opacity: 1
      }
    },
    paddingTop: {
      paddingTop: theme.spacing(3)
    },
    paddingBoth: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(2)
    },
    socialIcon: {
      position: 'relative',
      top: '5px'
    },
    telegram: {
      opacity: 1,
      color: '#3ac4ff'
    },
    facebook: {
      opacity: 1,
      color: '#297cfa'
    },
    twiter: {
      opacity: 1,
      color: '#3ac4ff'
    }
  }),
))()

const Footer = (props: FooterProps) => {
  const minWidth800 = useMediaQuery('(min-width:800px)')
  const classes = useStyles(props)

  const copyRight = <>
    {/* <img alt='footer-logo' src={drakenxImage} className={classes.footerLogo} /> */}
    <Typography className={classes.footerText} variant='body2'>© Copyright by DrakenX 2020.</Typography>
    <Typography className={classes.footerText} variant='body2'>All rights reserved</Typography></>
  const introduceASupport = <><Typography className={classes.footerTextTitle} variant='body2'>Instroduce & support</Typography>
    <Typography className={classes.linkText} variant='body2'>About us</Typography>
    <Typography className={classes.linkText} variant='body2'>FAQs</Typography></>
  const securityAPrivacy = <><Typography className={classes.footerTextTitle} variant='body2'>Security & Privacy</Typography>
    <Typography className={classes.linkText} variant='body2'>Terms and Conditions</Typography>
    <Typography className={classes.linkText} variant='body2'>Risk Warning</Typography>
    <Typography className={classes.linkText} variant='body2'>Liability and Indemnity</Typography></>
  const social = <><Typography className={classes.footerTextTitle} variant='body2'>Community</Typography>
    <Typography className={[classes.linkText, classes.telegram].join(' ')} variant='body2'>
      <TelegramIcon className={classes.socialIcon} />Telegram
    </Typography>
    <Typography className={[classes.linkText, classes.facebook].join(' ')} variant='body2'>
      <FacebookIcon  className={classes.socialIcon} />Facebook</Typography>
    <Typography className={[classes.linkText, classes.twiter].join(' ')} variant='body2'>
      <TwitterIcon  className={classes.socialIcon} />Twitter
    </Typography></>
  const warning = <Grid item xs={12} className={classes.riskWarning}>
    <b>Risk Warning: </b>
  Trading and investing in digital options involves significant level of risk and is not suitable
    and/or appropriate for all clients. Please make sure you carefully consider your investment objectives,
    level of experience and risk appetite before buying or selling any digital asset. You should be aware
      of and fully understand all the risks associated with trading and investing in digital assets
      , you should not invest funds you cannot afford to lose. You are granted limited non-exclusive rights
      to use the IP contained in this site for personal, non-commercial, non-transferable use only in
        relation to the services offered on the site
</Grid>
  return (
    <div className={classes.root}>
      <Container>
        {minWidth800 ? <Grid container spacing={3}>
          <Grid item xs={4}>{copyRight}</Grid>
          <Grid item xs={3}>{introduceASupport}</Grid>
          <Grid item xs={3}>{securityAPrivacy}</Grid>
          <Grid item xs={2}>{social}</Grid>
          {warning}
        </Grid>
          : <>
            <Grid item xs={12}>{copyRight}</Grid>
            <Grid item xs={12} className={classes.paddingTop}>{introduceASupport}</Grid>
            <Grid item xs={12} className={classes.paddingTop}>{securityAPrivacy}</Grid>
            <Grid item xs={12} className={classes.paddingBoth}>{social}</Grid>
            {warning}
          </>}
      </Container>
    </div>
  )
}

export default Footer