import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { fetchPosts } from '../actions';
import Header from '../components/Header';
import Footer from '../components/Footer';

class App extends Component {
  
  render() {
    const { children } = this.props;
    return (
      <div>
      <Header />
      MAIN APP COMPONENT
      <button onClick={this.props.loadPosts}>GET POSTS</button>
      
      {this.props.posts.map((post,index) =>{
          return (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.category}</p>
          </div>
          );
      })}
      {children}
      <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  test: "Test text in mapStateToProps",
  posts: state.posts
});

const mapDispatchToProps = (dispatch) => {
    return {
        loadPosts() {
          dispatch(fetchPosts());
        } 
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);