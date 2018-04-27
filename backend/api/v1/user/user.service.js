const db = require("../../../db")

function storeUser(req, res) {

    let user = req.body.user;

    db.get().collection('user').find({ EmailId: user.EmailId }, { _id: 1 }).toArray((err, userInDbResponse) => {
        if (userInDbResponse.length === 0) {
            db.get().collection('user').insertOne(user, (err, response) => {
                console.log(response.ops);
                res.send({ "CreatedUser": response.ops });
            });
        } else {
            console.log("already present");
            res.send({ "error": "User Already Present" });
        }
    })

}


function getAllUsers(req, res) {
    console.log(db.get())
    db.get().collection('user').find({}).project({ _id: 0 }).toArray((err, userInDbResponse) => {
        console.log(userInDbResponse)
        res.send(userInDbResponse);
    })
}
module.exports = {
    storeUser,
    getAllUsers
}