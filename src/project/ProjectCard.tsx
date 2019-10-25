import React from "react";

import {createStyles, Theme, WithStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import {ProjectJSON} from "../api/APIManager";
import OpenIcon from "@material-ui/icons/OpenInNew";
import FolderIcon from "@material-ui/icons/FolderOpen";
import Tooltip from "@material-ui/core/Tooltip";
import HCLAImage from "../images/hcla1.png";
import {Link} from "react-router-dom";

const styles = (theme: Theme) => createStyles({
  root: {
    width: "100%",
    paddingTop: "128%",
    position: "relative",
  },

  content: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1.2rem"
  },

  folder: {
    color: theme.palette.primary.main,
    width: 48,
    height: 48
  },

  open: {
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
      transition: "color 0.2s ease"
    },
    marginLeft: "1rem"
  },

  github: {
    width: 24,
    height: 24,
    cursor: "pointer",
    "&:hover": {
      "& path": {
        fill: theme.palette.primary.main,
        transition: "fill 0.2s ease"
      },
    },
    "& path": {
      fill: theme.palette.text.primary
    }
  },

  description: {
    color: theme.palette.text.secondary
  },

  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main
  }
});

interface ProjectCardProps extends WithStyles<typeof styles> {
  project: ProjectJSON;
}

class ProjectCard extends React.Component<ProjectCardProps> {

  constructor(props: ProjectCardProps) {
    super(props);
  }

  render() {
    const { classes, project } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <Link to={`/projects/${project._id}`}><img width="100%" src={HCLAImage} /></Link>
          <Typography variant="h6" align="left" gutterBottom>{project.title.toUpperCase()}</Typography>
          <Typography className={classes.description} variant="body2" align="left" gutterBottom>{project.description}</Typography>
          <Typography className={classes.description} variant="overline" align="left" gutterBottom>{project.year}</Typography>
          <Typography align="left"><Link to={`/projects/${project._id}`} className={classes.link}>view case study ></Link></Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ProjectCard);
