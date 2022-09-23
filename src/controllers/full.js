const pool = require('../modules/postgres');

const sql = 'SELECT users.id AS uid, users.fullname, cars.id AS cid, cars.brand FROM users FULL JOIN cars ON users.car_id= cars.id;';

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