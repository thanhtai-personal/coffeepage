import React, { useCallback } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Color from 'root/color'
import { ElementIds } from 'root/constants'
import MenuItemWithAutoDropdown from './menuItemWithAutoDropdown'

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
      backgroundColor: Color.mainBgColor,
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
        borderBottom: `1px solid ${Color.borderColor}`
      }
    },
    leftMenuListItemText: {
      color: Color.coffee,
      fontSize: '12px',
      fontWeight: 500,
      textTransform: 'uppercase',
      marginLeft: '4px',
    },
    gameItem: {
      padding: '8px',
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      '&:hover': {
        backgroundColor: Color.coffee,
        color: Color.mainBgColor
      }
    },
    cursorNotAllow: {
      cursor: 'not-allowed',
    },
    cursorPointer: {
      cursor: 'pointer',
    },
    borderBottom: {
      borderBottom: `1px solid ${Color.borderColor}`,
    },
    gameMenuItemText: {
      fontSize: '14px',
      boxSizing: 'border-box',
      textTransform: 'uppercase'
    }
  }),
))()

const scrollToElement = (elementId: string) => {
  const elm = document.getElementById(elementId)
  if (!elm) return
  elm.scrollIntoView({
    behavior: 'smooth'
  });
}

const LeftMenuTab = (props: any) => {
  const { minWidth767 } = props
  const classes = useStyles(props)

  const handleClickMenuItem = useCallback((elementId) => () => scrollToElement(elementId), [])

  const handleClickContact = useCallback(handleClickMenuItem(ElementIds.contact), [handleClickMenuItem])

  const handleClickProduct = useCallback(handleClickMenuItem(ElementIds.products), [handleClickMenuItem])

  const handleClickService = useCallback(handleClickMenuItem(ElementIds.services), [handleClickMenuItem])

  return (
    <div className={classes.leftMenuWrap}>
      <div className={classes.leftMenu}>
        <ul className={classes.leftMenuList}>
          <MenuItemWithAutoDropdown minWidth767={minWidth767} text={{ label: 'Dịch vụ', title: 'Dịch vụ' }}>
            <div className={[classes.gameItem, classes.cursorPointer, classes.borderBottom].join(' ')}
              onClick={handleClickService}
            >
              <span className={classes.gameMenuItemText}>{'Cung cấp cà phê sỉ lẻ'}</span>
            </div>
            <div className={[classes.gameItem, classes.cursorPointer].join(' ')}
              onClick={handleClickService}
            >
              <Typography className={classes.gameMenuItemText}>{'Rang xay gia công'}</Typography>
            </div>
          </MenuItemWithAutoDropdown>
          <MenuItemWithAutoDropdown minWidth767={minWidth767} text={{ label: 'Sản phẩm', title: 'Sản phẩm' }}
            onClick={handleClickProduct}
          >
            <div className={[classes.gameItem, classes.cursorPointer, classes.borderBottom].join(' ')}>
              <span className={classes.gameMenuItemText}>{'Phin'}</span>
            </div>
            <div className={[classes.gameItem, classes.cursorPointer].join(' ')}
              onClick={handleClickProduct}
            >
              <Typography className={classes.gameMenuItemText}>{'Espresso'}</Typography>
            </div>
            <div className={[classes.gameItem, classes.cursorPointer].join(' ')}
              onClick={handleClickProduct}
            >
              <Typography className={classes.gameMenuItemText}>{'Brewing'}</Typography>
            </div>
          </MenuItemWithAutoDropdown>
          <li className={classes.leftMenuListItem} onClick={handleClickContact}>
              {minWidth767 && <span className={classes.leftMenuListItemText}>{'Liên hệ'}</span>}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LeftMenuTab