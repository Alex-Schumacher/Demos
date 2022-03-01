import { HowToVoteIcon } from "@material-ui/icons/HowToVote";
import { Link } from "react-router-dom";

export default function TabSwitch() {
  return (
    <div className='tabSwitch'>
      <Link to='/voting' style={{ textDecoration: "none" }}>
        <HowToVoteIcon className='voteIcone' />
        <span className='votingLink'>Vote</span>
      </Link>
    </div>
  );
}
