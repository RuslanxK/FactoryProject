const emp = require('../models/employeeModel')


const getAllEmps = (name) => {

    return new Promise((resolve, reject) => {

        if(name != null) {

            emp.find({$or:[{"firstname": name},{"lastname":name},{"department":name}]}, function(err, data) {

                if(err) {
    
                    reject(err)
                }
    
                else {
    
                    resolve(data)
                }
            })
        }



        else {

            emp.find({}, function(err, data) {

                if(err) {
    
                    reject(err)
                }
    
                else {
    
                    resolve(data)
                }
            })
        }
    })
}





const getEmp = (id) => {

    return new Promise((resolve, reject) => {

        emp.findById(id, function(err, data) {

            if(err) {

                reject(err)
            }

            else {

                resolve(data)
            }
        })
    })
}


const addEmp = function(obj)
{
    return new Promise((resolve,reject) =>
    {
        
        let Emp = new emp({

            firstname: obj.firstname,
            lastname: obj.lastname,
            startwork: obj.startwork,
            department: obj.department,
            shifts: obj.shifts
        });
        
      

       Emp.save(function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('Created!');
            }

        })
    })
}




const updateEmp = (id, obj) => {

    return new Promise((resolve, reject) => {

        emp.findByIdAndUpdate(id,{

            firstname: obj.firstname,
            lastname: obj.lastname,
            startwork: obj.startwork,
            department: obj.department,
            shifts: obj.shifts
            

        }, function(err) {

            if(err) {

                reject(err)
            }

            else {

                resolve("Updated")
            }
        })
    })
}





const deleteEmp = (id) => {

    return new Promise((resolve, reject) => {

        emp.findByIdAndDelete(id, function(err) {

            if(err) {

                reject(err)
            }

            else {

                resolve("Deleted")
            }
        })
    })
}


module.exports = { getAllEmps, getEmp, updateEmp, deleteEmp, addEmp }