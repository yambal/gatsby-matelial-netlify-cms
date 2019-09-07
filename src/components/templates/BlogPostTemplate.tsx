import React from 'react'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import Content from '../Content'

interface iBlogPostTemplate {
  content: any
  contentComponent: any
  description: any
  tags: any
  title: any
  helmet: any
}

const BlogPostTemplate:React.FC<iBlogPostTemplate> = (props) => {
  const {
    content,
    contentComponent,
    description,
    tags,
    title,
    helmet,
  } = props
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogPostTemplate