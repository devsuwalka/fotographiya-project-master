const admin = require("../model/AdminModel");

exports.login = async (req, res) => {
    // console.log(req.body);
    try {
        const { admin_pwd } = req.body
        await admin.create({ admin_pwd })
        // res.json("inserted..........")
        res.redirect('/')
    } catch (error) {
        console.log(error);
    }
}