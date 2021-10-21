const mongoose = require('mongoose');
const member = require('./models/member');
const Member = require('./models/member');

mongoose.connect('mongodb://localhost:27017/familycli', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(function(error) { console.log(error) });


const addMember = (member) => {
    Member.create(member)
        .then(member => {
            console.info('New Member Added');
            mongoose.disconnect();
        }).catch(function(error) {
            console.log(error)
        });
}

const findMember = (name) => {
    const search = new RegExp(name, 'i');
    Member.find({ $or: [{ firstname: search }, { lastname: search }] })
        .then(member => {
            console.info(member);
            console.info(`${member.length} matches`);
            mongoose.disconnect();
        }).catch(function(error) {
            console.log(error)
        })

}

const updateMember = (_id, member) => {
    Member.updateOne({ _id }, member)
        .then(member => {
            console.info('Member Updated');
            mongoose.connection.close();
        }).catch(function(error) {
            console.log(error);
        })
}

const removeMember = (_id) => {
    Member.remove({ _id })
        .then(member => {
            console.info('Member Removed');
            mongoose.connection.close();
        }).catch(function(error) {
            console.log(error);
        })
}

const listMembers = () => {
    Member.find()
        .then(members => {
            console.info(members);
            console.info(`${members.length} members found in database`)
            mongoose.connection.close();
        })
}
module.exports = {
    addMember,
    findMember,
    updateMember,
    removeMember,
    listMembers
}