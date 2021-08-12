import { Group } from "../models/Group";
import { Post } from "../models/Post";
import { User } from "../models/User"
import { _Comment } from "../models/_Comment"

export class Data{
    static users: User[] = [
        new User(1, "Octavia", "Blake", "assets/images/pdp/1.jpg" , "octaviablake@gmail.com", "motdepasse"),
        new User(2, "Clarke", "Gryffin", "assets/images/pdp/2.jpg", "clarke@gmail.com", "wanheda"),
        new User(3, "Bellamy", "Blake", "assets/images/pdp/3.jpg", "bellamy@gmail.com", "trikru1234")
    ] ;

    static posts: Post[] = [
        new Post(1, "assets/images/1.jpg", 3, "5h", "Pourquoi?", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 1, 5, 1),
        new Post(2, "assets/images/3.jpg", 2, "12h", "Comment?", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 2, 8, 1),
        new Post(3, "assets/images/4.jpg", 1, "5h", "Est-ce vrai?", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 1, 5, 4)
    ] ;
    
    static groups: Group[] = [
        new Group(1, "Santé et bien-être", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "assets/images/post/1.jpg"),
        new Group(2, "Sport", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "assets/images/post/2.jpg"),
        new Group(3, "Nouvelles sur le Coronavirus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "assets/images/post/3.jpg")
    ] ;
    
    static comments: _Comment[] = [
        new _Comment(1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "30m", 1, 1),
        new _Comment(2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "1h", 2, 2),
        new _Comment(3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "20m", 2, 1),
        new _Comment(4, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "2h", 3, 3),
        new _Comment(5, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "30m", 1, 3),
        new _Comment(6, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "25m", 1, 2),
        new _Comment(7, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "55m", 3, 1),
        new _Comment(8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "55m", 3, 2)
    ] ;

}