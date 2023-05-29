import React, { useState, useEffect, useMemo } from 'react'

import classes from './validatorsad.module.css'
import { Typography, Paper, Button } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

export default function Validator({}) {
  const navigateToAvaxsubnet = () => {
    window.open(
      'https://chainstack.com/permissioned-chains-avalanche-subnets/',
      '_blank'
    )
  }
  return (
    <Paper elevation={1} className={classes.validatorAdCard}>
      <div className={classes.topInfo}>
        <img
          src="/subnet-tech/chainstack-subnet.png"
          width={64}
          height={64}
          className={classes.avatar}
        />
        <div className={classes.textContainer}>
          <Typography variant="h3">
            Run your validators with Chainstack.
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
        </div>
      </div>
    </Paper>
  )
}
