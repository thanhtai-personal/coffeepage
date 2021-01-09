import React from 'react'
import { Container, Typography, Grid, useMediaQuery } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Color from 'root/color'
import Card from 'root/components/materialUIs/card'

const useStyles = (props: any) => (makeStyles((theme: Theme) =>
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
      }
    },
    title: {
      color: Color.coffee,
      textTransform: 'uppercase',
      marginTop: theme.spacing(2),
      fontWeight: 600,
      '&:hover': {
        textDecoration: `underline  ${Color.mainBgColor}`
      }
    },
    subTitle: {
      fontSize: '18px',
      lineHeight: '27px',
      textTransform: 'uppercase',
      color: Color.mainBgColor
    },
    decorateLogo: {
      width: '120px',
      borderBottom: `solid 2px ${Color.mainBgColor}`,
      position: 'relative',
      display: 'inline-block',
      verticalAlign: 'middle',
      marginTop: theme.spacing(1)
    },
    entertainmentCard: {
      marginRight: '20px'
    },
    gameCards: {
      display: 'flex',
      marginTop: theme.spacing(3),
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
    }
  }),
))()

const Reporting = (props: any) => {
  const minWidth1190 = useMediaQuery('(min-width:1190px)')
  const minWidth767 = useMediaQuery('(min-width:767px)')
  const classes = useStyles(props)
  const {
    text, cards
  } = props

  return (
    <section className={classes.root}>
      <Container maxWidth='lg'>
        <Typography align='center' className={classes.subTitle}>
          {text.subTitle}
        </Typography>
        <Typography align='center' variant={'h2'} className={classes.title}>
          {text.title}
        </Typography>
        <Grid item container spacing={2} xs={12} className={classes.gameCards}>
          {(cards || []).map((card: any, index: number) => (<Grid key={`${card.key}-${index}`} item xs={minWidth767 ? minWidth1190 ? 4 : 5 : 12}>
            <Card
              className={classes.entertainmentCard}
              key={`${card.key}-${index}`}
              mediaImage={card.mediaImage}
              content={card.content}
              actions={card.actions}
              disabled={card.disabled}
              isVideo={card.isVideo}
            />
          </Grid>))}
        </Grid>
        <Typography align='center'>
          <div className={classes.decorateLogo}></div>
        </Typography>
      </Container>
    </section>
  )
}

export default Reporting