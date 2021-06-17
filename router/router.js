const Controller = require("../controllers/controller")
const router = require(`express`).Router()


router.get(`/items`, Controller.getItems)
router.get(`/items/add`, Controller.addItem)
router.post(`/items/add`, Controller.postAddItem)
router.get(`/items/:id/edit`, Controller.editItem)
router.post(`/items/:id/edit`, Controller.postEditItem)
router.get(`/items/:id/delete`, Controller.deleteItem)



router.get(`/employees`, Controller.getEmployees) 
router.get(`/employees/add`, Controller.addEmployees)
router.post(`/employees/add`, Controller.postAddEmployees) 
router.get(`/employees/:id/edit`, Controller.editEmployees)
router.post(`/employees/:id/edit`, Controller.PostEditEmployees)
router.get(`/employees/:id/delete`, Controller.deleteEmployees)


router.get(`/days`, Controller.getDays)
router.get(`/days/add`, Controller.addDays)
router.post(`/days/add`, Controller.PostAddDays)

router.get('/transaction', Controller.transaksi)
// router.get('/transaction/add', Controller)
router.get('/transaction/:id/edit', Controller.editTransaksi)
router.post('/transaction/:id/edit', Controller.postEditTransaksi)

module.exports = router 