import { Link, Tabs, Tab, Button, ButtonGroup } from '@material-ui/core'

import classes from './navigation.module.css'
import AddIcon from '@material-ui/icons/AddCircle'
import ValidatorIcon from '@material-ui/icons/AccountBalance'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import RouterOutlinedIcon from '@material-ui/icons/RouterOutlined'
import ClearAllIcon from '@material-ui/icons/ClearAll'
export default function Navigation() {
  return (
    <nav className={classes.navContainer}>
      <Button
        variant="text"
        color="primary"
        startIcon={<RouterOutlinedIcon />}
        href="/subnet-tech/"
        className={classes.navItem}
      >
        Subnets
      </Button>
      <Button
        variant="text"
        color="primary"
        startIcon={<ValidatorIcon />}
        href="/subnet-tech/validators"
        className={classes.navItem}
      >
        Validators
      </Button>
      <Button
        variant="text"
        color="primary"
        startIcon={<ClearAllIcon />}
        href="/subnet-tech/projects"
        className={classes.navItem}
      >
        Projects
      </Button>
      <Button
        variant="text"
        color="primary"
        startIcon={<InfoOutlinedIcon />}
        href="/subnet-tech/subnets-information"
        className={classes.navItem}
      >
        Resources
      </Button>
    </nav>
  )
}
