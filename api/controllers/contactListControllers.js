'use strict'
var mongoose = require('mongoose')
Contact = mongoose.model('Contacts')

exports.listAllContacts = function(req, res){
    var query = { sort: { cid: 1 } }
    Contact.find({}, null, query, function(err, contact){
        if(err) throw err
        res.json(contact)
    })
}

exports.createAContacts = function(req, res){
    var newContact = new Contact(req.body)
    // console.log(req.body)
    newContact.save(function(err, contact){
        if(err) throw err
        const response = {
            cid: contact.cid,
            firstname: contact.firstname,
            lastname: contact.lastname,
            email: contact.email,
            mobile: contact.mobile,
            facebook: contact.facebook,
            imageUrl: contact.imageUrl
        }
        console.log(response)
        res.json(contact)
    })
}

exports.readAContacts = function(req, res){
    // console.log(req.params.contactId)
    Contact.findById(req.params.contactId, function(err, contact){
        if(err) throw err
        res.json(contact)
    })
}

exports.deleteAContacts = function(req, res){
    //console.log(req.params.contactId)
    Contact.findByIdAndRemove(req.params.contactId, function(err, contact){
        if(err) throw err
        const response = {
            message: "This contact has been deleted",
            firstname: contact.firstname
        }
        console.log(response)
        res.json(contact)
    })
}

exports.updateAContacts = function(req, res){
    // console.log(req.params.contactId)
    var newContact = {}
    newContact = req.body
    // console.log(newContact)
    Contact.findByIdAndUpdate(req.params.contactId, newContact, {new: true}, function(err, contact){
        if(err) throw err
        // console.log(contact)
        const response = {
            cid: contact.cid,
            firstname: contact.firstname,
            lastname: contact.lastname,
            email: contact.email,
            mobile: contact.mobile,
            facebook: contact.facebook,
            imageUrl: contact.imageUrl
        }
        console.log(response)
        res.json(contact)
    })
}