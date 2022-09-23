const pool = require('../modules/postgres');

module.exports = async (req, res) => {
    try {
        pool.query('SELECT * FROM users', (err, data) => {
            if(!err){
                res.status(200).json({
                    ok: true,
                    rows: data.rows
                })
            } else {
                console.log(err)
            }
        });
    } catch (e) {
        res.status(400).json({
            ok: false,
            message: e + ""
        })
    }
}