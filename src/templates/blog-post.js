import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'


// dangerouslySetInnerHTML is not recommended in react but for gatsbyjs its fine since everything is rendered statically
export default ({ data }) => {
    const post = data.markdownRemark
    return(
        <div>
            <Layout>
                <div>
                    <h1>{post.frontmatter.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html:post.html }}></div>
                </div>
            </Layout>
        </div>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark( fields: {slug : {eq: $slug }}) {
            html
            frontmatter{
                title
            }
        }
    }
`