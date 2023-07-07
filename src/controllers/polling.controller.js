import { Sequelize } from "sequelize"
import Lga from "../models/lga.model.js"
import PollingUnit from "../models/polling_unit.model.js"
import PollingUnitResult from "../models/pu_result.model.js"
import sequelize from "../db.connection.js"
import Party from "../models/party.model.js"

Lga.hasMany(PollingUnit, { foreignKey: "lga_id", sourceKey: "uniqueid" })
PollingUnit.hasMany(PollingUnitResult, { foreignKey: "polling_unit_uniqueid", sourceKey: "uniqueid" })

export const getPollingUnits = async (req, res) => {
  try {
    const dt = await PollingUnit.findAll()
    return res.status(200).json({
      response: dt,
      status: "success"
    })
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "",
      error: error
    })
  }
}

export const pollingResult = async (req, res) => {
  try {
    const dt = await PollingUnitResult.findAll({ where: { polling_unit_uniqueid: req.params.polling_id } })
    return res.status(200).json({
      response: dt,
      status: "success"
    })
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "",
      error: error
    })
  }
}

export const getLocalGovernmentResults = async (req, res) => {
  try {
    const dt = await Lga.findOne({
      where: { "uniqueid": req.params.id },
      include: [
        {
          model: PollingUnit,
          include: [
            {
              model: PollingUnitResult
            }
          ]
        }
      ]
    })
    let total = 0

    dt?.["PollingUnits"].forEach((e) => e?.PollingUnitResults.forEach((v) => (total += v.party_score)))

    return res.status(200).json({
      status: "success",
      total: total,
      response: dt
    })
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "",
      error: error
    })
  }
}

export const getLocalGovernment = async (req, res) => {
  try {
    const dt = await Lga.findAll()
    return res.status(200).json({
      status: "success",
      response: dt
    })
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "",
      error: error
    })
  }
}

export const newPollingResult = async (req, res) => {
  try {
    await Lga.create(req.body)
    return res.status(200).json({
      status: "success",
      response: req.body
    })
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "",
      error: error
    })
  }
}

export const allParty = async (req, res) => {
  try {
    const response = await Party.findAll()
    return res.status(200).json({
      status: "success",
      response
    })
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "",
      error: error
    })
  }
}
