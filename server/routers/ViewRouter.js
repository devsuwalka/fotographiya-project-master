const Project = require('../model/ProjectModel')

const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('Pages/LoginPage')
})

router.get('/index', async (req, res) => {
    const pending = await Project.find()
    res.render('Pages/index',
        {
            pending,
            title: 'Pending'
        },

    )
})


router.get('/AddProject', (req, res) => {
    res.render('Pages/AddProject')
})


router.get('/Pending', async (req, res) => {
    const pending = await Project.find()
    res.render('Pages/Pending',
        {
            pending,
            title: 'Pending'
        },

    )
})

router.get('/Cuurent', async (req, res) => {
    res.render('Pages/Cuurent')
})
router.get('/UpdateProject', async (req, res) => {
    const { id } = req.query
    // console.log("id.", id);
    const pending = await Project.findById(id)
    res.render('pages/UpdateProject', {
        pending,
        title: "UpdateProject"
    })
})



module.exports = router