
const express = require("express")
let router = express.Router()
let userController = require("../controllers/userController")
let productController = require("../controllers/productController")
let cartController = require("../controllers.cartController")
let {authentication,authorization_user} = require("../middleware/auth")


//<<<<<<<<<<<<<<===============[User API's]=============>>>>>>>>>>>>>>>>>>>>//

router.post('/register', userController.createUser)
router.post('/login', userController.login)
router.get('/user/:userId/profile', authentication, authorization_user, userController.getUser)
router.put("/user/:userId/profile",authentication, authorization_user, userController.update)

//<<<<<<<<<<<<<<===============[Product API's]================>>>>>>>>>>>>>>>//

router.post('/products', productController.createProduct)
router.get('/products', productController.getByQuery)
router.get("/products/:productId", productController.getProductsById)
router.put('/products/:productId', productController.updateProduct)
router.delete('/products/:productId', productController.deleteProduct)

//<<<<<<<<<<<<<<===============[Cart API's]================>>>>>>>>>>>>>>>//


router.get("/users/:userId/cart",middleware.authentication,cartController.getCart)
router.delete("/users/:userId/cart",middleware.authentication,cartController.deleteCart)

module.exports = router;