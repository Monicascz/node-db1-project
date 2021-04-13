const router = require('express').Router();
const mw = require('./accounts-middleware.js');


const Accounts = require("./accounts-model.js");

router.get('/', async (req, res, next) => {
  try {
    const data = await Accounts.getAll()
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', mw.checkAccountId, async (req, res, next) => {
  try{
    const {id} = req.params
    const data = await Accounts.getById(id)
    res.json(data)
    }catch(err){
    next(err)
  }
})

// ✕ trims the leading and trailing whitespace in the name of the new account (15 ms)
// ✕ responds with a 400 and proper error if name or budget are undefined (12 ms)
// ✕ responds with a 400 and proper error if name is not a string (12 ms)
// ✕ responds with a 400 and proper error if name is too short or too big (after trimming) (13 ms)
// ✕ responds with a 400 and proper error if budget is not a number (12 ms)
// ✕ responds with a 400 and proper error if budget is negative or too big (12 ms)
// ✕ responds with a 400 and proper error if name already exists in the db (11 ms)
router.post('/', async (req, res, next) => {
  const account = req.body
  try{
    const data = await Accounts.create(account)
    res.status(201).json(data)
  }catch(err){
    next(err)
  }
})

router.put('/:id', mw.checkAccountId, mw.checkAccountPayload, async (req, res, next) => {
  try{
    const {id} = req.params
    const account = req.body
    const data = await Accounts.updateById(id, account)
    res.status(200).json(data)
  }catch(err){
    next(err)
  }
});

router.delete('/:id', mw.checkAccountId, async (req, res, next) => {
  try{
    const {id} = req.params
    const data = await Accounts.deleteById(id)
    res.status(200).json(data)
  }catch(err){
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(500).json({message: err.message, stack:err.stack})
})

module.exports = router;
