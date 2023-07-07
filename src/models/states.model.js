import { Model, DataTypes } from "sequelize"
import sequelize from "../db.connection.js"

class State extends Model {}

State.init(
  {
    state_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    state_name: DataTypes.STRING
  },
  { sequelize, tableName: "states", paranoid: true }
)

export default State
