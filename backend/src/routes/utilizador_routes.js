const express = require('express');
const router = express.Router();

//importer os controladores [2]
const user_controller = require('../controllers/user_controller');

router.get('/list',user_controller.list );
router.post('/registar',user_controller.registar );
router.get('/get/:id', user_controller.pesquisa);

router.post('/adicionar',user_controller.adicionar );

router.post('/atualizar/:id', user_controller.atualizar);

router.post('/apagar', user_controller.apagar);

router.post('/login',user_controller.entrar);

router.get('/linguagem',user_controller.linguagem);
router.get('/linguagem1',user_controller.linguagem1);
router.get('/linguagem2',user_controller.linguagem2);
router.get('/linguagem3',user_controller.linguagem3);


router.get('/save', (req, res) => {
    res.json({ status: 'guardado' });
});
module.exports = router;