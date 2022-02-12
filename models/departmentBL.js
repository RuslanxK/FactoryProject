const dep = require('../models/departmentModel')


const getAllDeps = () => {

    return new Promise((resolve, reject) => {

        dep.find({}, function(err, data) {

            if(err) {

                reject(err)
            }

            else {

                resolve(data)
            }
        })
    })
}

const getDep = (id) => {

    return new Promise((resolve, reject) => {

        dep.findById(id, function(err, data) {

            if(err) {

                reject(err)
            }

            else {

                resolve(data)
            }
        })
    })
}


const addDep = function(obj)
{
    return new Promise((resolve,reject) =>
    {
        
        let department = new dep({

            name : obj.name,
            manager : obj.manager,
            
        });
        
       
      department.save(function(err)
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



const updateDep = function(id, obj)
{
    return new Promise((resolve,reject) =>
    {
        
       
      dep.findByIdAndUpdate(id,{


        name : obj.name,
        manager : obj.manager,


      },function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('Updated!');
            }

        })
    })
}


const deleteDep = function(id, obj)
{
    return new Promise((resolve,reject) =>
    {
        
       
      dep.findByIdAndDelete(id,function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('Deleted!');
            }

        })
    })
}



module.exports = { getAllDeps, getDep, addDep, updateDep, deleteDep }