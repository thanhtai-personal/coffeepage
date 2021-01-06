import React, { useState, useCallback } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import eyeIcon from 'root/asserts/images/eyeIcon.svg'
import eyeOpenIcon from 'root/asserts/images/eyeIconOpen.svg'


const useStyles = (props: any) => (makeStyles((theme: Theme) => createStyles({
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
    width: '100%',
  },
  formInput: {
    position: 'relative',
    margin: '0',
    width: 'auto',
    background: '#1e2228',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 8px 8px 15px',
  },
  inputArea: {
    padding: 0,
    fontWeight: 400,
    fontSize: '13px',
    color: '#bfcbd0',
    background: 'transparent',
    border: 0,
    boxShadow: 'none',
    outline: 0,
    height: '32px',
    width: '100%'
  },
  warning: {
    fontWeight: 400,
    fontSize: '13px',
    color: '#b73321',
    marginTop: '8px',
    marginLeft: 0,
  },
  label: {
    fontWeight: 600,
    fontSize: '13px',
    lineHeight: '13px',
    color: '#bfcbd0',
    marginBottom: '10px',
  },
  eyeIcon: {
    color: 'rgb(119, 129, 139)',
    cursor: 'pointer',
    '&..svg-inline--fa.fa-lg': {
      verticalAlign: '-.44em'
    },
    width: '24px'
  }
}),
))()

const AntTextField = (props: any) => {
  const classes = useStyles(props)
  const { label, name, className, value, type, onChange, errorObj = {}, buttonCopy, ...nestedProps } = props
  const [isShowPassword, setIsShowPassword] = useState(false)
  const handleEyeClick = useCallback(() => {
    setIsShowPassword(!isShowPassword)
  }, [setIsShowPassword, isShowPassword])
  const handleChange = useCallback(() => {
    onChange && typeof onChange === 'function' && onChange()
  }, [onChange])
  return (
    <div className={[classes.formGroup, className].join(' ')}>
      <label className={classes.label}>{label}</label>
      <div className={classes.formInput}>
        <input {...nestedProps} className={classes.inputArea} type={!isShowPassword ? type : ''} name={name} value={value} onChange={handleChange} />
        {type=== 'password' && <img onClick={handleEyeClick}
          className={classes.eyeIcon}
          alt='eye-icon'
          src={isShowPassword ? eyeOpenIcon : eyeIcon}
        />}
        {buttonCopy && buttonCopy}
      </div>
      <div className={classes.warning}>
        {errorObj.message}
      </div>
    </div>
  )
}

export default AntTextField