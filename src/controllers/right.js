const pool = require('../modules/postgres');

const sql = `SELECT cars.id, cars.brand, cars.model, users.fullname FROM users RIGHT JOIN cars ON users.car_id= cars.id ORDER BY cars.id;`;

module.exports = async (req, res) => {
    try {
        pool.query(sql, (err, data) => {
            if(!err){
                res.status(200).json({
                    ok: true,
                    sql: sql,
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