const Controller = require("../controllers/controller")
const router = require(`express`).Router()


router.get(`/items`, Controller.getItems)
router.get(`/items/add`, Controller.addItem)
router.post(`/items/add`, Controller.postAddItem)
router.get(`/items/:id/edit`, Controller.editItem)
router.post(`/items/:id/edit`, Controller.postEditItem)
router.get(`/items/:id/delete`, Controller.deleteItem)



router.get(`/employees`, Controller.getEmployees) //read //done
router.get(`/employees/add`, Controller.addEmployees) //create
router.post(`/employees/add`, Controller.postAddEmployees) //create
router.get(`/employees/:id/edit`, Controller.editEmployees) //update
router.post(`/employees/:id/edit`, Controller.PostEditEmployees) //update
router.get(`/employees/:id/delete`, Controller.deleteEmployees) //delete


router.get(`/days`, Controller.getDays)

module.exports = router