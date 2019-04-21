const Category = require('../models/Category');

module.exports = {
    create: async (req, res) => {
        console.log(req.body);
        let { name, slug, type } = req.body;

        console.log(name, slug, type);
        if(!validate(name, slug, type, res)) {
            return;
        }

        try {
            let category = await Category.create({name, slug, type});
            res.json({msg: 'Successfully created a new category!'})
            
        } catch(err) {
            console.log(err);
            res.json({msg: 'An error occurred while trying to create a new category', hasError: true})
        }
    },
    getAll: async (req, res) => {
        try {
            let categories = await Category.find();
            res.json({msg: 'Successfully listed all the categories!', data: categories});
        } catch(err) {
            console.log(err);
            res.json({msg: 'An error occurred while trying to get all the categories', hasError: true});
        }
    },
    editGet: async (req, res) => {
        let { id } = req.params;
        let category = null;

        if(!id) {
            return res.json({ msg: 'Please, provide an id!', hasError: true});
        }

        try {
            category = await Category.findById(id);
        } catch(err) {
            console.log(err);
            return res.json({ msg: 'An error occurred while trying to get a category!', hasError: true});
        }

        if(!category) {
            return res.json({ msg: 'This category does not exist!', hasError: true});
        }

        res.json({
            msg: 'Here is the category you have requested!',
            category
        });
    },
    changeActiveStatus: async(req, res) => {
        let { id } = req.params;
        let category = null;

        if(!id) {
            return res.json({ msg: 'Please, provide an id!', hasError: true});
        }

        try {
            category = await Category.findById(id);
        } catch(err) {
            console.log(err);
            return res.json({ msg: 'An error occurred while trying to get a category!', hasError: true});
        }

        if(!category) {
            return res.json({ msg: 'This category does not exist!', hasError: true});
        }

        let isActive = category.isActive;

        category.isActive = !isActive;

        try {
            let result = await category.save();
            res.status(200).json( { msg: 'Successfully change status of the category!'});
        } catch(err) {
            console.log(err);
            res.status(500).json( { msg: 'An error occurred while trying to change the status of a category!', hasError: true});
        }
    }
}


function validate(name, slug, type, res){
    let requiredErrs = [];

    console.log(name, slug, type);

    if(name === undefined) {
        requiredErrs.push('Please, provide a name!');
    }

    if(slug === undefined) {
        requiredErrs.push('Please, provide a slug!');
    }

    if(type === undefined) {
        requiredErrs.push('Please, provide a type!');
    }

    if(requiredErrs.length > 0) {
     res.json({ requiredErrs });
     return false;
    }

    let errors = {
        name:  validateName(name),
        slug:  validateSlug(slug),
        type:  validateType(type)
    }
    

    if(errors.name === null && errors.slug === null && errors.type === null) {
        return true;
    }

    res.json({ errors });
    return false;
}


function validateName(name) {
    if(name && (name.length >= 1 && name.length <= 50) ) {
        return null;
    }
  
    return 'Category Name should be between 1 and 50 characters';
  }
  
  function validateSlug(name) {
    if(name && (name.length >= 1 && name.length <= 100) ) {
        return null;
    }
  
    return 'Category Slug should be between 1 and 100 characters';
  }


  function validateType(type) {
    if(type !== '1' && type !== '0') {
       
        return 'The type should be either 0 or 1!';
       
      } 

      return null;
  }