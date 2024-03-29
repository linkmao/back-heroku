module.exports = (sequelize,type)=>{
	return sequelize.define ('user',{
		id:{
			type: type.INTEGER,
			primaryKey:true,
			allowNull:false,
			autoIncrement:true
		},
		name: type.STRING,
		email: type.STRING,
		password: type.STRING,
		rol: type.STRING
	});
}