import React, { useState } from 'react';
import { Link } from 'gatsby'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import useSiteMetadata from './SiteMetadata'
import Drawer from '@material-ui/core/Drawer';
import TopManuList from './molecules/TopManuList';

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
        <TopManuList />
      </Drawer>
    </React.Fragment>
  )
}

export default Navbar

/**
 * https://material-ui.com/components/app-bar/#hide-app-bar
 */
