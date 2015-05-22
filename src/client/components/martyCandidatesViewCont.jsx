import Marty from 'marty';
import candidatesStore from '../stores/candidates';
import CandidatesView from '../components/candidatesView';

export default Marty.createContainer(CandidatesView,{
	listenTo: candidatesStore,
	fetch: {
		candidates() {
		  return candidatesStore.for(this).getCandidates();
		}
	},
	failed(errors) {
		return <div className="User User-failedToLoad">{errors}</div>;
	},
	pending() {
		return this.done({
		  candidates: []
		});
	}
});
