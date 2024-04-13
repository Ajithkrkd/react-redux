import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
    thumbsUp: '👍',
    thumbsDown: '👎',
    heart: '❤️'
};

function ReactionButtons({post}) {
    const dispatch = useDispatch(); 

    const handleReactionClick = (reaction) => {
        dispatch(reactionAdded({postId: post.id, reaction }));
    };

    return (
        <div>
            {Object.entries(reactionEmoji).map(([name, emoji]) => (
                <i
                    key={name}
                    type="button"
                    className="reactionButton"
                    onClick={() => handleReactionClick(name)}
                >
                    {emoji} {post.reactions && post.reactions[name]}
                </i>
            ))}
        </div>
    );
}

export default ReactionButtons;
