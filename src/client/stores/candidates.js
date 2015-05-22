import Marty from 'marty';
import Promise from 'bluebird';
import request from 'superagent';

class CandidatesStore extends Marty.Store {
  constructor(options) {
    super(options);
    this.state = {};
  }

  getCandidates(){
  	return this.fetch({
      id: 'asdf',			//WTF, this seems unnecessary
      locally: function () {
        return this.state.candidates;
      },
      remotely: function () {
        return new Promise((resolve,reject)=>{
        	request.get('http://localhost:8000/all-candidates')
		        	.end((err,res)=>{
						if(err){
							reject(err);
						} else {
							var data = JSON.parse(res.text);
							this.state.candidates = data.data;
							resolve();
						}
		        	});
        }).catch((err)=>{
        	this.state.err = err;
        });
      }
    });
  }
}

export default Marty.register(CandidatesStore);