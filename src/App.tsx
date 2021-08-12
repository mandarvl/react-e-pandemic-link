import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header' ;
import { Post } from './models/Post';
import { User } from './models/User' ;
import { Group } from './models/Group' ;
import {MyContext} from './Components/MyContext' ;
import NewPost from './Components/NewPost/NewPost';
import { _Comment } from './models/_Comment';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Data } from './Data/data';
import Login from './Components/Authentification/Authentification';
import Error from './Components/Error/Error';
import AppLoader, { hideLoader, loaderRef, showLoader } from './Components/AppLoader/AppLoader';
import Home from './Components/Home/Home';

class App extends Component{
  state = {
    posts: Data.posts,
    comments: Data.comments,
    users: Data.users,
    groups: Data.groups,
    addPost:(toAdd: Post) => {
      let update = this.state.posts.slice(0) ;
      update.push(toAdd) ;
      this.setState({
        posts: update
      }) ;
    },
    addComment:(toAdd: _Comment) => {
      let update = this.state.comments.slice(0) ;
      update.push(toAdd) ;
      console.log(update) ;
      this.setState({
        comments: update
      }) ;
    },
    getUserById(id: number):User{
      return this.users.find(
          (user) => {
              return user.id === id
          }
      ) as User ;
    },
    getGroupById(id: number):Group{
      return this.groups.find(
        (group) => {
          return group.id === id
        }
      ) as Group ;
    },
    getPostsByUserId(id: number):Post[]{
        return this.posts.filter(
            (post) => {
                return post.authorId === id
            }
        ) as Post[] ;
    },
    getCommentsByPostId(id: number):_Comment[]{
      return this.comments.filter(
        (com) => {
          return com.postId === id
        }
      ) as _Comment[] ;
    },
    getLastId(arr: any):number{
      const length = arr.length ;
      return arr[length - 1].id +1 ;
    },
    postModifHandler : (id:number, updatedValue: Post) => {
      const newPostList = this.state.posts ;
      const index = newPostList.findIndex(post => post.id === id) ;
      newPostList[index] = updatedValue ;
      this.setState({
        posts: newPostList
      }) ;
    },
    newPostStatusHandler: (newPostState: boolean) => {
      this.setState({
        showNewPostModal: newPostState
      })
    },
    showNewPostModal: false,
    loggedUser: null,
    login: (user: User) => {
      this.setState({
        loggedUser: user
      }) ;
    },
    logout: () => {
      this.setState({
        loggedUser: null
      })
    }
  }

  constructor(props:any){
    super(props) ;
    showLoader() ;
  }
  
  componentDidMount(){
    hideLoader() ;
  }

  render(){
    return (
      <div className="App">
        <MyContext.Provider value={this.state}>
          <Router>
            {this.state.loggedUser !== null?<Header/>:null}
            <Switch>
              <Route path="/" exact><Home isLogged={this.state.loggedUser !== null}/></Route>
              <Route path="/login" component={Login}></Route>
              <Route component={Error}></Route>
            </Switch>
          </Router>
          {
            this.state.showNewPostModal?<NewPost />:null
          }
          
        </MyContext.Provider>
        <AppLoader ref={loaderRef} />
      </div>
    );
  }
}

export default App;
