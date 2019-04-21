const Brand = require('../models/Brand');

module.exports = {
    create: async (req, res) => {
        let { name } = req.body;
        let validated = validateBrand(name, res);

        
        if(validated) {
            try {
                let result = await Brand.create({ name });

                res.status(200).json( { msg: 'Successfully added a new brand!'});
            } catch(err) {
                console.log(err);
                res.status(500).json( { msg: 'An error occurred while trying to create a new brand!', hasError: true});
            }
        }
    },
    getAll: async (req, res) => {
        try {
            let brands = await Brand.find();

            console.log(brands);
            res.status(200).json( { data: brands, msg: 'Successfully get all the brands!'});
        } catch(err) {
            console.log(err);
            res.status(500).json( { msg: 'An error occurred while trying to get all the brands!', hasError: true});
        }
    },
    editGet: async (req, res) => {
        let { id } = req.params;
        let tag = null;

        if(!id) {
            return res.json({ msg: 'Please, provide an id!', hasError: true});
        }

        try {
            tag = await Tag.findById(id);
        } catch(err) {
            console.log(err);
            return res.json({ msg: 'An error occurred while trying to get a tag!', hasError: true});
        }

        if(!tag) {
            return res.json({ msg: 'This tag does not exist!', hasError: true});
        }

        res.json({
            msg: 'Here is the tag you have requested!',
            tag
        });
    },
    editPost: async (req, res) => {
        let { id } = req.params;
        let { title } = req.body;
        let tag = null;
        let validated = validateTag(title, res);

        if(!id) {
            return res.json({ msg: 'Please, provide an id!', hasError: true});
        }

        try {
            tag = await Tag.findById(id);
        } catch(err) {
            console.log(err);
            return res.json({ msg: 'An error occurred while trying to get a tag!', hasError: true});
        }

        if(!tag) {
            return res.json({ msg: 'This tag does not exist!', hasError: true});
        }
        
        if(validated) {
            tag.title = title;
            try {
                let result = await tag.save();
                res.status(200).json( { msg: 'Successfully edited the tag!'});
            } catch(err) {
                console.log(err);
                res.status(500).json( { msg: 'An error occurred while trying to save the edited tag!', hasError: true});
            }
        }
    },
    changeActiveStatus: async(req, res) => {
        let { id } = req.params;
        let brand = null;

        if(!id) {
            return res.json({ msg: 'Please, provide an id!', hasError: true});
        }

        try {
            brand = await Brand.findById(id);
        } catch(err) {
            console.log(err);
            return res.json({ msg: 'An error occurred while trying to get a brand!', hasError: true});
        }

        if(!brand) {
            return res.json({ msg: 'This brand does not exist!', hasError: true});
        }

        let isActive = brand.isActive;

        brand.isActive = !isActive;

        try {
            let result = await brand.save();

            console.log(result);
            res.status(200).json( { msg: 'Successfully change status of the brand!'});
        } catch(err) {
            console.log(err);
            res.status(500).json( { msg: 'An error occurred while trying to change the status of a brand!', hasError: true});
        }
    }
}

function validateBrand(name, res) {
    let errors = {};

    if(name === undefined || (!name && typeof name !== "string")) {
        errors.name = 'Please, provide a name of the brand!';
    } else if(name.length < 1 || name.length > 50) {
        errors.name = 'Name should be between 1 and 50 characters long!';
    } 

    if(Object.keys(errors).length > 0) {
        res.json({errors});
        return false;
    }

    return true;
}