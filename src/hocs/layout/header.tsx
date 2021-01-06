import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  AppBar, Toolbar, Typography, useMediaQuery
} from '@material-ui/core'
import UserTab from './headers/userTab'
import AccountTab from './headers/accountTab'
import LeftMenuTab from './headers/leftMenu'
import SettingMenu from './headers/settingsMenu'
import AuthButtonGroup from './headers/authButtonGroup'

import drakenxImage from 'root/asserts/images/drakenx.svg'
import drakenxImageNotext from 'root/asserts/images/logo_notext.svg'

interface HeaderProps {
  isFixed: boolean
}

const useStyles = (props: HeaderProps) => (makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    toolBar: {
      height: '70px',
      background: '#15181d',
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '1px solid #2d3339',
      padding: 0,
    },
    title: {
      cursor: 'pointer',
      padding: '0 0 0 25px',
      justifyContent: 'center',
      alignItems: 'center',
      '@media(max-width:767px)': {
        paddingLeft: '15px'
      }
    },
    rightMenu: {
      display: 'flex',
      '@media(max-width:767px)': {
        position: 'relative'
      }
    }
  }),
))()

const isAuthen = true

const Header = (props: HeaderProps) => {
  const minWidth767 = useMediaQuery('(min-width:767px)')
  const minWidth1190 = useMediaQuery('(min-width:1190px)')
  const classes = useStyles(props)
  const { isFixed } = props

  return (
    <AppBar position={isFixed ? 'fixed' : 'static'} className={classes.root}>
      <Toolbar className={classes.toolBar}>
        <Typography className={classes.title}>
          {// eslint-disable-next-line
            minWidth767 ? <img alt='drakenx-image' src={drakenxImage}></img>
              // eslint-disable-next-line
              : <img alt='drakenx-image-no-text' src={drakenxImageNotext} height='45px'></img>}
        </Typography>
        {isAuthen && <LeftMenuTab minWidth767={minWidth767} />}
        <div className={classes.rightMenu}>
          {!isAuthen && <AuthButtonGroup />}
          {isAuthen && minWidth1190 && <AccountTab />}
          {isAuthen && minWidth1190 && <UserTab />}
          <SettingMenu isAuthen={isAuthen} minWidth1190={minWidth1190}/>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header