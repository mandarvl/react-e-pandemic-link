import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header' ;
import Feed from './Components/Feed/Feed' ;
import { Post } from './models/Post';
import { User } from './models/User' ;
import { Group } from './models/Group' ;
import {MyContext} from './Components/MyContext' ;

class App extends Component {
  state = {
    users: [
      new User(1, "Octavia", "Blake", "assets/images/pdp/1.jpg" , "Follow me if you want professional's fashion and beauty advices"),
      new User(2, "Clarke", "Gryffin", "assets/images/pdp/2.jpg", "Reading book is my passion <3"),
      new User(3, "Bellamy", "Blake", "assets/images/pdp/3.jpg", "Welcome to my profile. No code, no life")
    ] as User[],
    posts: [
        new Post(1, "assets/images/1.jpg", 3, "5h", "Pourquoi?", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Santé", 5, 1),
        new Post(2, "assets/images/3.jpg", 2, "12h", "Comment?", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Sport", 8, 1),
        new Post(3, "assets/images/4.jpg", 1, "5h", "Est-ce vrai?", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Covid", 5, 4)
    ] as Post[],
    groups: [
        new Group(1, "Santé et bien-être", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "assets/images/post/1.jpg"),
        new Group(2, "Sport", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "assets/images/post/2.jpg"),
        new Group(3, "Nouvelles sur le Coronavirus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "assets/images/post/3.jpg")
    ] as Group[],
    getUserById(id: number):User{
      return this.users.find(
          (user) => {
              return user.id === id
          }
      ) as User ;
    },
    getPostsByUserId(id: number):Post[]{
        return this.posts.filter(
            (post) => {
                return post.authorId === id
            }
        ) as Post[] ;
    }
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <MyContext.Provider value={this.state}>
          <Feed/>
        </MyContext.Provider>
        
      </div>
    );
  }
}

export default App;
