import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {

    const posts = useLoaderData();
    console.log(posts)

    return (
        <div className="mx-10 ">
            <h2 className="text-center my-5">Todays Posts: {posts.length}</h2>
            <div className="grid grid-cols-4 gap-3 ">
                {
                    posts.map(post => <Post 
                        key={post.id}
                        post={post}
                    ></Post>)
                }
            </div>
        </div>
    );
};


export default Posts;