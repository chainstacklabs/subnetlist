import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/header/header'

import styles from '../styles/Home.module.css'
import { withTheme } from '@material-ui/core/styles'
import path from 'path'
import { Typography, Link } from '@material-ui/core'
import Sidebar from '../components/sidebar'
import Navigation from '../components/navigation/navigation'

import classes from './index.module.css'

import projectsList from '../components/project/projects.json'

import Project from '../components/project'

function Validators({ changeTheme, theme }) {
  const addNetwork = () => {
    window.open(
      'https://github.com/chainstacklabs/subnet-tech#adding-a-subnet',
      '_blank'
    )
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Avalanche Projects with Subnets</title>
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
            <Typography variant="h2" paragraph className={classes.subTitle}>
              Projects using subnets
            </Typography>

            <div className={classes.textContainer}>
              <Typography>
                Here you can find a{' '}
                <strong>
                  list of projects that have launched their own Avalanche subnet
                </strong>{' '}
                or that are planning to do it in the near future. If you're
                working on a project that is not listed below and you want to
                add it,{' '}
                <Link
                  href="https://github.com/chainstacklabs/subnet-tech"
                  target="_blank"
                >
                  create a pull request in our repository
                </Link>
                . And if you want to{' '}
                <strong>connect to any of these subnets</strong>, you can do it
                from <Link href="/">the main page</Link>.
              </Typography>

              <Typography variant="body1">
                <ul className={classes.projectsList}>
                  {projectsList.map((project, idx) => {
                    return <Project project={project} key={idx} />
                  })}
                </ul>
              </Typography>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default withTheme(Validators)
