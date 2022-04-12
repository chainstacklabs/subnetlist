import { Link, Tabs, Tab, Button, ButtonGroup } from '@material-ui/core'

import classes from './navigation.module.css'
import AddIcon from '@material-ui/icons/AddCircle'
import ValidatorIcon from '@material-ui/icons/AccountBalance'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import RouterOutlinedIcon from '@material-ui/icons/RouterOutlined'
export default function Navigation() {
  return (
    <nav className={classes.navContainer}>
      {/* <Link href="/">Subnets</Link>
      <Link href="/validators">Validators</Link>
      <Link href="/subnets-information">Info</Link> */}

      {/* <Tabs indicatorColor="primary" textColor="primary" color="primary">
        <Tab label="Subnets" icon={<RouterOutlinedIcon />} href="/" />
        <Tab label="Validators" icon={<ValidatorIcon />} href="/validators" />
        <Tab
          label="Info"
          icon={<InfoOutlinedIcon />}
          href="/subnets-information"
        />
      </Tabs> */}

      {/* <ButtonGroup
        className={classes.navContainer}
        color="primary"
        variant="text"
        size="medium"
        aria-label="large outlined primary button group"
      >
        <Button icon={<RouterOutlinedIcon />} href="/">
          Subnets
        </Button>
        <Button icon={<ValidatorIcon />} href="/validators">
          Validators
        </Button>
        <Button icon={<InfoOutlinedIcon />} href="/subnets-information">
          Info
        </Button>
      </ButtonGroup> */}

      <Button
        variant="text"
        color="primary"
        startIcon={<RouterOutlinedIcon />}
        href="/"
        className={classes.navItem}
      >
        Subnets
      </Button>
      <Button
        variant="text"
        color="primary"
        startIcon={<ValidatorIcon />}
        href="/validators"
        className={classes.navItem}
      >
        Validators
      </Button>
      <Button
        variant="text"
        color="primary"
        startIcon={<InfoOutlinedIcon />}
        href="/subnets-information"
        className={classes.navItem}
      >
        Info
      </Button>
    </nav>
  )
}
