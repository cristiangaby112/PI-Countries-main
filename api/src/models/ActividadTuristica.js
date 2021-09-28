const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('actividadturistica', {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Dificultad: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Duracion: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Temporada:{
            type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
            allowNull: true,
        }
    })
}