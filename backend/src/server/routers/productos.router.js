import { Router } from 'express'
// import * as usuariosController from '../controllers/usuarios.controller.js'
import * as productosController from '../controllers/productos.controller.js'

const router = Router()

router.get('/productos', productosController.findAll)
router.get('/productos/:id', productosController.findById)
router.post('/productos', productosController.create)
router.put('/productos/:id', productosController.updateById)
router.delete('/productos/:id', productosController.deleteById)

export default router

// import { Router } from 'express'
// import * as medicamentosController from '../controllers/medicamentos.controller.js' SOLO DEJAR SI ES USUARIO CON TOKEN
// import { authToken } from '../middlewares/medicamentos.middleware.js'

// const router = Router()

// router.get('/medicamentos', authToken, medicamentosController.findAll)
// router.get('/medicamentos/:id', authToken, medicamentosController.findById)
// router.post('/medicamentos', authToken, medicamentosController.create)
// router.put('/medicamentos/:id', authToken, medicamentosController.updateById)
// router.delete('/medicamentos/:id', authToken,medicamentosController.deleteById)

// export default router
