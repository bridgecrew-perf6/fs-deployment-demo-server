'use strict'
module.exports = function(app){
    var contactList = require('../controllers/userControllers.js')

    app.route('/users')
        .get(contactList.listAllContacts)

    app.route('/users/:username')
        .get(contactList.readAContacts)
}