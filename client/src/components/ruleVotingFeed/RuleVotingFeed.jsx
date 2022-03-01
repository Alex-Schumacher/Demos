import { Bills } from "../../dummyData";
import RuleVoting from "../ruleVotingPost/RuleVotingPost";

export default function RuleVotingFeed() {
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        {Bills.map((p) => (
          <RuleVoting key={p.id} bill={p} />
        ))}
      </div>
    </div>
  );
}
