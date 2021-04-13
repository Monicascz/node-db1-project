//pull in all the knex and store inside db
const db = require("../../data/db-config.js")

const getAll = () => {
    //select * from accounts <table name> is basically what the next line says. 
  return db("accounts")
}

const getById = id => {
  return db("accounts").where("id",id).first()
}

const create = account => {
  return db("accounts").insert(account)
  .then(([id])=>{
    return db("accounts").where("id",id).first()
  })
}

const updateById = (id, account) => {
  const accountId = id

  return db("accounts").where("id",id).update(account)
  .then(()=>{
    return db("accounts").where("id",accountId).first()
  })
}

const deleteById = id => {
  return db("accounts").where("id",id).del(id)
  .then(()=>{
    return db("accounts")
  })
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
