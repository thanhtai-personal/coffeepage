import React from 'react'
import { Container, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import startDividerImage from 'root/asserts/images/startDevider.svg'
import endDividerImage from 'root/asserts/images/endDevider.svg'

interface AboutProps {

}

const useStyles = (props: AboutProps) => (makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: '#fff',
      padding: '50px 0 75px',
      overflowX: 'hidden',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '@media(max-width:1190px)': {
        padding: '15px 0 30px'
      },
    },
    content: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      display: 'flex',
      '@media(max-width:1190px and min-width:768px)': {
        display: 'flex',
        padding: '15px 30px',
        width: '100%',
      },
      '@media(max-width:767px)': {
        display: 'flex',
        padding: '15px',
      },
    },
    aboutContent: {
      padding: '30px 0 20px',
      width: '80%',
      textAlign: 'center',
      lineHeight: '28px',
      color: 'black'
    },
    clientName: {
      padding: '20px 0 40px',
      color: '#556df6',
      fontSize: '18px',
    }
  }),
))()

const Reporting = (props: AboutProps) => {
  const classes = useStyles(props)

  return (
    <section className={classes.root}>
      <Container maxWidth='lg' className={classes.aboutContent}>
        <img alt='about-start' style={{ width: '100%' }} src={startDividerImage}></img>
        <Typography className={classes.content} align={'center'}>
          The combination of Games and Blockchain has created
          a fascinating solution for financial management in the virtual world.
          Beyond the entertainment offered by games, we believe DrakenX is also
          bringing more value to the community.
          The goal of DrakenX is to continuously
          launch new game genres that can be combined with
          DRK Chain to provide more entertaining-and-profitable options!
          <Typography align={'center'} className={classes.clientName}>Jacob Jones - GAMER</Typography>
        </Typography>
        <img alt='about-end' style={{ width: '100%' }} src={endDividerImage}></img>
      </Container>
    </section>
  )
}

export default Reporting