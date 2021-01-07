import React from 'react'
import { Container, Grid, Typography, useMediaQuery } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
// import reportingRightImage from 'root/asserts/images/homeBg.svg'

interface ReportingProps {

}

const reports = [
  {
    key: 'player',
    number: '20K+',
    text: 'Players'
  },
  {
    key: 'drkDeposit',
    number: '80M+',
    text: 'DRK deposited'
  },
  {
    key: 'drkSwapped',
    number: '2B+',
    text: 'DRK Swapped'
  }
]

const useStyles = (props: any) => (makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: '#fff',
      padding: '25px 0 0',
      overflowX: 'hidden',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '@media(max-width:1190px)': {
        padding: '15px 0'
      }
    },
    rightElement: {
      flexBasis: 'unset',
      '@media(max-width:767px)': {
        gridTemplateColumns: 'auto',
        gridColumnGap: '25px',
        gridRowGap: '25px',
      }
    },
    leftElement: {
      background: '#fff',
      boxSizing: 'border-box',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '410px',
      marginRight: '110px',
      '@media(max-width:1190px)': {
        padding: '30px',
        maxWidth: '300px',
        marginRight: '20px',
        marginBottom: 0
      },
      '@media(max-width:767px)': {
        padding: '30px',
        maxWidth: '100%',
        marginRight: 0,
        marginBottom: '30px',
      }
    },
    title: {
      fontWeight: 550,
      fontSize: '28px',
      lineHeight: '36px',
      color: '#15181d',
      '@media(max-width:1190px)': {
        fontSize: '20px',
        lineHeight: '26px'
      },
      '@media(max-width:767px)': {
        fontSize: '20px',
        lineHeight: '28px'
      },
    },
    desc: {
      fontWeight: 400,
      fontSize: '15px',
      lineHeight: '24px',
      color: '#77818b',
      marginTop: '23px',
      marginBottom: '32px',
      '@media(max-width:1190px)': {
        fontSize: '13px',
        lineHeight: '22px',
        marginTop: '23px',
        marginBottom: '32px',
      },
      '@media(max-width:767px)': {
        fontSize: '13px',
        lineHeight: '24px',
        marginTop: '23px',
        marginBottom: '32px',
      },
    },
    rightElementImage: {
      width: '80%',
      '@media(max-width:767px)': {
        marginLeft: '10%'
      },
    },
    reportNumber: {
      color: '#556df6',
      fontSize: '25px',
    },
    reportText: {
      color: '#15181d',
      fontSize: '13px',
      lineHeight: '24px',
    },
    container: {
      display: 'flex',
      width: '1170px',
      '@media(max-width:1190px)': {
        padding: '15px 30px'
      },
      '@media(max-width:767px)': {
        padding: '15px',
        flexDirection: 'column',
        display: 'flex',
        width: '100%'
      }
    },
  }),
))()

const Reporting = (props: ReportingProps) => {
  const minWidth1000 = useMediaQuery('(min-width:1265px)')
  const classes = useStyles({ minWidth1000 })

  const leftElement = (<>
    <Typography className={classes.title} variant={'h4'}>What if you can earn while having fun?</Typography>
    <Typography className={classes.desc} variant={'h6'}>
      Beside the excitement that DrakenX brings, you will also have the opportunity to make a profit with your coins and tokens.
      Everything is fully decentralized and transparent!
    </Typography>
    <Grid item container xs={12}>
      {reports.map((rp: any) => (<Grid key={rp.key} item xs={4}>
      <Typography className={classes.reportNumber}>{rp.number}</Typography>
      <Typography className={classes.reportText}>{rp.text}</Typography>
      </Grid>))}
    </Grid>
  </>)

  // const rightElement = (<img alt='reporting-item' src={reportingRightImage} className={classes.rightElementImage}></img>)

  return (
    <section className={classes.root}>
      <Container maxWidth='lg' className={classes.container}>
        {minWidth1000 ? <Grid item container xs={12}>
          <Grid item xs={6} className={classes.leftElement}>
            {leftElement}
          </Grid>
          <Grid item xs={5} className={classes.rightElement}>
            {/* {rightElement} */}
          </Grid>
        </Grid>
          :
          <>
          <Grid item xs={12} className={classes.leftElement}>
            {leftElement}
          </Grid>
          <Grid item xs={12} className={classes.rightElement}>
            {/* {rightElement} */}
          </Grid>
        </>
        }
      </Container>
    </section>
  )
}

export default Reporting