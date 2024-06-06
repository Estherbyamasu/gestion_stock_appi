const {DataTypes} = require("sequelize")
const sequelize = require("../utils/sequelize");


const Utilisateurs = sequelize.define('utilisateurs',{
    ID_UTILISATEUR:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true},
    NOM_UTILISATEUR:{
        type:DataTypes.STRING(255),
        allowNull:false},
    PRENOM_UTILISATEUR:{
        type:DataTypes.STRING(255),
        allowNull:false},
    EMAIL_UTILISATEUR:{
        type:DataTypes.STRING(255),
        allowNull:false},
    ID_ROLE :{
        type:DataTypes.INTEGER,
        allowNull:true},
    IMAGE:{
        type:DataTypes.STRING(100),
        allowNull:false},
    MOT_DE_PASSE:{
        type:DataTypes.STRING(100),
        allowNull:false}
},{
    freezeTableName:true,
    tableName:"utilisateurs",
    timestamps:false
})

// Profils.hasMany(Utilisateurs, { foreignKey: 'ID_PROFIL' });
Utilisateurs.belongsTo(Roles,  { as: 'roles', foreignKey: "ID_ROLE" });

module.exports=Utilisateurs