import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import {
  withTheme,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles'
import path from 'path'
import { Typography, TextField, InputAdornment, Paper } from '@material-ui/core'

import Chain from '../components/chain'
import Sidebar from '../components/sidebar'
import AvaxSubnet from '../components/avaxsubnet'
import Header from '../components/header'

import SearchIcon from '@material-ui/icons/Search'

import classes from './index.module.css'

// Check in https://testnet.avascan.info/blockchains
import subnetList from '../components/chain/subnets.json'
import mainnetList from '../components/chain/chains.json'
import Navigation from '../components/navigation/navigation'

const searchTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#2F80ED',
    },
  },
  shape: {
    borderRadius: '10px',
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
    MuiPaper: {
      elevation1: {
        'box-shadow': '0px 7px 7px #0000000A;',
        '-webkit-box-shadow': '0px 7px 7px #0000000A;',
        '-moz-box-shadow': '0px 7px 7px #0000000A;',
      },
    },
    MuiInputBase: {
      input: {
        fontSize: '14px',
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: '12.5px 14px',
      },
      notchedOutline: {
        borderColor: '#FFF',
      },
    },
  },
})

// const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Home({ changeTheme, theme }) {
  // loads from json
  // const { data, error } = useSWR(
  //   'https://api.jsonbin.io/b/622f02ffa703bb67492b1051/2',
  //   fetcher
  // )

  const allNets = [...mainnetList, ...subnetList]

  const [layout, setLayout] = useState('grid')
  const [search, setSearch] = useState('')
  const [hideAvaxsubnet, setHideAvaxsubnet] = useState('1')
  const router = useRouter()
  if (router.query.search) {
    setSearch(router.query.search)
    delete router.query.search
  }

  const onSearchChanged = (event) => {
    setSearch(event.target.value)
  }

  const handleLayoutChanged = (event, newVal) => {
    if (newVal !== null) {
      setLayout(newVal)
      localStorage.setItem('yearn.finance-invest-layout', newVal ? newVal : '')
    }
  }

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

  useEffect(() => {
    const multi = localStorage.getItem('chainlist.org-hideAvaxsubnet')
    if (multi) {
      setHideAvaxsubnet(multi)
    } else {
      setHideAvaxsubnet('0')
    }
  }, [])

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
              <div className={classes.filterRow}>
                <ThemeProvider theme={searchTheme}>
                  <Paper className={classes.searchPaper}>
                    <TextField
                      fullWidth
                      className={classes.searchContainer}
                      variant="outlined"
                      placeholder="Swimmer..."
                      value={search}
                      onChange={onSearchChanged}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <SearchIcon fontSize="small" />
                          </InputAdornment>
                        ),
                        startAdornment: (
                          <InputAdornment position="start">
                            <Typography
                              className={classes.searchInputAdnornment}
                            >
                              Search subnets:
                            </Typography>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Paper>
                </ThemeProvider>
              </div>

              <Header changeTheme={changeTheme} />
            </div>

            <div className={classes.cardsContainer}>
              {hideAvaxsubnet === '0' && (
                <AvaxSubnet closeAvaxsubnet={closeAvaxsubnet} />
              )}
              {allNets &&
                allNets
                  .filter((chain) => {
                    if (search === '') {
                      return true
                    } else {
                      //filter
                      return (
                        chain.chain
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        chain.chainId
                          .toString()
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        chain.name
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        (chain.nativeCurrency
                          ? chain.nativeCurrency.symbol
                          : ''
                        )
                          .toLowerCase()
                          .includes(search.toLowerCase())
                      )
                    }
                  })
                  .map((chain, idx) => {
                    return <Chain chain={chain} key={idx} />
                  })}{' '}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default withTheme(Home)

// export const getStaticProps  = async () => {
//
//   try {
//     const chainsResponse = await fetch('https://chainid.network/chains.json')
//     const chainsJson = await chainsResponse.json()
//
//     return {
//       props: {
//         chains: chainsJson
//       },
//       revalidate: 60,
//     }
//   } catch (ex) {
//     return {
//       props: {
//         chains: []
//       }
//     }
//   }
//
// }
