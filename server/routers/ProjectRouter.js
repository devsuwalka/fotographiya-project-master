const express = require('express')
const router = express.Router()

const projectcontroller = require('../controller/ProjectController')
const upload = require('../middleware/upload.file')

const multiplefields = [
    { name: 'wedding_face', countdown: 1 },
    { name: 'wedding_img', countdown: 30 },
]

router.post('/', upload.fields(multiplefields), projectcontroller.store)
router.get('/', projectcontroller.index)
router.delete('/:id', projectcontroller.trash)
router.put('/:id', projectcontroller.edit)

module.exports = router
