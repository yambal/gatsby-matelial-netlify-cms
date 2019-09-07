import React, { useState } from 'react';
import { Link } from 'gatsby'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import useSiteMetadata from './SiteMetadata'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { LocalCafe, Redeem, Subject, ContactMail, Help } from '@material-ui/icons';

const Navbar:React.FC= () => {
  const [isTggleOpen, toggleDrawer] = useState(false);
  const { title, description } = useSiteMetadata()

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => {toggleDrawer(!isTggleOpen)}}>
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <Typography variant="h6" >
              {title}
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer open={isTggleOpen} onClose={() => {toggleDrawer(!isTggleOpen)}}>
        <List style={{ width: '250px' }}>
          <Link to="/about">
            <ListItem button>
              <ListItemIcon><LocalCafe /></ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </Link>
          <Link to="/products">
            <ListItem button>
              <ListItemIcon><Redeem /></ListItemIcon>
              <ListItemText primary="Products" />
            </ListItem>
          </Link>
          <Link to="/blog">
          <ListItem button>
            <ListItemIcon><Subject /></ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItem>
          </Link>
          <Link to="/contact">
            <ListItem button>
              <ListItemIcon><ContactMail /></ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/contact/examples">
            <ListItem button>
              <ListItemIcon><Help /></ListItemIcon>
              <ListItemText primary="Form Examples" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </React.Fragment>
  )
}

export default Navbar
