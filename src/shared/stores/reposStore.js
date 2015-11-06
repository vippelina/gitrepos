//import alt application
import alt from "../alt-app";

class ReposStore {
	constructor(){
		this.repos = []
		this.loading = false
	}
}

var theStore = alt.createStore(ReposStore);

export default theStore;