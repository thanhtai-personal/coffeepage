import React, { useCallback } from 'react'
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@material-ui/icons'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

interface ISelectionMenuProps {
  onClickItem: Function,
  items: Array<any>,
  className: string,
  defaultValue: string
}

const useStyles = (props: any) => (makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      color: '#fff',
      backgroundColor: '#556df6',
      borderRadius: '4px'
    },
    paper: {
      marginRight: theme.spacing(2),
    },
    optionsList: {
      backgroundColor: '#556df6',
      borderRadius: '0 0 7px 7px',
      paddingTop: 0,
      paddingBottom: 0
    },
    selectionButton: {
      textTransform: 'none',
      width: '100%',
      border: '1px solid #556df6',
      borderRadius: '4px',
      transition: 'all .3s cubic-bezier(.645,.045,.355,1) 0s',
      color: '#fff',
      alignItems: 'center',
      paddingLeft: '3px',
      paddingRight: '3px',
      opacity: props?.open ? 0.5 : 1,
      '&:hover': {
        boxShadow: `0 0 10px 0 #556df6`,
        backgroundColor: '#556df6',
        color: '#fff',
      }
    },
    menuOptionsPanel: {
      borderRadius: '4px',
      background: 'transparent'
    }
  }),
))()

export default function SelectionMenu(props: ISelectionMenuProps) {
  const [open, setOpen] = React.useState(false)

  const classes = useStyles({ open })

  const { onClickItem, items, defaultValue } = props

  const anchorRef = React.useRef<HTMLButtonElement>(null)

  const handleToggle = useCallback(() => {
    setOpen((prevOpen) => !prevOpen)
  }, [setOpen])

  const handleClose = useCallback((event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }
    setOpen(false)
  }, [setOpen])

  const handleClickMenuItem = useCallback((e: React.MouseEvent<EventTarget>) => {
    onClickItem(e)
    setOpen(false)
  }, [setOpen, onClickItem])

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <div className={classes.root}>
      <Button
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup='true'
        onClick={handleToggle}
        className={classes.selectionButton}
      >
        {items.find((it) => (it.key === defaultValue))?.label}
        {open ?  <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Button>
      <Popper open={open} className={classes.menuOptionsPanel} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom', background: 'transparent' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} className={classes.optionsList} id='menu-list-grow' onKeyDown={handleListKeyDown}>
                  {items.map((item: any, index: number) => (<MenuItem key={`${item?.key}-${index}`} onClick={handleClickMenuItem}>{item?.label}</MenuItem>))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  )
}