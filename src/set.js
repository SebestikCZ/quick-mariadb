module.exports = {
    queryValue: async function (sql, conn) {
        return await conn.query(sql);
    }
}