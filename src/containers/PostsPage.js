import React, { Component, PropTypes } from 'react';
import { connect, bindActionCreators } from 'react-redux';
import { fetchPosts } from '../actions';

import SearchFilter from '../components/SearchFilter';
import SortFilter from '../components/SortFilter';
import Post from '../components/Post.js';


class PostsPage extends Component {
  
  componentDidMount() {
      this.props.loadPosts(this.props.location.query);
  }
  
  render() {
    return (
    <section>
        <SearchFilter />
        <SortFilter />
        <div className="posts-page">
           {this.props.posts.map((post,index) => <Post key={post._id} {...post} /> )}
        </div>
    </section>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts
});

const mapDispatchToProps = (dispatch) => {
    return {
        loadPosts(query) {
          dispatch(fetchPosts(query));
        } 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostsPage);