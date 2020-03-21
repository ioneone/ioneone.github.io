import React, {useEffect, useState} from "react";
import {useHistory, useLocation, useParams} from "react-router";
import {Button, Theme} from "@material-ui/core";
import ReactMarkdown from "react-markdown/with-html";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Contact from "./contact/Contact";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar/AppBar";
import ThemeToggle from "./theme/ThemeToggle";

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    boxShadow: "none"
  },

  container: {
    paddingTop: theme.spacing(4)
  },

  md: {
    "& img": {
      display: "block",
      margin: "0 auto",
      width: "72%"
    },
    "& a": {
      color: theme.palette.primary.main
    },
    "& video": {
      display: "block",
      margin: "0 auto",
      width: "72%"
    }
  }
}));

const Markdown = () => {
  const params = useParams<{ id: string }>();
  const location = useLocation();
  const history = useHistory();
  const [markdown, setMarkdown] = useState<string>("");

  const classes = useStyles();

  useEffect(() => {

    const url = `https://raw.githubusercontent.com/ioneone/ioneone.github.io/develop/src/markdowns/${params.id}/${params.id}.md`;
    fetch(url)
      .then(res => res.text())
      .then(text => setMarkdown(text));

  }, []);

  return (
    <div>
      <AppBar
        color="transparent"
        className={classes.appBar}
      >
        <Toolbar>
          <Button onClick={() => history.push({ pathname: "/", state: location.state })}>
            {"← back"}
          </Button>
          <ThemeToggle />
        </Toolbar>
      </AppBar>
      <Container className={classes.container} maxWidth="md">
        <Typography>
          <ReactMarkdown className={classes.md} source={markdown} escapeHtml={false} />
        </Typography>
      </Container>
      <Contact />
    </div>
  );
};

export default Markdown;
