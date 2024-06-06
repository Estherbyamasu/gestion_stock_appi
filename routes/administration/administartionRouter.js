const express = require('express')
const utilisateurs_routes = require('./utilisateurs.routes')
const categorie_router = require('../categorie/categories.route')
const produit_router = require('../produit/produit.route')
const client_router = require('../client/client.route')
const role_router = require('../role/role.route')
//const categorie_router=require('././categories.route')
const administrationRouter = express.Router()

administrationRouter.use('/utilisateurs', utilisateurs_routes)

administrationRouter.use('/categorie', categorie_router)
administrationRouter.use('/produit', produit_router)
administrationRouter.use('/client', client_router)
administrationRouter.use('/role', role_router)


module.exports = administrationRouter