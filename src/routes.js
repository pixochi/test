import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import FrontPage from './containers/FrontPage';
import PostsPage from './containers/PostsPage';


export default <Route path="/" component={App}>
    <IndexRoute component={FrontPage} />
    <Route path="/posts" component={PostsPage} />
</Route>