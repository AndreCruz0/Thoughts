import { Sequelize } from "sequelize";

export const conn = new Sequelize('thoughts' , 'root' , '' ,{
    host : 'localhost' ,
    dialect : 'mysql' 
})
try{

    conn.authenticate()
    console.log("Conectou ao MYSQL!");
    

}catch(err){
console.log(`Deu erro aqui ${err}`);
    
}