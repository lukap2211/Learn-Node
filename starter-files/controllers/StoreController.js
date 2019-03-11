const mongoose = require('mongoose')
const Store = mongoose.module('Store')


exports.homePage = (req, res) => {
  console.log(req.name)
  res.render('index')
}

exports.addStore = (req, res) => {
  res.render('editStore', {title : 'Add store'})
}

exports.createStore = (req, res) => {
  const store = new Store(req.body)
  store.save()
}
