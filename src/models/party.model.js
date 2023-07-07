import { Model, DataTypes } from "sequelize"
import sequelize from "../db.connection.js"

class Party extends Model {}

Party.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    partyid: DataTypes.STRING,
    partyname: DataTypes.STRING
  },
  { sequelize, tableName: "party", timestamps: false }
)

export default Party
