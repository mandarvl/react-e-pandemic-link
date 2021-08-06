import { Post } from '../models/Post';
import { User } from '../models/User' ;
import { Comment } from '../models/Comment' ;

export class DataList{
    static users : User[] = [
        new User(1, "Perline", "Rakoto", "assets/images/5.jpg" , "Follow me if you want professional's fashion and beauty advices", "../assets/images/pdc1.jpg"),
        new User(2, "Soa", "Rasoa", "assets/images/10.jpg", "Reading book is my passion <3", "../assets/images/pdc1.jpg"),
        new User(3, "Manda", "Ravalison", "assets/images/9.jpg", "Welcome to my profile. No code, no life", "../assets/images/pdc2.jpg")
      ] ;
  
    static posts : Post[] = [
        new Post(1, "assets/images/1.jpg", 1, "5h", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        new Post(2, "assets/images/3.jpg", 2, "12h", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        new Post(3, "assets/images/4.jpg", 1, "5h", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        new Post(4, "assets/images/8.jfif", 3, "12h", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        new Post(5, "assets/images/14.jfif", 2, "6h", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        new Post(6, "assets/images/12.jfif", 1, "18h", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        new Post(7, "assets/images/11.jpg", 3, "12h", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        new Post(4, "assets/images/13.jfif", 3, "12h", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
    ] ;

    static comments : Comment[] = [
        new Comment(1, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.", 1, "4h", 1),
        new Comment(2, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.", 3, "30m", 1),
        new Comment(3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 3, "20m", 2),
        new Comment(4, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 2, "20m", 3)
    ]

    static GetUserById(id: number):User{
        return <User> DataList.users.find(
            (user) => {
                return user.id == id
            }
        )
    }

    static GetPostsByUserId(id: number):Post[]{
        return <Post[]> DataList.posts.filter(
            (post) => {
                return post.authorId == id
            }
        ) ;
    }

    static GetCommentsByPostId(postId: number):Comment[]{
        return <Comment[]> DataList.comments.filter(
            (com) => {
                return com.postId == postId
            }
        ) ;
    }
}