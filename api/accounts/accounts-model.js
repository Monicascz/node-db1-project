//pull in all the knex and store inside db
const db = require("../../data/db-config.js")

//try to avoid using raw sql in our code. BUT it is better ot use the query builder 
//so we need to use the query wrapper from db-config. with the code above.

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
//Another way to do create from Gabe's solution code
// const create = async account => {
//   const [id]= await db('accounts').insert(account)
//  return getById(id)
// }


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
