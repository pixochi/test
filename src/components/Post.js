import React, { Component } from 'react';

class Post extends Component {
    render() {
        return(
        	<div>
	        	<h2>{this.props.title}</h2>
	        	<h4>{this.props.category}</h4>
	        	<p>{this.props.content}</p>
	        	<ul>
	        		<li>upvotes: {this.props.upvotes}</li>
	        		<li>downvotes: {this.props.downvotes}</li>
	        	</ul>
        	</div>
        );
    }
}

export default Post;