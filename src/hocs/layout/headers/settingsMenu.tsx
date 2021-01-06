import React, { useState, useCallback } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  Typography, IconButton, Grid
  , FormControl, ListItemText
} from '@material-ui/core'
import {
  Settings as SettingsIcon
  , Language as LanguageIcon
} from '@material-ui/icons'
import SelectionMenu from 'root/components/materialUIs/menuList'
import enFlagImage from 'root/asserts/images/en-US.svg'
import logodrxnew from 'root/asserts/images/logodrxnew.png'
import Button, { buttonType } from 'root/components/materialUIs/button'

interface ISettingMenu {
  minWidth1190: boolean,
  isAuthen: boolean
}

const useStyles = (props: ISettingMenu) => (makeStyles((theme: Theme) =>
  createStyles({
    settingsIcon: {
      borderLeft: '1px solid #242a31',
      borderRadius: 0,
      cursor: 'pointer',
      padding: '20px',
      '@media(max-width:767px)': {
        marginLeft: 0
      },
      '&:hover': {
        borderBottom: '1px solid #556df6'
      }
    },
    menuLanguages: {
      zIndex: 2,
      cursor: 'auto',
      minWidth: '300px',
      flexDirection: 'column',
      position: 'absolute',
      right: 0,
      top: '60px',
      padding: '15px',
      background: '#1e2024',
      boxShadow: '0 0 10px 0 rgba(0,0,0,.6)',
      borderRadius: '4px',
      color: '#77818b',
      fontSize: '13px',
      fontWeight: 500,
    },
    settingItems: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: '13px',
      paddingBottom: '13px',
    },
    languageMenuOption: {
      paddingLeft: '2px',
      display: 'flex',
      alignItems: 'center',
    },
    actions: {
      position: 'absolute',
      right: 0,
      paddingRight: '15px',
      display: 'flex',
      justifyContent: 'left',
    },
    languageSelection: {
      position: 'relative',
      backgroundColor: '#556df6',
      borderRadius: '4px!important',
      transition: 'all .3s cubic-bezier(.645,.045,.355,1) 0s',
      padding: '0 11px',
      color: '#fff',
      alignItems: 'center',
      boxSizing: 'border-box',
      margin: 0,
      fontSize: '14px',
      fontVariant: 'tabular-nums',
      lineHeight: '1.5715',
      listStyle: 'none',
      fontFeatureSettings: `'tnum','tnum'`,
      display: 'inline-block',
      cursor: 'pointer',
      width: '140px',
      maxHeight: '40px'
    },
    selectText: {
      color: '#fff',
      alignItems: 'center',
      fontSize: '12px',
      fontWeight: 300
    },
    languageLabel: {
      fontSize: '100%'
    },
    languageIcon: {
      color: 'rgb(119, 129, 139)',
      position: 'relative',
      top: '5px',
    },
    selectIcon: {
      width: '30px',
      height: '20px',
      marginRight: '4px',
      '&:after': {
        boxSizing: 'border-box'
      },
      '&:before': {
        boxSizing: 'border-box'
      }
    },
    divider: {
      height: '1px',
      background: '#292c31',
      width: '98%',
      borderBottom: '#44494d',
      padding: 0,
      marginTop: '10px',
      marginBottom: '10px',
    },
    buttonSignout: {
      width: '100%'
    },
  }),
))()

const SettingMenu = (props: ISettingMenu) => {

  const { isAuthen, minWidth1190 } = props
  const classes = useStyles(props)

  const [isOpenLanguage, setIsOpenLanguage] = useState<boolean>(false)

  const handleSettingsMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setIsOpenLanguage(!isOpenLanguage);
  }, [isOpenLanguage])

  return (
    <>
      <IconButton className={classes.settingsIcon}
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleSettingsMenu}
        color='inherit'
      ><SettingsIcon />
      </IconButton>
      <Grid className={classes.menuLanguages} style={{ display: isOpenLanguage ? 'flex' : 'none' }}>
        {isAuthen && !minWidth1190 && <div className={classes.settingItems}>
          <Typography>TaiTran</Typography>
          <FormControl className={classes.actions}>
            {/* eslint-disable-next-line */}
            <Typography><img src={logodrxnew} height='20' /></Typography>
            <Typography style={{ color: '#fb9701' }}>0.00</Typography>
          </FormControl>
        </div>}
        {isAuthen && <div className={classes.settingItems}>
          <div>
            <svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='user' className='svg-inline--fa fa-user fa-w-14 fa-lg ' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' style={{ color: 'rgb(119, 129, 139)' }}><path fill='currentColor' d='M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z'></path></svg>
              Profile
            </div>
          <FormControl className={classes.actions}>
            <svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='edit' className='svg-inline--fa fa-edit fa-w-18 fa-lg ' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' style={{ color: 'rgb(119, 129, 139)', marginRight: '23px', cursor: 'pointer' }}><path fill='currentColor' d='M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z'></path></svg>
          </FormControl>
        </div>}
        <div className={classes.settingItems}>
          <Typography className={classes.languageLabel} align={'left'}><LanguageIcon className={classes.languageIcon} />Languages</Typography>
          <FormControl className={classes.actions}>
            <SelectionMenu defaultValue={'english'} className={classes.languageSelection} onClickItem={() => { }} items={[{
              key: 'english', label: (
                <div className={classes.languageMenuOption}>
                  <img alt='en-us-img' src={enFlagImage} className={classes.selectIcon} />
                  <ListItemText className={classes.selectText} primary='English' />
                </div>
              )
            }]} />
          </FormControl>
        </div>
        {isAuthen && <div className={classes.divider}></div>}
        {isAuthen && <div className={classes.settingItems}>
          <Button type={buttonType.Danger} className={classes.buttonSignout}>
            <svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='sign-out-alt' className='svg-inline--fa fa-sign-out-alt fa-w-16 fa-lg ' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' style={{ color: '#fff' }}><path fill='currentColor' d='M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z'></path></svg>
                Sign Out
          </Button>
        </div>}
      </Grid>
    </>
  )
}

export default SettingMenu