import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Card, CardActions, CardContent, Typography } from '@material-ui/core'
import Button, { buttonType } from './button'

const useStyles = (props: any) => (makeStyles((theme: Theme) => createStyles({
  root: {
    marginRight: '20px',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '12px',
    border: '.7px solid #c0c9d4',
    height: '100%',
    '@media(max-width:1190px and min-width:768px)': {
      padding: 0,
      justifyContent: 'end !important'
    },
    '@media(max-width:767px)': {
      marginRight: 0,
      marginBottom: '10px',
      width: '100%'
    }
  },
  media: {
    width: 'calc(100% - 20px)',
    padding: '10px',
    fontSize: '100%',
    verticalAlign: 'baseline',
    borderRadius: '2%'
  },
  actionButton: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 15px',
    width: 'auto',
    marginBottom: '4px',
    bottom: '0',
  },
  titleText: {
    fontWeight: 500,
    fontSize: '16px',
    color: '#15181d',
    padding: '10px 20px',
  },
  contentText: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '22px',
    color: '#77818b',
    padding: '0 20px 20px',
    height: '100px',
  },
  cardContent: {
    padding: 0
  },
  actionButtonDisabled: {
    color: '#fff !important',
    opacity: 0.7,
    backgroundColor: '#bfcbd0 !important',
    cursor: 'not-allowed !important',
    pointerEvents: 'unset',
    '&:hover': {
      boxShadow: 'none !important'
    }
  },
  cardActions: {
    padding: '10px 20px'
  }
}),
))()

const MaterialUICard = (props: any) => {
  const classes = useStyles(props)
  const { mediaImage, className, content: { title, description }, actions: { buttonText, ButtonIcon, disabled } } = props
  return (
    <Card className={[classes.root, className].join(' ')}>
      <img
        className={classes.media}
        src={mediaImage}
      />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.titleText}>{title}</Typography>
        <Typography className={classes.contentText}>{description}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button type={buttonType.Primary} className={[classes.actionButton, disabled && classes.actionButtonDisabled].join(' ')} disabled={disabled}>
          <ButtonIcon /> {buttonText}
        </Button>
      </CardActions>
    </Card>
  )
}

export default MaterialUICard