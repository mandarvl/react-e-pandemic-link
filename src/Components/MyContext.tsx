import React from 'react' ;
import { Post } from '../models/Post';
import { User } from '../models/User';
import { Group } from '../models/Group';
const MyContext = React.createContext({users: [] as User[], posts: [] as Post[], groups: [] as Group[]}) ;

export {MyContext} ;