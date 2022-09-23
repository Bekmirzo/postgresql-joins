const pool = require('../modules/postgres');

const sql = 'SELECT users.id, users.fullname, users.email, cars.brand, cars.model FROM users INNER JOIN cars ON users.car_id= cars.id;';

module.exports = async (req, res) => {
    try {
        pool.query(sql, (err, data) => {
            if(!err){
                res.status(200).json({
                    ok: true,
                    rows: data.rows,
                    sql: sql
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