var express = require('express');
var router = express.Router();
//引入数据库包
const connectPg = require('./connectPg.js');

/* 登陆接口 */
router.get('/',function(req, res){
    //var name = req.param.name;
    //var password = req.param.password;
  //req.body.password
  
    //console.log(name, password);
    //connectPg.getConnection();
    //var sqlstr = 'select * from users ';//where name=' + name + ' and password=' + password;

    connectPg.select('users',{},[], (data)=>{
        res.send(data);
    });
  });
  module.exports = router;