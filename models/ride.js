const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ride extends Model {}

Ride.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true, 
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        land_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'lands',
                key: 'id'
            },
        },
    },    
        {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        modelName: 'post',
        }
    
);

module.exports = Ride;