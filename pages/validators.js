import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/header'

import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import {
  withTheme,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles'
import path from 'path'
import { Typography } from '@material-ui/core'
import Sidebar from '../components/sidebar'
import Validatorsad from '../components/validatorsad'

import classes from './index.module.css'
import Validator from '../components/validator'

import validatorsList from '../components/validator/validators.json'
import Navigation from '../components/navigation/navigation'

function Validators({ changeTheme, theme }) {
  const [hideAvaxsubnet, setHideAvaxsubnet] = useState('1')

  const addNetwork = () => {
    window.open(
      'https://github.com/akegaviar/subnet-tech#adding-a-subnet',
      '_blank'
    )
  }
  const closeAvaxsubnet = (perma) => {
    setHideAvaxsubnet('1')
    localStorage.setItem('chainlist.org-hideAvaxsubnet', perma ? '1' : '0')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Avalanche Validators list</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          property="og:description"
          content="subnet.tech is an aggregator of Avalanche subnets, projects, validators, and educational resources around Avalanche subnets."
        />
        <meta property="og:image" content="/og-image-new.jpeg" />

        <meta
          name="twitter:description"
          content="subnet.tech is an aggregator of Avalanche subnets, projects, validators, and educational resources around Avalanche subnets."
        />
        <meta name="twitter:image" content="/og-image-new.jpeg" />
      </Head>

      <main className={styles.main}>
        <div
          className={
            theme.palette.type === 'dark'
              ? classes.containerDark
              : classes.container
          }
        >
          <Sidebar />
          <div
            className={
              theme.palette.type === 'dark'
                ? classes.listContainerDark
                : classes.listContainer
            }
          >
            <div
              className={
                theme.palette.type === 'dark'
                  ? classes.headerContainerDark
                  : classes.headerContainer
              }
            >
              <Navigation />
              <Header changeTheme={changeTheme} />
            </div>

            <div className={classes.textContainer}>
              <Typography variant="h2" paragraph>
                List of validators
              </Typography>

              <Typography paragraph>
                Here you'll find information about the validators taking care of
                all different subnets and how to contact them to secure your own
                subnet.
              </Typography>
            </div>
            <div className={classes.validatorsContainer}>
              <Validatorsad />
              {validatorsList &&
                validatorsList.map((val, idx) => {
                  return <Validator validator={val} key={idx} />
                })}{' '}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default withTheme(Validators)
