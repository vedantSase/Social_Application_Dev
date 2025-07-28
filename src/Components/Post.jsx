import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { PostList } from "../Store/post_List_Store";

const Post = ({ postData }) => {
    const { DeletePost } = useContext(PostList);
    return (
        <div className="card post-card" style={{ width: "30rem" }}>
            <div className="card-body">
                <h5 className="card-title">{postData.title}
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                        onClick={() => DeletePost(postData.id)}>
                        <MdDeleteOutline />
                    </span>
                </h5>
                <p className="card-text">{postData.body}</p>
                {postData.tags.map((tag) => (
                    <span key={tag} className="badge text-bg-primary tag">{tag}</span>
                ))}
                <div className="alert alert-success reactions" role="alert"> This post has been reacted by <b>{postData.reactions}</b> people.
                </div>
            </div>
        </div>
    );
}


export default Post;