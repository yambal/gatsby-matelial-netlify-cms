import React, { useState } from 'react';
import { Link } from 'gatsby'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { LocalCafe, Redeem, Subject, ContactMail, Help } from '@material-ui/icons';
import styled from 'styled-components'

const TomMenuListOuter = styled(List)`
  width: 250px;
`

const TomMenuList:React.FC = () => {
  return(
    <TomMenuListOuter>
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
    </TomMenuListOuter>
  )
}

export default TomMenuList