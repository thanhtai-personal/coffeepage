import React from 'react'
import { Typography, FormGroup } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button, { buttonType } from 'root/components/materialUIs/button'
import TextField from 'root/components/materialUIs/textField'
import mapImage from 'root/asserts/images/map.svg'
import inviteImage1 from 'root/asserts/images/ic-invite1.svg'
import inviteImage2 from 'root/asserts/images/ic-invite2.svg'
import inviteImage3 from 'root/asserts/images/ic-invite3.svg'

const useStyles = (props: any) => (makeStyles((theme: Theme) =>
  createStyles({
    dailyWrapper: {
      display: 'flex',
      backgroundColor: '#1e2126',
      justifyContent: 'space-between',
      flex: '1 1',
      overflowX: 'hidden',
      minHeight: 'calc(100vh - 71px)',
      height: 'auto',
      '@media(max-width:1190px min-width: 768px)': {
        height: 'auto',
      },
      '@media(max-width:767px)': {
        height: 'auto',
        flexDirection: 'column',
      }
    },
    dailyContent: {
      margin: '15px 25px 25px',
      flex: '1 1',
      '@media(max-width:1190px min-width: 768px)': {
        margin: '15px 25px 25px',
      },
      '@media(max-width:767px)': {
        margin: '15px',
      }
    },
    box1: {
      padding: '60px 85px',
      display: 'flex',
      justifyContent: 'space-between',
      background: `url(${mapImage}) no-repeat 50% #15181d`,
      borderRadius: '6px',
      '@media(max-width:1190px min-width: 768px)': {
        padding: '50px',
        flexDirection: 'column',
      },
      '@media(max-width:767px)': {
        padding: '20px',
        flexDirection: 'column',
      }
    },
    leftContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flex: '1 1',
      marginRight: '100px',
      '@media(max-width:1190px min-width: 768px)': {
        marginRight: 0,
        width: '60%',
        marginBottom: '30px',
      },
      '@media(max-width:767px)': {
        marginRight: 0,
        width: '100%',
        marginBottom: '30px',
      }
    },
    title: {
      fontWeight: 600,
      fontSize: '30px',
      lineHeight: '38px',
      color: '#556df6',
      marginBottom: '10px',
      textAlign: 'left',
      '@media(max-width:1190px min-width: 768px)': {
        fontSize: '26px',
        lineHeight: '30px',
      },
      '@media(max-width:767px)': {
        fontSize: '22px',
        lineHeight: '26px',
      }
    },
    subTitle: {
      fontWeight: 400,
      fontSize: '15px',
      lineHeight: '24px',
      color: '#bfcbd0',
      textAlign: 'left',
      '@media(max-width:1190px min-width: 768px)': {
        fontSize: '13px',
        lineHeight: '20px',
      }
    },
    btnBuyNow: {
      width: '180px',
      background: '#06f !important',
      height: '40px',
      fontWeight: 600,
      fontSize: '14px',
      color: '#fff',
      marginTop: '12px',
      marginBottom: '27px',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 10px',
      cursor: 'pointer',
    },
    description: {
      fontWeight: 400,
      color: '#77818b',
      fontSize: '12px',
      lineHeight: '20px',
      textAlign: 'left',
      '@media(max-width:1190px min-width: 768px)': {
        fontSize: '11px',
        lineHeight: '18px',
      }
    },
    rightBox: {
      background: '#15181d',
      border: '1px solid #556df6',
      borderRadius: '8px',
      width: 'calc(50% - 180px)',
      padding: '45px 50px',
      '@media(max-width:1190px min-width: 768px)': {
        width: 'calc(100% - 100px)',
        padding: '50px',
      },
      '@media(max-width:767px)': {
        width: '100%',
        padding: '20px',
      }
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '20px',
      width: '100%',
    },
    label: {
      fontWeight: 600,
      fontSize: '13px',
      lineHeight: '13px',
      color: '#bfcbd0',
      marginBottom: '10px',
    },
    warning: {
      fontWeight: 400,
      fontSize: '13px',
      color: '#b73321',
      marginTop: '8px',
      marginLeft: 0,
    },
    box2: {
      padding: '60px 85px',
      display: 'flex',
      background: '#15181d',
      borderRadius: '6px',
      marginTop: '15px',
      '@media(max-width:1190px min-width: 768px)': {
        padding: '50px',
        flexDirection: 'column',
      },
      '@media(max-width:767px)': {
        padding: '20px',
        flexDirection: 'column',
      }
    },
    inviteItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginRight: '85px',
      '@media(max-width:1190px min-width: 768px)': {
        padding: '50px',
        flexDirection: 'column',
      }
    },
    icon: {
      width: '55px',
      height: '72px',
      background: '#1e2228',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '@media(max-width:1190px min-width: 768px)': {
        width: '55px',
        height: '72px',
        background: '#1e2228',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      '@media(max-width:767px)': {
        width: '55px',
        height: '72px',
        background: '#1e2228',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }
    },
    inviteContent: {
        marginLeft: '25px',
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1',
      '@media(max-width:1190px min-width: 768px)': {
        marginLeft: '25px',
      }
    },
    inviteContentTitle: {
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '16px',
      color: '#bfcbd0',
      marginBottom: '5px',
      '@media(max-width:1190px min-width: 768px)': {
        fontSize: '16px',
        lineHeight: '16px',
      },
      '@media(max-width:767px)': {
        fontSize: '14px',
        lineHeight: '16px',
      }
    },
    inviteContentDescription: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '22px',
      color: '#77818b',
      '@media(max-width:1190px min-width: 768px)': {
        fontSize: '14px',
        lineHeight: '22px',
      },
      '@media(max-width:767px)': {
        fontSize: '12px',
        lineHeight: '18px',
      }
    }
  }),
))()

const Agency = (props: any) => {

  const classes = useStyles(props)

  return (
    <div className={classes.dailyWrapper}>
      <div className={classes.dailyContent}>
        <div className={classes.box1}>
          <aside className={classes.leftContent}>
            <span className={classes.title}>Become an IB & Earn Unlimited Income</span>
            <Typography className={classes.subTitle}>
              Enjoyed more trading benefits from DrakenX by becoming our Introducing Broker
            </Typography>
            <Button type={buttonType.Primary} className={classes.btnBuyNow}> Buy now (50000 DRX)</Button>
            <Typography variant={'body2'} className={classes.description}>
              Without purchasing an IB License, you will not earn any commission from people who have registered with your registration link and referral code.
          </Typography>
          </aside>
          <div className={classes.rightBox}>
            <FormGroup className={classes.formGroup}>
              <Typography className={classes.label}>Your referal link</Typography>
              <TextField
                placeHolder={'https://www.drakenx.io/registration?refCode=UQUA3MH06E0YQO'}
                buttonCopy={<Button type={buttonType.Primary}>Copy</Button>}
              />
            </FormGroup>
            <FormGroup className={classes.formGroup}>
              <Typography className={classes.label}>Your referal code</Typography>
              <TextField
                placeHolder={'UQUA3MH06E0YQO'}
                buttonCopy={<Button type={buttonType.Primary}>Copy</Button>}
              />
            </FormGroup>
          </div>
        </div>
        <div className={classes.box2}>
          <div className={classes.inviteItem}>
            <div className={classes.icon}>
              {/* eslintDisable-next-line */}
              <img alt='invite-image-1' src={inviteImage1}/>
            </div>
            <aside className={classes.inviteContent}>
              <Typography className={classes.inviteContentTitle}>
                Invite your friend
              </Typography>
              <Typography className={classes.inviteContentDescription}>
                Let's invite your friend to regiter a DrakenX's account by your referal link or code
              </Typography>
            </aside>
          </div>
          <div className={classes.inviteItem}>
            <div className={classes.icon}>
              {/* eslint-disable-next-line */}
              <img alt='invite-image-2' src={inviteImage2}/>
            </div>
            <aside className={classes.inviteContent}>
              <Typography className={classes.inviteContentTitle}>
                Complete registration
              </Typography>
              <Typography className={classes.inviteContentDescription}>
                Your friends accept your invitation and complete their's registration
              </Typography>
            </aside>
          </div>
          <div className={classes.inviteItem}>
            <div className={classes.icon}>
              {/* eslint-disable-next-line */}
              <img alt='invite-image-3' src={inviteImage3}/>
            </div>
            <aside className={classes.inviteContent}>
              <Typography className={classes.inviteContentTitle}>
                Receive commission
              </Typography>
              <Typography className={classes.inviteContentDescription}>
                You will receive more commission from your friends when they start to play
              </Typography>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agency