const {Day, Employee, Item, Transaction} = require(`../models`)

class Controller {    
    static getItems(req, res){
        Item.findAll()
        .then((data)=>{
            // res.send(`ahahha`)
            res.render(`items`, {data})
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static addItem(req, res){
        res.render(`itemAdd`)
    }
    
    static postAddItem(req, res){
        Item.create({name:req.body.name, description:req.body.description, price:req.body.price, stock:req.body.stock})
        .then((data)=>{
            res.redirect(`/items`)
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static editItem(req, res){
        Item.findAll({where:{id : req.params.id}})
        .then((data)=>{
            res.render(`itemEdit`, {data})
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static postEditItem(req, res){
        Item.update({name:req.body.name, description:req.body.description, price:req.body.price, stock:req.body.stock}, {where:{id:req.params.id}})
        .then((data)=>{
            res.redirect(`/items`)
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static deleteItem(req, res){
        Item.destroy({where:{id:req.params.id}})
        .then((data)=>{
            res.redirect(`/items`)
        })
        .catch((err)=>{
            res.send(err)
        })
    }

//employee
    static getEmployees(req, res){
        Employee.findAll({order: [['id','ASC']]})
        .then((data)=>{
            res.render(`employees`, {data})
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static addEmployees(req, res){
        res.render('employeesAdd')
    }

    static postAddEmployees(req,res){
        Employee.create({name: req.body.name, salary: req.body.salary, position: req.body.position, start_date: new Date})
        .then( () => {
            res.redirect('/employees')
        })
        .catch( (err) => {
            res.send(err)
        })
    }

    static editEmployees(req,res){
        Employee.findAll({where:{id : req.params.id}})
        .then((data) => {
            res.render('employeesEdit', {data})
        })
        .catch( (err) => {
            res.send(err)
        })
    }

    static PostEditEmployees(req,res){
        Employee.update({name: req.body.name,salary:req.body.salary,position:req.body.position},{where:{id: req.params.id}})
        .then( () =>{
            res.redirect('/employees')
        })
        .catch( (err) =>{
            res.send(err)
        })
    }

    static deleteEmployees(req,res){
        Employee.destroy({where:{id:req.params.id}})
        .then( () => {
            res.redirect('/employees')
        })
        .catch( (err) =>{
            res.send(err)
        })
    }
}




module.exports = Controller