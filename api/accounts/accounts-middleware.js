const Accounts = require("./accounts-model.js");
const db = require('../../data/db-config.js')

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const error = {status: 400}
  const {name,budget} = req.body
  if(name === undefined || budget === undefined){
    error.message = "name and budget are required"
  }else if(typeof name !== 'string'){
    error.message = "name of account must be a string"
  }else if(name.trim().length < 3 || name.trim().length > 100){
    error.message = "name of account must be between 3 and 100"
  }else if(typeof budget !== 'number' || isNaN(budget)){ // NaN type is actually a number
    error.message = "budget of account must be a number"
  } else if(budget < 0 || budget > 1000000){
    error.message = "budget of account is too large or too small"
  }
   if (error.message){
     next(error)
   }else{
     next()
   }
  }


exports.checkAccountNameUnique = async(req, res, next) => {
  try{
    const existing = await db("accounts").where('name', req.body.name.trim()).first()
    if(existing){
      res.status(400).json({message: "that name is taken"})
    }
  }catch(err){
    next(err)
  }
}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const accountExists = await Accounts.getById(req.params.id)
    if(accountExists){
      req.accountExists = accountExists
      next()
    }else{
      res.status(404).json({message: "account not found"})
    }
  }catch(err){
    next(err)
  }
}
