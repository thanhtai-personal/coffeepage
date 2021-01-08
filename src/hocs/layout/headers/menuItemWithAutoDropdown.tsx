import React, { useCallback, useState, useEffect } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = (props: any) => (makeStyles((theme: Theme) =>
  createStyles({
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
    }
  }),
))()

const LeftMenuItemWithAutoDropdown = (props: any) => {
  const { minWidth767, text, children } = props
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
    <li className={classes.leftMenuListItem}
      onMouseOver={mouseOverIcon}
      onMouseLeave={mouseLeaveIcon}
    >
      {minWidth767 && <span className={classes.leftMenuListItemText}>{text.label}</span>}
      {isOpenGameMenu && <div className={classes.gameMenuPoper}
        onMouseOver={mouseOverMenu}
        onMouseLeave={mouseLeaveMenu}
      >
        <div className={classes.gameMenuArrow}></div>
        <div className={classes.gameMenu}>
          <Typography className={classes.title}>
            {text.title}
          </Typography>
          {children}
        </div>
      </div>}
    </li>
  )
}

export default LeftMenuItemWithAutoDropdown