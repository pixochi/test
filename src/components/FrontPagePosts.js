import React, { Component, PropTypes } from 'react';
import FrontPagePost from './FrontPagePost';

class FrontPagePosts extends Component {
    
    render() {
    return (
      <div>
        {this.props.posts.map(post => 
            <FrontPagePost title={post.title} category={post.category} content={post.category} />
        )}
      </div>
    );
  }
}

export default FrontPagePosts;