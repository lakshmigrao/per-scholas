const studentsDetails = require('../models/students')

function index(req,res){
    res.render('Index', { studentsDetails })
}

function show(req,res){
    res.render('Show',{student : studentsDetails[req.params.index]})
}

function home(req,res){
    res.render('Home',{studentsDetails})
}

function locations(req,res){
    res.render('Locations', {studentsDetails})
}

function location(req,res){
    let studentByLocation = studentsDetails.filter((student)=> { 
        return student.location === req.params.location   })      
    res.render('Location',{ studentByLocation })
}

function courses(req,res){
    res.render('Courses', {studentsDetails})
}

function course(req,res){
    let studentByCourse = studentsDetails.filter((student)=> { 
        return student.course === req.params.course   })      
    res.render('Course',{ studentByCourse })
}

function genders(req,res){
    // let females = studentsDetails.filter((student) => student.gender == 'female')
    // let males = studentsDetails.filter((student) => student.gender == 'male')
    // let unknown = studentsDetails.filter((student) => student.gender == 'unknown')

    res.render('Genders',{studentsDetails})
}9
function noOfBootcamps(req,res){

    res.render('NoOfBootcamps',{studentsDetails})
}
function noOfBootcampsnob(req,res){
    let studentByNOB = studentsDetails.filter((student)=> { 
        return student.noOfBootcamps === req.params.nob   })      
    //res.render('Course',{ studentByCourse })
    res.render('NoOfBootcamp',{studentByNOB})
}

function hasAJob(req, res){

    let studentHasJob = studentsDetails.filter((student)=>{
        return student.hasAJob === true
    })
    res.render('HasAJob',{studentHasJob})
}


module.exports = {index,show,location,home,locations,courses,course,genders,noOfBootcamps,noOfBootcampsnob,hasAJob}