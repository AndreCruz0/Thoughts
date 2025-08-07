import  { DataTypes } from 'sequelize'
import { conn } from '../db/conn'
import { Users } from './Users'
export const MindPosts = conn.define('MindPosts' , {
    title  : {
        type : DataTypes.STRING ,
        allowNull : false
    } , 

})
Users.hasMany(MindPosts)
MindPosts.belongsTo(Users)
