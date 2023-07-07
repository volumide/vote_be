import { Model, DataTypes } from "sequelize"
import sequelize from "../db.connection.js"

class PollingUnitResult extends Model {}

PollingUnitResult.init(
  {
    result_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    polling_unit_uniqueid: DataTypes.INTEGER,
    party_abbreviation: DataTypes.INTEGER,
    party_score: DataTypes.STRING,
    entered_by_user: DataTypes.STRING,
    date_entered: DataTypes.DATE,
    user_ip_address: DataTypes.STRING
  },
  { sequelize, tableName: "announced_pu_results", timestamps: false }
)

export default PollingUnitResult
