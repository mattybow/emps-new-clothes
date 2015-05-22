/*eslint-disable no-console */

import compression from 'compression';
import config from './config';
import express from 'express';
// import favicon from 'serve-favicon';
import render from './render';
import cookieParser from 'cookie-parser';
import mongojs from 'mongojs';
import _ from 'lodash';
import uuid from 'uuid';
import cookie from 'cookie';
import Promise from 'bluebird';

const candidates = "Clinton Sanders Paul Cruz Rubio Carson Fiorina Huckabee"
const blankBallot = {};
_.forEach(candidates.split(' '),function(candidate){
  blankBallot[candidate]=-1;
});



export default function() {

  const app = express();
  const connectionString = 'q2_2015';
  var db = mongojs(connectionString,['ballots']);
  db.on('ready',function(){
    console.log('DB CONNECTION ESTABLISHED');
  });
  db.on('error',function(err) {
      console.log('database error', err);
  });
  db.ballots.findOne({},function(err,doc){
    if (err) throw err;
    var message = _.isEmpty(doc) ? '[DB]: Connection Failed':'[DB]: Connected';
    console.log(message);
  });

  app.use(compression());
  app.use(cookieParser());
  // TODO: Add favicon.
  // app.use(favicon('assets/img/favicon.ico'))
  // TODO: Move to CDN.
  app.use('/build', express.static('build'));
  app.use('/assets', express.static('assets'));

  app.post('/humans',(req,res) =>{
    createNewSession().then(function(sessionId){
      res.cookie('sid',sessionId,{maxAge:60000,httpOnly:true,path:'/'});
      res.json({ok:true,sequence:blankBallot});
    }).catch(function(err){
      console.log(err);
      res.json({ok:false});
    });
  });

  app.get('/all-candidates',(req,res)=>{
    res.json({data:['clinton','bush']});
  });

  app.get('*', (req, res) => {
    const acceptsLanguages = req.acceptsLanguages(config.appLocales);
    render(req, res, acceptsLanguages || config.defaultLocale)
      .catch((error) => {
        const msg = error.stack || error;
        console.log(msg);
        res.status(500).send('500: ' + msg);
      });
    /*var sid = req.cookies.sid;
    checkSessionId(sid).then(()=>{
      console.log('found sid');
    }).catch(()=>{
      console.log('no sid');
      req.path = '/';
    }).finally(()=>{
      
    });*/

    
    
  });

  app.listen(config.port);

  console.log(`App started on port ${config.port}`);

  function createNewSession(res){
    var sessionId = uuid.v4();
    var newData = {_id:sessionId,
                  votes:blankBallot};
    return new Promise(function(resolve,reject){
      db.ballots.insert(newData,function(err,doc){
        if(err){
          reject(err);
        } else {
          resolve(sessionId);
        }
      });
    });
  }

  function checkSessionId(id){
    return new Promise((resolve,reject)=>{
      if(!id){
        reject();
      } else {
        db.ballots.findOne({_id:id},(err,doc)=>{
          if(err || doc===null){
            reject(err);
          } 
          resolve();
        });
      }
    });
  }

}


