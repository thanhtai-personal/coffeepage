import React from 'react'
import { Container, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
// import bannerImage from 'root/asserts/images/banner.jpg'
// import rightElementImage from 'root/asserts/images/rightElement.svg'
import Button, { buttonType } from 'root/components/materialUIs/button'

interface BannerProps {

}

const useStyles = (props: any) => (makeStyles((theme: Theme) =>
  createStyles({
    banner: {
      // backgroundImage: `url(${bannerImage})`,
      backgroundSize: 'cover',
      padding: '20px 0 0',
      overflowX: 'hidden',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '&:after': {
        boxSizing: 'border-box'
      },
      '&:before': {
        boxSizing: 'border-box'
      },
      '@media(max-width:1190px)': {
        display: 'flex',
        padding: '20px 0'
      }
    },
    bannerContent: {
      alignItems: 'center',
      justifyContent: 'space-between',
      display: 'flex',
      width: '1170px',
      '&:after': {
        boxSizing: 'border-box'
      },
      '&:before': {
        boxSizing: 'border-box'
      },
      '@media(max-width:1190px and min-width:768px)': {
        display: 'flex',
        padding: '15px 30px'
      },
      '@media(max-width:767px)': {
        flexDirection: 'column',
        display: 'flex',
        width: '100%',
        padding: '15px 0px'
      }
    },
    leftElement: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: '40%',
      marginBottom: '50px',
      '@media(max-width:1190px and min-width:768px)': {
        width: '40%',
        marginBottom: 0
      },
      '@media(max-width:767px)': {
        width: '100%',
        marginBottom: '30px',
        alignItems: 'center',
        textAlign: 'center'
      }
    },
    title: {
      color: '#fff',
      fontWeight: 400,
      fontSize: '40px',
      lineHeight: '50px',
      marginBottom: '15px',
      textAlign: 'left',
      '@media(max-width:1190px and min-width:768px)': {
        fontSize: '26px',
        lineHeight: '30px'
      },
      '@media(max-width:767px)': {
        fontSize: '26px',
        lineHeight: '28px',
        marginBottom: '15px',
        textAlign: 'center',
      }
    },
    subTitle: {
      fontWeight: 400,
      lineHeight: '24px',
      color: '#fff',
      fontSize: '15px',
      '@media(max-width:1190px)': {
        fontSize: '13px',
        lineHeight: '20px',
        width: '80%'
      }
    },
    playNowBtn: {
      width: '140px',
      background: '#fff',
      height: '40px',
      fontWeight: 400,
      fontSize: '14px',
      marginTop: '30px',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 10px',
      cursor: 'pointer',
      '@media(max-width:1190px)': {
        marginTop: '140px',
        width: '140px'
      },
      '@media(max-width:767px)': {
        marginTop: '30px'
      }
    },
    rightElementImage: {
      marginBottom: 0,
      width: '60%',
      '@media(max-width:1190px and min-width:768px)': {
        marginBottom: '-30px'
      },
      '@media(max-width:767px)': {
        width: '90%'
      }
    },
  }),
))()

const Banner = (props: BannerProps) => {
  const classes = useStyles(props)

  const leftElement = <>
    <Typography className={classes.title} variant={'h4'}>Fun Blockchain Games that Earn.</Typography>
    <Typography className={classes.subTitle} variant={'h6'}>
      The ultimate entertainment platform within the Draken DeFi Universe.
      DRX token is the currency to access all features and games.
            </Typography></>
  // const rightElement = <img alt='banner-item' src={rightElementImage} className={classes.rightElementImage}></img>

  return (
    <section className={classes.banner}>
      <Container maxWidth='lg' className={classes.bannerContent}>
        <aside className={classes.leftElement}>
          {leftElement}
          <Button type={buttonType.Default} className={classes.playNowBtn}>PLAY NOW</Button>
        </aside>
        {/* {rightElement} */}
      </Container>
    </section>
  )
}

export default Banner