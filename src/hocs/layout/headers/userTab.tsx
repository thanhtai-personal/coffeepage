import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'


const useStyles = (props: any) => (makeStyles((theme: Theme) =>
  createStyles({
    user: {
      display: 'flex',
      alignItems: 'center',
      borderLeft: '1px solid #242a31',
      paddingLeft: '30px',
      marginLeft: '20px',
      minWidth: '229px',
      height: '70px',
      '@media(max-width:767px)': {
        borderLeft: 0,
        padding: '0 10px',
        marginLeft: 0,
        marginTop: '12px',
        borderRadius: '4px',
      },
      '&:hover': {
        borderBottom: '1px solid #556df6'
      }
    },
    userName: {
      fontWeight: 500,
      fontSize: '10px',
      color: '#77818b',
      textTransform: 'uppercase',
      display: 'flex',
      flexDirection: 'column',
    },
    useNameMini: {
      textTransform: 'none',
      marginTop: '3px',
      fontSize: '12px',
      color: '#bfcbd0',
      whiteSpace: 'nowrap',
      width: '100px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    avatar: {
      cursor: 'pointer',
      padding: '10px',
    },
    avatarArea1: {
      display: 'inlineBlock',
      verticalAlign: 'middle',
      width: '35px',
      height: '35px',
      borderRadius: '100%',
      fontFamily: 'Helvetica, Arial, sans-serif',
    },
    avatarArea2: {
      width: '35px',
      height: '35px',
      lineHeight: 'initial',
      textAlign: 'center',
      color: 'rgb(255, 255, 255)',
      borderRadius: '100%',
      background: 'rgb(255, 64, 128)',
    },
    avatarArea3: {
      display: 'table',
      tableLayout: 'fixed',
      width: '100%',
      height: '100%',
      fontSize: '11.6667px',
    },
    avatarText: {
      display: 'table-cell',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',
    },
  }),
))()

const UserTab = (props: any) => {

  const classes = useStyles(props)
  return (
    <div className={classes.user}>
      <div className={classes.userName}>Username<span className={classes.useNameMini}>taitran</span></div>
      <div className={classes.avatar}>
        <div className={classes.avatarArea1}>
          <div className={classes.avatarArea2} title='taitran'>
            <div className={classes.avatarArea3}>
              <div className={classes.avatarText}>
                T
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserTab