const { Router } = require('express');
const router = Router ();

//routes

router.get('/test', (req,res) => {
    const data = {
        "name": "mozambique",
        "id": 3
    }
    res.json(data);
});


module.exports = router;