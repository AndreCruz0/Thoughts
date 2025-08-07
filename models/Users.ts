import { DataTypes } from "sequelize";
import { conn } from '../db/conn'
export const  Users = conn.define('Users' , {
    name : {
        type : DataTypes.STRING,
        allowNull : false
    } ,
    email :{
        type  :DataTypes.STRING,
        allowNull : false 

    },
    password  : {
        type : DataTypes.STRING, 
        allowNull : false 
    },
    
})