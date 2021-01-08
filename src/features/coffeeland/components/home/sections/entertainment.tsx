import React from 'react'
import {
  Container, Typography
} from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import logo300 from 'root/asserts/images/logo_300.png'
import Color from 'root/color'

interface EntertainmentProps {

}

const useStyles = (props: EntertainmentProps) => (makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: '#fff',
      padding: '50px 0 75px'
    },
    container: {
    },
    titleText: {
      fontSize: '18px',
      lineHeight: '27px',
      textTransform: 'uppercase',
      color: Color.coffee
    },
    logoContent: {
      margin: '20px 0',
    },
    logoImage: {
      background: Color.mainBgColor
    },
    decorateLogo: {
      width: '120px',
      borderBottom: 'solid 2px #c7a17a',
      position: 'relative',
      display: 'inline-block',
      verticalAlign: 'middle',
    }
  })
))()

const Entertainment = (props: EntertainmentProps) => {
  const classes = useStyles(props)

  return (
    <section className={classes.root}>
      <Container maxWidth='lg' className={classes.container}>
       <Typography className={classes.titleText} align='center'>{'FRD Coffee xin chào!'}</Typography>
       <Typography className={classes.logoContent} align='center'>
         <img className={[classes.logoImage, 'lazy'].join(' ')} alt='logo-image' src={logo300}></img>
       </Typography>
       <Typography align='center'>
         <div className={classes.decorateLogo}></div>
       </Typography>
      </Container>
    </section>
  )
}

export default Entertainment