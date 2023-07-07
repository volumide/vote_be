import { Model, DataTypes } from "sequelize"
import sequelize from "../db.connection.js"

class Lga extends Model {}

Lga.init(
  {
    uniqueid: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    lga_id: DataTypes.INTEGER,
    state_id: DataTypes.INTEGER,
    lga_name: DataTypes.STRING,
    lga_description: DataTypes.TEXT,
    entered_by_user: DataTypes.STRING,
    date_entered: DataTypes.DATE,
    user_ip_address: DataTypes.STRING
  },
  { sequelize, tableName: "lga", timestamps: false }
)

export default Lga
