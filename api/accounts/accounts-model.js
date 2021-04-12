//pull in all the knex and store inside db
const db = require("../../data/db-config.js")

const getAll = () => {
  // DO YOUR MAGIC
  //select * from accounts <table name>
  return db("accounts")
}

const getById = id => {
  // DO YOUR MAGIC
}

const create = account => {
  // DO YOUR MAGIC
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
