import Post from "../Post/Post"


export default function PostFeed(props) {
    var posts = []

    for (var i = 0; i < props.posts.length; i++) {
        posts[i] = (<Post data={props.posts[i]} />);
    }

    return (
        <div className="container">
            {posts}
        </div>
    );
}