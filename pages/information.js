import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/header";

import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import {
  withTheme,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import path from "path";
import {
  Grid,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Paper,
  Link,
  List,
  ListItem,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import classes from "./index.module.css";

function Validators({ changeTheme, theme }) {
  const addNetwork = () => {
    window.open(
      "https://github.com/akegaviar/subnet-tech#adding-a-subnet",
      "_blank"
    );
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Avalanche subnets list</title>
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
            theme.palette.type === "dark"
              ? classes.containerDark
              : classes.container
          }
        >
          <div className={classes.copyContainer}>
            <div className={classes.copyCentered}>
              <Typography variant="h1" className={classes.chainListSpacing}>
                <span className={classes.helpingUnderline}>SubnetTech</span>
              </Typography>
              <Typography variant="h2" className={classes.helpingParagraph}>
                Connect to Avalanche subnets
              </Typography>
              <Typography className={classes.subTitle}>
                SubnetTech is an aggregator of Avalanche subnets and educational
                resources around Avalanche subnets.
              </Typography>
              <nav className={classes.navContainer}>
                <Link href="/">Subnets</Link>
                <Link href="/validators">Validators</Link>
              </nav>
              <Button
                size="large"
                color="primary"
                variant="contained"
                className={classes.addNetworkButton}
                onClick={addNetwork}
                endIcon={<AddIcon />}
              >
                <Typography className={classes.buttonLabel}>
                  Add your subnet
                </Typography>
              </Button>
              <div className={classes.socials}>
                <a
                  className={`${classes.socialButton}`}
                  href="https://github.com/akegaviar/subnet-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg version="1.1" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill={"#E35335"}
                      d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                    />
                  </svg>
                  <Typography variant="body1" className={classes.sourceCode}>
                    View source
                  </Typography>
                </a>
                <Typography variant="subtitle1" className={classes.version}>
                  Version 1.0.8
                </Typography>
              </div>
            </div>
          </div>
          <div
            className={
              theme.palette.type === "dark"
                ? classes.listContainerDark
                : classes.listContainer
            }
          >
            <div
              className={
                theme.palette.type === "dark"
                  ? classes.headerContainerDark
                  : classes.headerContainer
              }
            >
              <Header changeTheme={changeTheme} />
            </div>
            <Typography variant="h2" className={classes.subTitle}>
              Subnets information
            </Typography>

            <div className={classes.textContainer}>
              <Typography>
                Compare with Ethereum, Avalanche, the 4th largest blockchains in
                April 2022, is significantly improved in scalability and
                throughput. Scalability wise, subnet is the key feature making
                Avalanche stands out from its peers.
              </Typography>

              <Typography>
                Subnet is a feature that allows Avalanche users to create and
                run their own blockchain. A
                <Link href="https://docs.avax.network/build/tutorials/platform/subnets/create-a-subnet/">
                  {" "}
                  subnet{" "}
                </Link>
                blockchain is flexible. It can be set to private, private
                transactions are separated from the primary network, which means
                it is not visible to other nodes outside subnet. Subnet chains
                can also be tuned to meet different compliance requirements like
                <Link href="https://docs.avax.network/learn/platform-overview/">
                  {" "}
                  geographical bounds and KYC/AML checks.
                </Link>
              </Typography>

              <Typography>
                The
                <Link href="https://docs.avax.network/build/tutorials/platform/subnets/">
                  {" "}
                  official documentation{" "}
                </Link>
                states that: “...A<strong> subnet, or subnetwork, </strong>is a
                dynamic set of validators working together to achieve consensus
                on the state of a set of blockchains. Each blockchain is
                validated by exactly one subnet. A subnet can validate many
                blockchains. A node may be a member of many subnets....”
              </Typography>

              <Typography>
                To extend on that:
                <List component="a" href="#simple-list">
                  <ListItem>
                    Subnet is not a blockchain, subnet is a set validator node,
                    this number can be 0
                  </ListItem>
                  <ListItem>
                    When a subnet contains no validator, its state becomes not
                    validated, any blockchain on it stops functioning
                  </ListItem>
                  <ListItem>One node can be part of multiple subnets</ListItem>
                  <ListItem>
                    Subnets can be assigned to many blockchains
                  </ListItem>
                  <ListItem>
                    One blockchain can only be validated by one subnet
                  </ListItem>
                </List>
              </Typography>
              <Typography variant="h3" className={classes.subTitle}>
                About customized blockchain
              </Typography>
              <Typography variant="body1">
                <strong>Avalanche features 3 built-in blockchains:</strong>
                Exchange Chain (X-Chain), Platform Chain (P-Chain), and Contract
                Chain (C-Chain). All 3 blockchains are validated and secured by
                the Primary Network. The Primary Network is a special subnet,
                and all members of all custom subnets must also be a member of
                the Primary Network by staking at least 2,000 AVAX.
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
              <Typography>
                Virtual Machine can be fully customized to provide any custom
                business logic.
              </Typography>

              <Typography>
                Developers can create own blockchain by implement
                <Link href="https://docs.avax.network/build/tutorials/platform/subnets/create-a-virtual-machine-vm">
                  {" "}
                  ChainVM{" "}
                </Link>
                interface for compatibility with AvalancheGo.
              </Typography>
              <Typography>
                Blockchain can be “hidden” from other non-relevant nodes by
                configure every node in the subnet too.
              </Typography>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default withTheme(Validators);
