

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const {name,budget} = req.body
  if(name && budget){
    next()
  }else{
    res.status(400).json({message:"name and budget required"})
  }
}

// function checkPayload(req, res, next) {
//   const {title, contents} = req.body
//   if(title && contents){
//     next()
//   }else{
//     res.status(400).json({message:"title and contents required"})
//   }
// }

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
}
