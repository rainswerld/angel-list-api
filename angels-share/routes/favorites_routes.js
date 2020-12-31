const express = require('express')
const passport = require('passport')

const Favorites = require('../models/favorites')

const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404

const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')

const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// GET all whiskeys
router.get('/favorites', requireToken, (req, res, next) => {
  Favorites.find().populate('owner')
    .then(whiskeys => {
      return whiskeys.map(whiskey => whiskey.toObject())
    })
    .then(whiskeys => res.status(200).json({ whiskeys: whiskeys }))
    .catch(next)
})

// CREATE whiskey
// router.post('/favorites', requireToken, (req, res, next) => {
//   req.body.whiskey.owner = req.user.id
//
//   Whiskey.create(req.body.whiskey)
//     .then(whiskey => {
//       res.status(201).json({ whiskey: whiskey.toObject() })
//     })
//     .catch(next)
// })

// SHOW one whiskey
// router.get('/whiskeys/:id', requireToken, (req, res, next) => {
//   Whiskey.findById(req.params.id)
//     .then(handle404)
//     .then(whiskey => res.status(200).json({ whiskey: whiskey.toObject() }))
//     .catch(next)
// })

// UPDATE whiskey
// router.patch('/whiskeys/:id', requireToken, removeBlanks, (req, res, next) => {
//   delete req.body.whiskey.owner
//
//   Whiskey.findById(req.params.id)
//     .then(handle404)
//     .then(whiskey => {
//       requireOwnership(req, whiskey)
//       return whiskey.updateOne(req.body.whiskey)
//     })
//     .then(() => res.sendStatus(204))
//     .catch(next)
// })

// DELETE whiskey
// router.delete('/whiskeys/:id', requireToken, (req, res, next) => {
//   Whiskey.findById(req.params.id)
//     .then(handle404)
//     .then(whiskey => {
//       requireOwnership(req, whiskey)
//       whiskey.deleteOne()
//     })
//     .then(() => res.sendStatus(204))
//     .catch(next)
// })

module.exports = router
