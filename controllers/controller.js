const {Day, Employee, Item, Transaction} = require(`../models`)

class Controller {    
    static getItems(req, res){
        Item.findAll()
        .then((data)=>{
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

    // static getDays(req, res){
    //     let output = []
    //     Day.findAll({include:Employee})
    //     .then((data)=>{
    //         for(let employee of data){
    //             employee.dataValues.Employee = employee.dataValues.Employee.dataValues
    //             employee.dataValues.date = employee.dataValues.date.toDateString()
    //             output.push(employee.dataValues)
    //         }
    //         res.render(`days`, {output})
    //     })
    //     .catch((err)=>{
    //         res.send(err)
    //     })
    // }

    // Cobain distinct values
    static getDays(req, res){
        let output = []
        Day.findAll({include:Employee})
        .then((data)=>{
            for(let employee of data){
                employee.dataValues.Employee = employee.dataValues.Employee.dataValues
                employee.dataValues.date = employee.dataValues.date.toDateString()
                output.push(employee.dataValues)
            }
            res.render(`days`, {output})
        })
        .catch((err)=>{
            res.send(err)
        })
    }


    static addDays(req,res){
        Employee.findAll()
        .then( (result) => {
            res.render('addDays', {result})
        })
        .catch( (err) => {
            res.send(err)
        })
    }
//
    static PostAddDays(req,res){
        let input = req.body
        let output = []
        for(let a = 0; a < input.name.length; a++){
            output.push({date: new Date(input.date), EmployeeId: Number(input.name[a])})
        }
        console.log(output);
        Day.bulkCreate(output)
        .then( () =>{
            res.redirect('/days')
        })
        .catch( (err) =>{
            res.send(err)
        })
    }
}




module.exports = Controller