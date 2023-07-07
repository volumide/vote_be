import { allParty, getLocalGovernment, getLocalGovernmentResults, getPollingUnits, pollingResult } from "./controllers/polling.controller.js"

const route = (app) => {
  app.get("/lga", getLocalGovernment)
  app.get("/lga/:id", getLocalGovernmentResults)
  app.get("/polling/units", getPollingUnits)
  app.get("/polling/unit/:polling_id", pollingResult)
  app.get("/party", allParty)
}

export default route
