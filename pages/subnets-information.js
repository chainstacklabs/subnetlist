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
        <title>Avalanche Subnets Information</title>
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
              Step-by-step tutorial
            </Typography>
            <div className={classes.textContainer}>
              <Typography variant="body1">
                Make sure to check the Subnet series articles in the Chainstack
                blog:
              </Typography>
              <Typography variant="body1">
                <ul>
                  <li>
                    <Link
                      target="_blank"
                      href="https://chainstack.com/avalanche-subnet-tutorial-what-is-the-subnet/"
                    >
                      What is a subnet
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href="https://chainstack.com/avalanche-subnet-tutorial-series-running-a-local-avalanche-node-on-fuji-testnet/"
                    >
                      Running a local Avalanche node on Fuji testnet
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href="https://chainstack.com/avalanche-subnet-tutorial-series-creating-subnet-then-create-a-blockchain-on-it/"
                    >
                      Creating a subnet, then create a blockchain on it
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href="https://chainstack.com/avalanche-subnet-tutorial-series-deploying-a-smart-contract/"
                    >
                      Deploying a smart contract to a subnet
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href="https://chainstack.com/avalanche-subnet-tutorial-series-indexing-subnet-with-the-graph/"
                    >
                      Indexing a subnet with The Graph
                    </Link>
                  </li>
                </ul>
              </Typography>
            </div>
            <Typography variant="h2" paragraph className={classes.subTitle}>
              Subnets information
            </Typography>
            <div className={classes.textContainer}>
              <Typography variant="body1">
                The ability to create{' '}
                <Link href="https://docs.avax.network/build/tutorials/platform/subnets/create-a-subnet/">
                  subnets and custom blockchain networks
                </Link>{' '}
                is one of the key features of Avalanche.
              </Typography>

              <Typography variant="body1">
                Custom networks are very flexible and customizables. From being
                a one of the keys to scalability, you can tune a network to your
                needs as a network creator. For example, you can make a network
                private and have the transactions not visible to the nodes on
                the primary network, or you make it meet different compliance
                requirements like{' '}
                <Link href="https://docs.avax.network/learn/platform-overview/">
                  {' '}
                  geographical bounds and KYC/AML checks.{' '}
                </Link>
              </Typography>

              <Typography variant="body1">
                The
                <Link href="https://docs.avax.network/build/tutorials/platform/subnets/">
                  {' '}
                  official documentation{' '}
                </Link>
                defines subnets as:
              </Typography>
              <Typography variant="body1">
                “...A<strong> subnet, or subnetwork, </strong>is a dynamic set
                of validators working together to achieve consensus on the state
                of a set of blockchains. Each blockchain is validated by exactly
                one subnet. A subnet can validate many blockchains. A node may
                be a member of many subnets.”
              </Typography>

              <Typography variant="body1">To extend on that:</Typography>
              <Typography variant="body1">
                <ul>
                  <li>
                    A subnet is not a blockchain, it is a set of validator
                    nodes, although the number can be zero.
                  </li>
                  <li>
                    When a subnet contains no validators, its state becomes not
                    validated and any blockchain on it stops functioning.
                  </li>
                  <li>One validator node can be a part of multiple subnets.</li>
                  <li>Subnets can be assigned to many blockchains.</li>
                  <li>One blockchain can only be validated by one subnet.</li>
                </ul>
              </Typography>

              <a
                href="/subnets-diagram-new.png"
                target="_blank"
                className={classes.diagram}
              >
                <img
                  src="/subnets-diagram-new.png"
                  className={classes.diagram}
                />
              </a>

              <Typography variant="h3" className={classes.subTitle}>
                About customized blockchain
              </Typography>
              <Typography variant="body1">
                Avalanche features 3 built-in blockchains: Exchange Chain
                (X-Chain), Platform Chain (P-Chain), and Contract Chain
                (C-Chain). All 3 blockchains are validated and secured by the
                Primary Network. The Primary Network is a special subnet, and
                all members of all custom subnets must also be a member of the
                Primary Network by staking at least 2,000 AVAX.
              </Typography>
              <Typography variant="body1">
                Every Avalanche blockchain is an instance of a Virtual Machine.
                For example, X-Chain is an instance of AVM, C-Chain is Subnet
                EVM's instance, P-Chain is an Avalanche's metadata blockchain
                with Snowman consensus protocol.
              </Typography>
              <Typography variant="body1">
                Avalanche enables you to create a <strong>subnet</strong> which
                validate blockchain with default, configured or custom Virtual
                Machine.
              </Typography>
              <Typography variant="body1">
                Virtual Machine can be fully customized to provide any custom
                business logic.
              </Typography>

              <Typography variant="body1">
                Developers can create their own blockchain by implementing
                <Link href="https://docs.avax.network/build/tutorials/platform/subnets/create-a-virtual-machine-vm">
                  {' '}
                  ChainVM{' '}
                </Link>
                interface for compatibility with AvalancheGo.
              </Typography>
              <Typography variant="body1">
                Blockchain can be “hidden” from other non-relevant nodes by
                configuring every node in the subnet.
              </Typography>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default withTheme(Validators)
