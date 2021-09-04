import React, { Component, Suspense } from 'react';
import './App.css';
import Header from './Components/Header/Header' ;
import { Post } from './models/Post';
import { User } from './models/User' ;
import { Group } from './models/Group' ;
import {MyContext} from './Components/MyContext' ;
import NewPost from './Components/NewPost/NewPost';
import { _Comment } from './models/_Comment';
import { Switch, Route, HashRouter } from "react-router-dom";
import { Data } from './Data/data';
import Error from './Components/Error/Error';
import AppLoader, { hideLoader, loaderRef, showLoader } from './Components/AppLoader/AppLoader';
import Home from './Components/Home/Home';
import ViewPost from './Components/ViewPost/ViewPost';
import Search from './Components/Search/Search';
import Footer from './Components/Footer/Footer';
import { Alert } from '@material-ui/lab' ;
import Snackbar from '@material-ui/core/Snackbar';
import Test from './Components/Test/Test';

const FontAwesome = require('react-fontawesome') ;

const LoginComponent = React.lazy(() => import('./Components/Login/Login'));
const SignUpComponent = React.lazy(() => import('./Components/SignUp/SignUp'));

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
      this.setState({
        comments: update
      }) ;
    },
    addUser: (toAdd: User) => {
      let update = this.state.users.slice(0) ;
      update.push(toAdd) ;
      this.setState({
        users: update
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
    getPostById(id: number):Post{
      return this.posts.find(
        (post) => {
          return post.id === id
        }
      ) as Post ;
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
    loadAuthComp: null,
    setLoadAuthComp: (selected:string | null) => {
      this.setState({
        loadAuthComp : selected
      }) ;
    },
    loggedUser: null,
    isLogged: ():boolean => {
      return this.state.loggedUser !== null ;
    },
    login: (user: User, withMessage: boolean) => {
      this.setState({
        loggedUser: user
      }, () => {
        if(withMessage)
          this.state.setSuccessMessage("Bienvenu(e) "+user.GetFullName())
      }) ;
    },
    logout: () => {
      this.setState({
        loggedUser: null
      })
    },
    errorMessage: null,
    setErrorMessage: (val:string | null) => {
      this.setState({
        errorMessage: val
      })
    },
    successMessage: null,
    setSuccessMessage: (val:string | null) => {
      this.setState({
        successMessage: val
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
      
      <div>
        <div className="App">
          <MyContext.Provider value={this.state}>
            <HashRouter>
              <div id="content">
                <Header />
                <Switch>
                    <Route path="/" exact><Home/></Route>
                    <Route path="/login"><Home/></Route>
                    <Route path="/post/:id" component={ViewPost} />
                    <Route path="/search/:keyword" component={Search} />
                    <Route path="/test" component={Test} />
                    <Route component={Error}></Route>
                </Switch>
              </div>
            </HashRouter>
            {
              this.state.showNewPostModal?<NewPost />:null
            }
            {this.state.loadAuthComp !== null ? (
              <div className="modal">
                <div className="modal-content animation-zoom-in container">
                  <div className="modal-header">
                      <h5 className="text-center modal-title">Authentification</h5>
                      <FontAwesome className="close red-hover" name="times" onClick={() => {
                          this.state.setLoadAuthComp(null) ;
                      }} />
                  </div>
                  <div className="modal-body small-margin-y">
                    <Suspense fallback={<div>Chargement...</div>}>
                      {this.state.loadAuthComp === "login"?
                      <LoginComponent toggle={() => this.state.setLoadAuthComp("signUp")} />
                      : <SignUpComponent toggle={() => this.state.setLoadAuthComp("login")} />
                      }
                    </Suspense>
                  </div>
                </div>
              </div>
            ) : null}
          </MyContext.Provider>
          <Footer />
        </div>
        <AppLoader ref={loaderRef} />

        {
          this.state.successMessage != null?
          <Snackbar open={true} autoHideDuration={6000} anchorOrigin={{ vertical: 'bottom', horizontal:'left' }} onClose={() => this.state.setSuccessMessage(null)}>
            <Alert variant="filled" severity="success">{this.state.successMessage}</Alert>
          </Snackbar>
          : null
        }
        {
          this.state.errorMessage != null?
          <Snackbar  open={true} autoHideDuration={6000} anchorOrigin={{ vertical: 'bottom', horizontal:'left' }} onClose={() => this.state.setErrorMessage(null)}>
            <Alert variant="filled" severity="error">{this.state.errorMessage}</Alert>
          </Snackbar>
          : null
        }
      </div>
    );
  }
}

export default App;
