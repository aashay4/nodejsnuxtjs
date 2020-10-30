const { Router } = require('express')

const router = Router()

// Initialize Controller
const articlesController = require('../controllers/articlesController')


router.post('/sites', articlesController.sites)
router.post('/crawll', articlesController.crawll)
router.post('/sendmail', articlesController.sendmail)
router.post('/singlecrawl', articlesController.singlecrawl)
router.post('/fullcrawl', articlesController.fullcrawl)

module.exports = router
