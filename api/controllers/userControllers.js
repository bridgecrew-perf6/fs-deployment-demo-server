'use strict'
var mongoose = require('mongoose')
User = mongoose.model('Users')

exports.listAllContacts = function(req, res){
    var query = { sort: { username: 1 } }
    User.find({}, null, query, function(err, user){
        if(err) throw err
        res.json(user)
    })
}

exports.readAContacts = function(req, res){
    // console.log(req.params.username)
    User.find({"username":req.params.username}, function(err, user){
        if(err) throw err
        res.json(...user)
    })
}