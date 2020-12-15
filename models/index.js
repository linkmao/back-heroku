const Sequelize = require ('sequelize');
const UserModel = require('./users');

const sequelize = new Sequelize('ybpyhNHSdG','ybpyhNHSdG','GGSlemUdBU',{
	host: 'remotemysql.com',
	port: '3306',
	dialect: 'mysql'

});

const User = UserModel(sequelize,Sequelize);

sequelize.sync({force:false}).then(()=>{
	console.log('Tablas sincronozadas');
});

module.exports = {User}