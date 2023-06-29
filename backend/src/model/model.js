const { Sequelize, DataTypes, Model } = require("sequelize")

const sequelize = new Sequelize('empleado', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    define: {
        timestamps: false
    }
});


class empleado extends Model { }

empleado.init({
    
    id_empleados: {
        type: DataTypes.UUID,
        primaryKey:true,
        autoIncrement: true,
    },
    nombre_empleados: {
        type: DataTypes.STRING,
        allowNull:false
        
    },
    fecha_empleados: {
        type: DataTypes.DATEONLY,
        allowNull:false
        
    },
    entrada_empleados:{
        type: DataTypes.TIME,
        allowNull:false
    },
    salida_empleados:{
        type: DataTypes.TIME,
        allowNull:false

    }

}, {
   
    sequelize, 
    modelName: 'empleado',

});

module.exports = empleado;

//console.log(Empleado === sequelize.models.Empleado); // true

/*async function testconection(){
  try {
      await sequelize.authenticate();
      console.log('conexion exitosa.');
    } catch (error) {
      console.error('fallo la conexion', error);
    }
}

testconection();*/