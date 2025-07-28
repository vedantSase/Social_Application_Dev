import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    AddPost: () => { },
    DeletePost: () => { },
});

const postListReducer = (currentPostList, action) => {
    switch (action.type) {
        case 'DELETE_POST':
            return currentPostList.filter(post => post.id !== action.payload.postId);
        case 'ADD_POST':
            return [action.payload, ...currentPostList];
        default:
            return currentPostList;
    }
};

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_LIST);
    const AddPost = (postUerId, postTitle, postBody, postTags, postReactions) => {
        // console.log(`id : ${postUerId}`);
        // console.log(`Title : ${postTitle}`);
        // console.log(`Body : ${postBody}`);
        // console.log(`Tags : ${postTags}`);
        // console.log(`Reactions : ${postReactions}`);

        dispatchPostList({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: postReactions,
                userId: postUerId,
                tags: postTags
            }
        })
    };

    const DeletePost = (postId) => {
        // console.log(`${postId} post deleted !`);
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId
            }
        })
    };

    return (
        <PostList.Provider value={{
            postList: postList,
            AddPost: AddPost,
            DeletePost: DeletePost
        }}>
            {children}
        </PostList.Provider>
    );
};

const DEFAULT_LIST = [
    {
        id: 1,
        title: 'Going to Mumbai',
        body: "Hi Friends, I'm going to Mumbai for my vacation. The city of DREAMS is calling me.",
        reactions: 2,
        userId: 'user-7',
        tags: ['vacation', 'mumbai', 'travel']
    },
    {
        id: 2,
        title: 'Chasing Monsoons in Kerala',
        body: "Kerala’s rains are here, and I’m all set to explore its lush green beauty.",
        reactions: 5,
        userId: 'user-15',
        tags: ['kerala', 'monsoon', 'nature']
    },
    {
        id: 3,
        title: 'Weekend Trek to Lonavala',
        body: "Taking a quick break from city life and heading to the hills!",
        reactions: 3,
        userId: 'user-21',
        tags: ['trekking', 'lonavala', 'weekend']
    },
    {
        id: 4,
        title: 'Goa Vibes Incoming',
        body: "Sun, sand, and sea—Goa, I’m ready for your magic!",
        reactions: 10,
        userId: 'user-33',
        tags: ['goa', 'beach', 'vacay']
    },
    {
        id: 5,
        title: 'Exploring Hidden Gems of Rajasthan',
        body: "From forts to desert dunes, Rajasthan’s royal charm never fails.",
        reactions: 8,
        userId: 'user-19',
        tags: ['rajasthan', 'history', 'exploration']
    }
];

export default PostListProvider;