const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Lands extends Model {}

Lands.init(
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
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: "lands",
  }
);

module.exports = Lands;
