import React, { useState } from 'react'
import {
  Typography,
  Paper,
  Grid,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
} from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import CloseIcon from '@material-ui/icons/Close'

import classes from './avaxsubnet.module.css'

export default function Avaxsubnet({ closeAvaxsubnet }) {
  const [checked, setChecked] = useState(false)

  const navigateToAvaxsubnet = () => {
    window.open('https://chainstack.com/permissioned-chains-avalanche-subnets/', '_blank')
  }

  const handleChange = () => {
    setChecked(!checked)
  }

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      secondary: {
        main: '#fff',
      },
    },
    typography: {
      fontFamily: [
        'Inter',
        'Arial',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      body1: {
        fontSize: '12px',
      },
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: '32px',
          padding: '9px 16px',
        },
        containedPrimary: {
          backgroundColor: '#fff',
          color: '#000',
        },
      },
      MuiFormControlLabel: {
        root: {
          color: '#fff',
        },
      },
    },
  })

  return (
    <Paper elevation={1} className={classes.chainContainer} key={'avaxsubnet'}>
      <ThemeProvider theme={theme}>
        <div className={classes.topInfo}>
          <img
            src="/chainstack-subnet.png"
            width={126}
            height={126}
            className={classes.avatar}
          />
          <Typography
            variant="subtitle1"
            className={classes.descriptionText}
            align="center"
            target="_blank"
          >
            Run your own Avalanche subnet with Chainstack.
          </Typography>

          <Button
            className={classes.tryButton}
            variant="contained"
            disableElevation
            onClick={navigateToAvaxsubnet}
            color="secondary"
            endIcon={<ArrowForwardIcon />}
          >
            <Typography className={classes.buttonLabel}>
              Try out <b>chainstack.com</b>
            </Typography>
          </Button>

          {/* <Link href="" align="center" className={classes.articleText}>
            Create Permissioned chains with Chainstack and Covalent
          </Link> */}
        </div>
        <div className={classes.bottomActions}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChange}
                name="checked"
              />
            }
            label="Don't show again"
          />
          <Button
            size="small"
            onClick={() => {
              closeAvaxsubnet(checked)
            }}
            endIcon={<CloseIcon />}
          >
            <Typography className={classes.buttonLabel}>Close</Typography>
          </Button>
        </div>
      </ThemeProvider>
    </Paper>
  )
}
