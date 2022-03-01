import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import RuleVotingFeed from "../../components/ruleVotingFeed/RuleVotingFeed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./voting.css"

export default function Voting() {
	return (
	<>
	<Topbar/>
	<div className="votingContainer">
	<Sidebar/>
	<RuleVotingFeed/>
	<Rightbar/>
	</div>
	</>
	);
}