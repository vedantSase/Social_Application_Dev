import { useContext } from "react";
import Post from "./Post";
import { PostList as postListData } from '../Store/post_List_Store';
const PostList = () => {
    const { postList } = useContext(postListData);
    // console.log(postList);
    return (
        <>
            <div className="allPosts">
                {postList.map((post) => (
                <Post key={post.id} postData={post} />
            ))}
            </div>
        </> 
    );
}

export default PostList;