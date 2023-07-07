import express, { json } from "express"
import cors from "cors"
import connect from "./src/db.connection.js"
import route from "./src/routes.js"
const PORT = 5000
const app = express()

app.use(json())
app.use(cors({ origin: "*" }))

connect.sync()
route(app)
app.listen(PORT, () => console.log("app is listening to port " + PORT))
