import React, { useCallback, useState, useEffect } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import icAgency from 'root/asserts/images/ic-agency.svg'
import icExchangeWallet from 'root/asserts/images/ic-exchange-wallet.svg'
import icPlayGame from 'root/asserts/images/ic-play-game.svg'
import icDrocketGame from 'root/asserts/images/ic-drocket-game.svg'
import icDtradeGame from 'root/asserts/images/ic-dtrade-game.svg'

const useStyles = (props: any) => (makeStyles((theme: Theme) =>
  createStyles({
    leftMenuWrap: {
      display: 'flex',
      alignItems: 'center',
      float: 'left',
    },
    leftMenu: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#15181d',
      '@media(max-width:767px)': {
        flexDirection: 'row',
      },
    },
    leftMenuList: {
      display: 'flex',
      flexDirection: 'row',
      '@media(max-width:767px)': {
        display: 'flex',
        width: '100%',
      },
    },
    leftMenuListItem: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '120px',
      cursor: 'pointer',
      padding: '20px',
      '@media(max-width:767px)': {
        width: '100%',
      },
      '&:hover': {
        borderBottom: '1px solid #556df6'
      }
    },
    leftMenuListItemText: {
      color: '#77818b',
      fontSize: '12px',
      fontWeight: 500,
      textTransform: 'uppercase',
      marginLeft: '4px',
    },
    abstractLink: {
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    gameMenuPoper: {
      minWidth: '58px',
      //left: '216px',
      top: '50px',
      paddingTop: '10px',
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      color: '#fff',
      fontSize: '14px',
      fontVariant: 'tabular-nums',
      lineHeight: '1.5715',
      listStyle: 'none',
      fontFeatureSettings: '"tnum","tnum"',
      position: 'absolute',
      display: 'block',
    },
    gameMenuArrow: {
      left: '50%',
      transform: 'translateX(-50%) rotate(45deg)',
      top: '6px',
      borderColor: '#556df6 transparent transparent #556df6',
      boxShadow: '-2px -2px 5px rgba(0,0,0,.06)',
      position: 'absolute',
      display: 'block',
      width: '8.48528137px',
      height: '8.48528137px',
      background: 'transparent',
      borderStyle: 'solid',
      borderWidth: '4.24264069px',
      boxSizing: 'border-box',
    },
    gameMenu: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#2d2f3e',
      borderRadius: '6px',
      color: '#fff',
      width: '220px',
      boxSizing: 'border-box',
    },
    title: {
      padding: '8px',
      color: '#999db4',
      fontSize: '10px',
      borderBottom: '1px solid #44494d',
    },
    gameItem: {
      padding: '8px',
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      '&:hover': {
        backgroundColor: '#15181D'
      }
    },
    cursorNotAllow: {
      cursor: 'not-allowed',
    },
    cursorPointer: {
      cursor: 'pointer',
    },
    borderBottom: {
      borderBottom: '1px solid #44494d',
    },
    gameMenuItemText: {
      color: '#fff',
      fontSize: '14px',
      boxSizing: 'border-box',
    },
    gameMenuItemSubText: {
      marginLeft: '4px',
      color: '#fff',
      fontSize: '12px',
      fontStyle: 'italic',
    }
  }),
))()

const LeftMenuTab = (props: any) => {
  const { minWidth767 } = props
  const classes = useStyles(props)
  const [isOpenGameMenu, setIsOpenGameMenu] = useState(false)
  const [mouseInIcon, setMouseInIcon] = useState(false)
  const [mouseInMenu, setMouseInMenu] = useState(false)

  const mouseOverIcon = useCallback(() => {
    setTimeout(() => {
      setMouseInIcon(true)
    }, 1500)
    setIsOpenGameMenu(true)
  }, [setIsOpenGameMenu, setMouseInIcon])

  const mouseLeaveIcon = useCallback(() => {
    setMouseInIcon(false)
  }, [setMouseInIcon])

  const mouseOverMenu = useCallback(() => {
    setMouseInMenu(true)
  }, [setMouseInMenu])

  const mouseLeaveMenu = useCallback(() => {
    setMouseInMenu(false)
  }, [setMouseInMenu])

  useEffect(() => {
    if (!mouseInMenu && !mouseInMenu) setIsOpenGameMenu(false)
  }, [mouseInIcon, mouseInMenu, setIsOpenGameMenu])

  return (
    <div className={classes.leftMenuWrap}>
      <div className={classes.leftMenu}>
        <ul className={classes.leftMenuList}>
          <li className={classes.leftMenuListItem}
            onMouseOver={mouseOverIcon}
            onMouseLeave={mouseLeaveIcon}
          >
            {/* eslint-disable-next-line */}
            <img alt='play-img-ic' src={icPlayGame}></img>
            {minWidth767 && <span className={classes.leftMenuListItemText}>Play</span>}
            {isOpenGameMenu && <div className={classes.gameMenuPoper}
              onMouseOver={mouseOverMenu}
              onMouseLeave={mouseLeaveMenu}
            >
              <div className={classes.gameMenuArrow}></div>
              <div className={classes.gameMenu}>
                <Typography className={classes.title}>
                  CHOOSE GAME
                </Typography>
                <div className={[classes.gameItem, classes.cursorNotAllow, classes.borderBottom].join(' ')}>
                  {/* eslint-disable-next-line */}
                  <img width={50} height={50} src={icDrocketGame}/>
                  <span className={classes.gameMenuItemText}>DRocket</span>
                  <span className={classes.gameMenuItemSubText}>(Comming soon)</span>
                </div>
                <div className={[classes.gameItem, classes.cursorPointer].join(' ')}>
                  {/* eslint-disable-next-line */}
                  <img width={50} height={50} src={icDtradeGame}/>
                  <Typography className={classes.gameMenuItemText}>Dtrade</Typography>
                </div>
              </div>
            </div>}
          </li>
          <li className={classes.leftMenuListItem}>
            <Link className={classes.abstractLink} to='/agency'>
              {/* eslint-disable-next-line */}
              <img alt='agency' src={icAgency}></img>
              {minWidth767 && <span className={classes.leftMenuListItemText}>AGENCY</span>}
            </Link>
          </li>
          <li className={classes.leftMenuListItem}>
            <Link className={classes.abstractLink} to='/exchange-wallet'>
              {/* eslint-disable-next-line */}
              <img alt='wallet-img' src={icExchangeWallet}></img>
              {minWidth767 && <span className={classes.leftMenuListItemText}>WALLET</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LeftMenuTab