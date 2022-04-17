'use strict'
module.exports = function(app){
    var contactList = require('../controllers/contactListControllers.js')

    app.route('/contacts')
        .get(contactList.listAllContacts)
        .post(contactList.createAContacts)

    app.route('/contacts/:contactId')
        .get(contactList.readAContacts)
        .delete(contactList.deleteAContacts)
        .post(contactList.updateAContacts)
}