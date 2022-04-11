import React, { useState, useEffect, useMemo } from 'react'

import classes from './validator.module.css'
import { Typography, Paper, Link } from '@material-ui/core'

import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import ReceiptIcon from '@material-ui/icons/Receipt'

export default function Validator({ validator }) {
  return (
    <Paper elevation={1} key={validator.nodeID}>
      <div className={classes.validatorCard}>
        <Typography variant="h3" className={classes.name}>
          {validator.nodeID}
        </Typography>
        <div className={classes.validatorInfoContainer}>
          <div className={classes.rowInfo}>
            <MonetizationOnIcon color="primary" />
            <Typography>
              {validator.totalStake} {'AVAX total stake'}
            </Typography>
          </div>
          <div className={classes.rowInfo}>
            <ReceiptIcon color="primary" />
            <Typography align-content="center">
              {validator.feePercentage}
              {'% validator fee'}
            </Typography>
          </div>
          {validator.openToValidate && (
            <Link href={validator.contactDetails.email}>Contact</Link>
          )}
        </div>
      </div>
    </Paper>
  )
}
