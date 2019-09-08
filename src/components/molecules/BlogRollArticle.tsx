import React from 'react'
import { Link } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const BrogRollArticle:React.FC<any> = (props) => {
  const { post } = props
  console.log(post)
  return (
    <Card>
      <CardHeader
        title={post.frontmatter.title}
        subheader="September 14, 2016"
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        avatar={
          <Avatar aria-label="recipe">
            R
          </Avatar>
        }
      />
      <PreviewCompatibleImage
        imageInfo={{
          image: post.frontmatter.featuredimage,
          alt: `featured image thumbnail for post ${
            post.title
          }`,
        }}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.excerpt}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link className="button" to={post.fields.slug}>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default BrogRollArticle