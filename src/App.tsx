import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header' ;
import Feed from './Components/Feed/Feed' ;
import { Post } from './models/Post';
import { User } from './models/User' ;
import { Group } from './models/Group' ;
import {MyContext} from './Components/MyContext' ;
import NewPost from './Components/NewPost/NewPost';
import { _Comment } from './models/_Comment';

class App extends Component {
  state = {
    users: [
      new User(1, "Octavia", "Blake", "assets/images/pdp/1.jpg" , "Follow me if you want professional's fashion and beauty advices"),
      new User(2, "Clarke", "Gryffin", "assets/images/pdp/2.jpg", "Reading book is my passion <3"),
      new User(3, "Bellamy", "Blake", "assets/images/pdp/3.jpg", "Welcome to my profile. No code, no life")
    ] as User[],
    posts: [
        new Post(1, "assets/images/1.jpg", 3, "5h", "Pourquoi?", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 1, 5, 1),
        new Post(2, "assets/images/3.jpg", 2, "12h", "Comment?", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 2, 8, 1),
        new Post(3, "assets/images/4.jpg", 1, "5h", "Est-ce vrai?", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 1, 5, 4)
    ] as Post[],
    groups: [
        new Group(1, "Santé et bien-être", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "assets/images/post/1.jpg"),
        new Group(2, "Sport", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "assets/images/post/2.jpg"),
        new Group(3, "Nouvelles sur le Coronavirus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "assets/images/post/3.jpg")
    ] as Group[],
    comments: [
      new _Comment(1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "30m", 1, 1),
      new _Comment(2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "1h", 2, 2),
      new _Comment(3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "20m", 2, 1),
      new _Comment(4, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "2h", 3, 3),
      new _Comment(5, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "30m", 1, 3),
      new _Comment(6, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "25m", 1, 2),
      new _Comment(7, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "55m", 3, 1),
      new _Comment(8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "55m", 3, 2)
    ],
    addPost:(toAdd: Post) => {
      const updatedList = this.state.posts ;
      updatedList.push(toAdd) ;
      this.setState({
        posts: updatedList
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
    showNewPostModal: false,
    newPostStatusHandler: (newPostState: boolean) => {
      this.setState({
        showNewPostModal: newPostState
      })
    },
    postModifHandler : (id:number, updatedValue: Post) => {
      const newPostList = this.state.posts ;
      const index = newPostList.findIndex(post => post.id === id) ;
      newPostList[index] = updatedValue ;
      this.setState({
        posts: newPostList
      }) ;
    }
  }

  render(){
    return (
      <div className="App">
        <MyContext.Provider value={this.state}>
          <Header/>
          <Feed/>
          <NewPost />
        </MyContext.Provider>
        
      </div>
    );
  }
}

export default App;
