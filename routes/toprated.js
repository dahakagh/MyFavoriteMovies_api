const express = require('express')
const querystring = require('querystring')
const request = require('request')
const router = express.Router()

const base_api = process.env.BASE_API
const api_key = process.env.API_KEY

router.get('/', (req, res) => {
  request.get(
    `${base_api}/movie/toprated/list?api_key=${api_key}&${querystring.stringify(
      req.query
    )}`,
    (err, response, body) => {
      if (err) return res.status(500).send({ message: err })

      return res.send(body)
    }
  )
})

module.exports = router