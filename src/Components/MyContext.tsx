import React from 'react' ;
import { Post } from '../models/Post';
import { User } from '../models/User';
import { Group } from '../models/Group';
const MyContext = React.createContext({
    users: [] as User[],
    posts: [] as Post[],
    groups: [] as Group[],
    showNewPostModal: false,
    newPostStatusHandler: (newValue: boolean) => {},
    postModifHandler: (id:number, newValue: Post) => {},
    loggedUser: null,
    login: (user:User) => {},
    logout: () => {}
}) ;

export {MyContext} ;