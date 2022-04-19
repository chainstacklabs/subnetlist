import { Link, Typography } from '@material-ui/core'
import classes from './project.module.css'

export default function Project({ project }) {
  return (
    <li className={classes.projectContainer}>
      <div className={classes.logoContainer}>
        {project.logo && (
          <img
            src={project.logo}
            alt={project.name}
            className={classes.projectLogo}
          />
        )}
      </div>
      <div className={classes.infoContainer}>
        <Typography variant="h3">{project.name}</Typography>
        <Link href={project.website} target="_blank">
          Visit website
        </Link>
        <Typography variant="body1">{project.description}</Typography>
      </div>
    </li>
  )
}
