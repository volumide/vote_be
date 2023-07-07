import { Model, DataTypes } from "sequelize"
import sequelize from "../db.connection.js"

class PollingUnit extends Model {}

PollingUnit.init(
  {
    uniqueid: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    lga_id: DataTypes.INTEGER,
    polling_unit_id: DataTypes.INTEGER,
    ward_id: DataTypes.INTEGER,
    uniquewardid: DataTypes.INTEGER,
    polling_unit_number: DataTypes.STRING,
    polling_unit_name: DataTypes.STRING,
    polling_unit_description: DataTypes.TEXT,
    lat: DataTypes.DATE,
    long: DataTypes.BOOLEAN,
    entered_by_user: DataTypes.STRING,
    date_entered: DataTypes.DATE,
    user_ip_address: DataTypes.STRING
  },
  { sequelize, tableName: "polling_unit", timestamps: false }
)

export default PollingUnit
