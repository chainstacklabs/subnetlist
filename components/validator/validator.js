import React, { useState, useEffect, useMemo } from 'react'

import classes from './validator.module.css'
import { Typography, Paper, Link } from '@material-ui/core'
export default function Validator({ validator }) {
  return (
    <Paper elevation={1} key={validator.nodeID}>
      <div className={classes.validatorCard}>
        <Typography variant="h3" className={classes.name} noWrap>
          {validator.description}
        </Typography>
        <Typography>{validator.nodeID}</Typography>
        {validator.openToValidate && (
          <Link href={validator.contactDetails.email}>Contact</Link>
        )}
      </div>
    </Paper>
  )
}
