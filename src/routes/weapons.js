const {Router} = require ('express');
const router = Router ();

const weaponz = require('../sample.json');
console.log(weaponz)
router.get('/', (req, res) => {
    res.send(weaponz)
})

router.post('/',(req,res) => {
    console.log('REQ', req.body);
    const {name, Damage } = req.body
    if( name && Damage){
        let id = weaponz.length + 1;
        const newWeapon = {id, ...req.body};
        console.log('NEW', newWeapon)
        weaponz.push(newWeapon)
        res.json(weaponz);
    }else{
        res.send('Wrong');
    }
   
})

module.exports = router