const express= require('express')
const role_controller = require('../../controllers/role/role.contoller')

const role_router= express.Router()

role_router.get("/", role_controller.getRoles)
role_router.get("/:ID_ROLE", role_controller.findRole)
role_router.post("/",role_controller.createRoles)
// sequelize_router.post("/",sequelize_controller.createUtilisateurs)
role_router.put("/:ID_ROLE",role_controller.updateRole)
role_router.delete("/:ID_ROLE",role_controller.deleteRole)

module.exports=role_router