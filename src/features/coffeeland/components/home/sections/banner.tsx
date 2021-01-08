import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

interface BannerProps {

}

const useStyles = (props: any) => (makeStyles((theme: Theme) =>
  createStyles({
    banner: {
      backgroundImage: `url(https://phinxanh.com/wp-content/uploads/2020/01/cover_web-01.jpg)`,
      backgroundSize: 'cover',
      padding: '20px 0 0',
      overflowX: 'hidden',
      width: '100%',
      minHeight: '450px',
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
    }
  }),
))()

const Banner = (props: BannerProps) => {
  const classes = useStyles(props)
  return (
    <section className={classes.banner}>
    </section>
  )
}

export default Banner