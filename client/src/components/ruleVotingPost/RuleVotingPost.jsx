import "./ruleVotingPost.css";
import { Users } from "../../dummyData";
import { useState } from "react";
import {AiFillCaretUp,AiFillCaretDown} from "react-icons/ai";
import { IconContext } from "react-icons";



export default function RuleVoting({ bill }) {
  //downvote
  const [downvote, setDownvote] = useState(bill.downvote);
  const [isDownvoted, setIsDownvoted] = useState(false);
  //upvote
  const [upvote, setUpvote] = useState(bill.upvote);
  const [isUpvoted, setIsUpvoted] = useState(false);

  const downVoteHandler = () => {
    if (isUpvoted) {
      setUpvote((upvote - 1));
      setIsUpvoted(false);
    }
	setDownvote(isDownvoted ? downvote - 1 : downvote + 1);
	setIsDownvoted(!isDownvoted);
  };

  const upvoteHandler = () => {
    if (isDownvoted) {
      setDownvote(downvote - 1);
      setIsDownvoted(false);
    }
    setUpvote(isUpvoted ? upvote - 1 : upvote + 1);
    setIsUpvoted(!isUpvoted);
  };

  return (
    <div className='bill'>
      <div className='billWrapper'>
        <div className='billTop'>
          <div className='billTopLeft'>
            <img
              className='billProfileImg'
              src={Users.filter((u) => u.id === bill?.userId)[0].profilePicture}
              alt=''
            />
            <span className='billUsername'>
              {Users.filter((u) => u.id === bill?.userId)[0].username}
            </span>
            <span className='billDate'>{bill.date}</span>
          </div>
        </div>
        <div className='billCenter'>
          <span className='billProposition'>{bill.proposition}</span>
          <span className='billText'>{bill.desc}</span>
        </div>
        <div className='billBottom'>
          <div className='billBottomLeft'>
		  <IconContext.Provider value={{ color:voteIcon(isUpvoted) , className:"upvote" }}>
            <AiFillCaretUp
              onClick={upvoteHandler}
            />
			</IconContext.Provider>

<IconContext.Provider value={{ color:voteIcon(isDownvoted) , className:"downvote" }}>
            <AiFillCaretDown
              onClick={downVoteHandler}
            />
			</IconContext.Provider>

            <span className='billUpvoteCounter'>
              {bill.upvote} people upvoted it
            </span>
          </div>
          <div className='billBottomRight'>
		  
            <span className='billCommentText'>{bill.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
  function voteIcon({ bill, boolean: vertical }) {
    // vertical = true => upvote
    // vertical = false => downvote

    switch (vertical) {
		case true:
			return "lightblue";
			
		case false:
			return "lightgray";
			
		default:
			return "lightgray";
				
    }
  }
}
