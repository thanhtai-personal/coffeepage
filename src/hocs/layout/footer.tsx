import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Grid, Container, Typography, useMediaQuery } from '@material-ui/core'
import logo_90 from 'root/asserts/images/logo_90.png'
import {
  Facebook as FacebookIcon
  , Telegram as TelegramIcon
  , Twitter as TwitterIcon
} from '@material-ui/icons'
import { ElementIds } from 'root/constants'
import Color from 'root/color'

interface FooterProps {

}

const useStyles = (props: FooterProps) => (makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: Color.mainBgColor,
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
    footerText: {
      fontWeight: 600,
      fontSize: '14px',
      paddingBottom: '15px',
      display: 'block',
      color: Color.coffee,
      textTransform: 'uppercase'
    },
    footerLogo: {
      marginBottom: '20px',
    },
    footerTextTitle: {
      fontWeight: 600,
      fontSize: '13px',
      color: '#000',
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
      color: Color.coffee
    },
    facebook: {
      opacity: 1,
      color: '#297cfa'
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
    footerLogoWrapper: {
      width: '270px'
    }
  }),
))()

const Footer = (props: FooterProps) => {
  const minWidth800 = useMediaQuery('(min-width:800px)')
  const classes = useStyles(props)

  const copyRight = <>
    <Typography align='center' className={classes.footerLogoWrapper}>
      <img alt='footer-logo' src={logo_90} className={classes.footerLogo} />
    </Typography>
    <Typography className={classes.footerText} variant='body2'>{'FRD Coffee: Chất lượng và bền vững'}</Typography>
    </>
  const social = <><Typography className={classes.footerTextTitle} variant='body2'>{'Cộng đồng:'}</Typography>
    <Typography className={[classes.linkText, classes.facebook].join(' ')} variant='body2'>
      <FacebookIcon className={classes.socialIcon} />{'Facebook'}</Typography>
    </>
  const contact = <><Typography className={classes.footerTextTitle} variant='body2'>{'Liên hệ: '}</Typography>
    <Typography className={[classes.linkText, classes.telegram].join(' ')} variant='body2'>
      <TelegramIcon className={classes.socialIcon} />{'0367888522'}
    </Typography>
  </>
  const warning = <Grid item xs={12} className={classes.riskWarning}>
  {`FRD Coffee là đơn vị rang xay cà phê đến từ Đăk Nông, rất hân hạnh được mang đến cho quý khách hương vị nồng nàn của cà phê tây nguyên Việt Nam.`}
</Grid>
  return (
    <div id={ElementIds.contact} className={classes.root}>
      <Container>
        {minWidth800 ? <Grid container spacing={3}>
          <Grid item xs={4}>{copyRight}</Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>{contact}</Grid>
          <Grid item xs={2}>{social}</Grid>
          {warning}
        </Grid>
          : <>
            <Grid item xs={12}>{copyRight}</Grid>
            <Grid item xs={12} className={classes.paddingTop}></Grid>
            <Grid item xs={12} className={classes.paddingTop}></Grid>
            <Grid item xs={12} className={classes.paddingBoth}>{social}</Grid>
            {warning}
          </>}
      </Container>
    </div>
  )
}

export default Footer