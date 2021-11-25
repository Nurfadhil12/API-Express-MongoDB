const Product = require('./model')
const fs = require('fs');
const path = require('path');

const index = (req,res) => {
    Product.find()
    .then(result => res.send(result))
    .catch(error => res.send(error));
}

const view = (req,res) => {
    const {id} = req.params;
    Product.findById((id))
    .then(result => res.send(result))
    .catch(error => res.send(error));
}

const store = (req,res) => {
    const {name, price, stock, status} = req.body;
    const image = req.file;
    if (image){
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target);
        Product.create({name, price, stock, status, image_url:`http://localhost:4000/public/${image.originalname}`})
        .then(res.json({
            message: 'successfully'
        }))
        .catch(error => res.send(error));
    }  
}

const update = (req,res) => {
    const {name, price, stock, status} = req.body;
    const image = req.file;
    const {id} = req.params;
    if (image){
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target);
        Product.findByIdAndUpdate(id,{name, price, stock, status, image_url:`http://localhost:4000/public/${image.originalname}`})
        .then(result => res.send(result))
        .catch(error => res.send(error));
    }  
}

const destroy = (req, res) => {
    // const{id} = req.params
    Product.findByIdAndDelete(req.params.id)
    .then(res.json({
        message : 'succesfully deleted'
    }))
    .catch(error => res.send(error));
};

module.exports ={
    index,
    view,
    store,
    update,
    destroy

}