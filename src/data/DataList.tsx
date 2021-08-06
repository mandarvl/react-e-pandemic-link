import { Post } from '../models/Post';
import { User } from '../models/User' ;

export class DataList{
    static users : User[] = [
        new User(1, "Octavia", "Blake", "assets/images/pdp/1.jpg" , "Follow me if you want professional's fashion and beauty advices"),
        new User(2, "Clarke", "Gryffin", "assets/images/pdp/2.jpg", "Reading book is my passion <3"),
        new User(3, "Bellamy", "Blake", "assets/images/pdp/3.jpg", "Welcome to my profile. No code, no life")
      ] ;
  
    static posts : Post[] = [
        new Post(1, "assets/images/1.jpg", 3, "5h", "Pourquoi?", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Santé"),
        new Post(2, "assets/images/3.jpg", 2, "12h", "Comment?", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Sport"),
        new Post(3, "assets/images/4.jpg", 1, "5h", "Est-ce vrai?", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Covid")
    ] ;

    static GetUserById(id: number):User{
        return DataList.users.find(
            (user) => {
                return user.id === id
            }
        ) as User ;
    }

    static GetPostsByUserId(id: number):Post[]{
        return DataList.posts.filter(
            (post) => {
                return post.authorId === id
            }
        ) as Post[] ;
    }
}