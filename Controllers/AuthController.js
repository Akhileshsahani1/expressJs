const Users = require('../Models/User');
const {check, validationResult} = require('express-validator');


const create = async (req, res) => { // try {
    const errors = validationResult(req);

    // If some error occurs, then this
    // block of code will run
    if (! errors.isEmpty()) {
        return res.json(errors)
    } else {


        // If no error occurs, then this
        // block of code will run
        // else {
        //     res.send("Successfully validated")
        // }

        const {name, email, password} = req.body;
        // console.log(name, "kdlfgg");
        const data = await Users.create({name, email, password});
        if (data) {
            return res.status(200).json({status: true, data: data});
        }
    }


    // } catch (error) {
    //     return res.status(409).json({status: false, err: error});

    // }

}

const dataup = async (req, res) => {
    const error = validationResult(req);
    if (! error.isEmpty()) {
        return res.json(error);
    } else {
        const {id, name, email, password} = req.body;
        console.log(id, "dkfjgklhjlk");

        const data = await Users.update({
            name,
            email,
            password
        }, {
            where: {
                id: id
            }
        });
        if (data) {
            return res.status(200).json({status: true, message: "data updated successfully"});

        }

    }

    //     return res.status(200).json({status: false, message: "failed to update data."});

    // }


}

const userdelete = async (req, res) => {
    try {
        const data = await Users.destroy({
            where: {
                id: req.body.id
            }
        });
        if (data) {
            return res.status(200).json({status: true, "message": "data deleted successfully"});


        }
    } catch (error) {
        return res.status(500).json({"message": "something went wrong"});
    }
}

const allusers = async (req, res) => {
    try {
        const data = await Users.findAll();
        return res.status(200).json({status: true, data: data});

    } catch (error) {
        return res.status(500).json({status: true, message: "some thing went wrong"});

    }

}

module.exports = {
    create,
    dataup,
    userdelete,
    allusers


}
