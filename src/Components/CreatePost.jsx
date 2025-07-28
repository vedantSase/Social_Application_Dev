import { useContext, useRef } from "react";
import { PostList } from "../Store/post_List_Store";

const CreatePost = ({ setSelectedTab }) => {

    const { AddPost } = useContext(PostList);

    const postUserIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const postTagsElement = useRef();
    const postReactionsElement = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const postUerId = postUserIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        const postReactions = postReactionsElement.current.value;
        const postTags = postTagsElement.current.value.split(' ');
        AddPost(postUerId, postTitle, postBody, postTags, postReactions);
        postUserIdElement.current.value = "";
        postTitleElement.current.value = "";
        postBodyElement.current.value = "";
        postReactionsElement.current.value = "";
        postTagsElement.current.value = "";

        // after doing above work it should move to home tab
        setSelectedTab('home');





    }
    return (
        <form className="create-post" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="userID" className="form-label">Enter User Id</label>
                <input ref={postUserIdElement} type="text" className="form-control" id="userID" placeholder="Put your userId here" />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input ref={postTitleElement} type="text" className="form-control" id="title" placeholder="How are you feeling today..." />
            </div>

            <div className="mb-3">
                <label htmlFor="body" className="form-label">Post Content</label>
                <textarea ref={postBodyElement} rows="4" type="text" className="form-control" id="body" placeholder="Describe the post..." />
            </div>
            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">Number of Reactions</label>
                <input ref={postReactionsElement} rows="4" type="number" className="form-control" id="reactions" placeholder="Enter count of reactions..." />
            </div>

            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Enter the HashTags</label>
                <input ref={postTagsElement} type="text" className="form-control" id="tags" placeholder="Enter the # tags..." />
            </div>

            <button type="submit" className="btn btn-success">Post</button>
        </form>
    );
}

export default CreatePost;