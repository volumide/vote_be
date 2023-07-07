import Sequelize from "sequelize"

const option = {
  host: "localhost",
  dialect: "mysql",
  port: 3306
}

const sequelize = new Sequelize("bincom", "root", "root", option)
try {
  await sequelize.authenticate()
  console.log("connected")
} catch (error) {
  console.log(error)
}

export default sequelize
