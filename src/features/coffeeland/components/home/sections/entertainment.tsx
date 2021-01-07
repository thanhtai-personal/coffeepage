import React from 'react'
import {
  Container, Grid, Typography, useMediaQuery
} from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { PlayArrow as PlayArrowIcon } from '@material-ui/icons'
// import dRocketImage from 'root/asserts/images/icGame1.svg'
// import dRKatsImage from 'root/asserts/images/icGame2.svg'
// import dTradeImage from 'root/asserts/images/icGame3.svg'
import Card from 'root/components/materialUIs/card'
interface EntertainmentProps {

}

const cards = [
  {
    key: 'DTrade',
    // mediaImage: dTradeImage,
    content: {
      title: 'DTrade',
      description: `
      Place your Long and Short positions which are automatically closed after 30 seconds!
      A fast-paced and fun trading experience!`
    },
    actions: {
      buttonText: 'Play',
      ButtonIcon: PlayArrowIcon,
      disabled: false
    }
  },
  {
    key: 'DRocket',
    // mediaImage: dRocketImage,
    content: {
      title: 'DRocket',
      description: `How high can your rocket reach? Try and earn more DRX now!`
    },
    actions: {
      buttonText: 'Coming Soon',
      ButtonIcon: PlayArrowIcon,
      disabled: true
    }
  },
  {
    key: 'DRKats',
    // mediaImage: dRKatsImage,
    content: {
      title: 'DRKats',
      description: `Gain insight into the market environment in seconds. Make better decisions and realise gains in minutes.`
    },
    actions: {
      buttonText: 'Coming Soon',
      ButtonIcon: PlayArrowIcon,
      disabled: true
    }
  }
]

const useStyles = (props: EntertainmentProps) => (makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: '#fff',
      padding: '50px 0 75px'
    },
    container: {
      flexDirection: 'column',
      lineHeight: '26px',
      display: 'flex',
      width: '1170px',
      '@media(max-width:1190px)': {
        padding: '15px 30px',
        width: '100%'
      },
      '@media(max-width:767px)': {
        padding: '15px'
      }
    },
    title: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '50px',
      '@media(max-width:1190px)': {
        marginBottom: '30px'
      },
      '@media(max-width:767px)': {
        alignItems: 'center',
      }
    },
    titleText: {
      fontWeight: 600,
      fontSize: '28px',
      lineHeight: '28px',
      color: '#15181d',
      marginBottom: '10px',
      '@media(max-width:1190px)': {
        fontSize: '20px',
      }
    },
    subTitleText: {
      fontWeight: 400,
      fontSize: '15px',
      lineHeight: '15px',
      color: '#696d85',
      '@media(max-width:1190px)': {
        fontSize: '13px',
        lineHeight: '18px',
        width: 'auto'
      },
      '@media(max-width:767px)': {
        textAlign: 'center'
      }
    },
    gameCards: {
      display: 'flex',
      '@media(max-width:1190px)': {
        width: '100%',
        flexWrap: 'wrap',
        gridTemplateColumns: 'auto auto',
        gridColumnGap: '15px',
        gridRowGap: '15px',
      },
      '@media(max-width:767px)': {
        margin: '0',
        width: '100%',
        gridTemplateColumns: 'auto',
        gridColumnGap: '0',
        gridRowGap: '15px',
      }
    },
    entertainmentCard: {
      marginRight: '20px'
    }
  })
))()

const Entertainment = (props: EntertainmentProps) => {
  const minWidth1190 = useMediaQuery('(min-width:1190px)')
  const minWidth767 = useMediaQuery('(min-width:767px)')
  const classes = useStyles(props)

  return (
    <section className={classes.root}>
      <Container maxWidth='lg' className={classes.container}>
        <aside className={classes.title}>
          <Typography variant={'h4'} className={classes.titleText}>Entertainment Utopia</Typography>
          <Typography variant={'h6'} className={classes.subTitleText}>
            Built on DRK Chain with absolute decentralization and transparency
          </Typography>
        </aside>
        <Grid item container xs={12} className={classes.gameCards}>
          {cards.map((card: any, index: number) => (<Grid key={`${card.key}-${index}`} item xs={minWidth767 ? minWidth1190 ? 4 : 5: 12}>
            <Card 
              className={classes.entertainmentCard}
              key={`${card.key}-${index}`}
              mediaImage={card.mediaImage}
              content={card.content}
              actions={card.actions}
              disabled={card.disabled}
            />
          </Grid>))}
        </Grid>
      </Container>
    </section>
  )
}

export default Entertainment