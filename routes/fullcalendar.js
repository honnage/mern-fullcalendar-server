const express = require('express')
const router = express.Router();

const { createEvent } = require('../controllers/fullcalendar')

//@Endpoint     localhost:5000/api/event
//@Method       POST
//@Acesss       Public
router.get('/event', createEvent)



module.exports = router;