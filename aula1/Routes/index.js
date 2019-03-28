const express = require ('express');
const router = express.Router();
const auth = require('../middlewares/auth');


router.get('/', auth,(req, res) => {
    console.log(res.locals.auth_data);
    return res.status(401).send({menssage: 'Essa informação é muito importante. Usuarios não autorizados não deveriam recebê-la!!'});

});
router.post('/', (req, res) => {
    return res.send({menssage: 'tudo ok com o método POST da raiz!'});
});

module.exports = router;