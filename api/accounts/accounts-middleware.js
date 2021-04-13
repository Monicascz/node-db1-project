const Accounts = require("./accounts-model.js");

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const {name,budget} = req.body
  if(name===undefined && budget===undefined){
    res.status(400).json({message:"name and budget are required"})
  }else if(typeof name !== 'string'){
    res.status(400).json({message:"name of account must be a string"})
  }else if(name.trim() < 3 || name.trim() > 100){
    res.status(400).json({message:"budget of account must be a number"})
  }else if(typeof budget !== 'number' || isNaN){ // NaN type is actually a number
    res.status(400).json({message:"budget of account must be a number"})
  } else if(budget < 0 || budget > 1000000){
    res.status(400).json({message:"budget of account is too large or too small"})
  }
    next()  
  }


exports.checkAccountNameUnique = (req, res, next) => {
  // const {name, budget} = req.body
  // next()
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
