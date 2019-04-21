const HalfShoes = require('../models/HalfShoes');

module.exports = {
    create: async (req, res) => {
        let { title, price } = req.body;

        console.log(req.body);
        try {
            let hshoe = await HalfShoes.create({
                title, price
            });

            console.log(hshoe);

            return res.json({msg: 'Successfully created new h shoes!'})
        } catch(err) {
            console.log(err);
            return res.json({
                error: err,
                hasError: error
            })
        }
    }
}