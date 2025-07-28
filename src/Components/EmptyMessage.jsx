import { PostList } from "../Store/post_List_Store";
import { useContext } from "react";
function EmptyMessage({ setSelectedTab }) {
    const { postList, AddPost } = useContext(PostList);


    return postList.length === 0 && <center className="noPosts">
        <h4 className="NoTask">Nothing to show...</h4>
        <button type="submit" className="btn  btn-secondary btn-lg Post-something" onClick={() => {
            setSelectedTab('createPost');
        }}>Post Something ✨</button>
    </center>
}

export default EmptyMessage;