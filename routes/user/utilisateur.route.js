const express= require('express')


const utilisateur_router= express.Router()

utilisateur_router.get("/",sequelize_controller.getUtilisateurs)
utilisateur_router.get("/:ID_UTILISATEUR ",sequelize_controller.getUtilisateurs)
// utilisateur_router.post("/",sequelize_controller.createUtilisateurs)
// utilisateur_router.put("/:ID_UTILISATEUR",sequelize_controller.updateUtilisateurs)
// utilisateur_router.delete("/:ID_UTILISATEUR",sequelize_controller.deleteUtilisateurs)

module.exports=utilisateur_router