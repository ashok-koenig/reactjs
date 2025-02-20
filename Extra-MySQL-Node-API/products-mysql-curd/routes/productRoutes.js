const express = require('express');
const Product = require('../models/product');
const productRoutes = express.Router();

// Create a product
 productRoutes.post('/', async (req, res)=>{
    try{
        const {title, category, price} = req.body;
        const product = await Product.create({title, category, price})
        res.status(201).json(product)
    }catch(err){
        res.status(500).json({error: 'Failed to create product'})
    }
 })

 // Get all products
 productRoutes.get('/', async (req, res)=>{
    try{
        const products = await Product.findAll();
        res.json(products)
    }catch(err){
        res.status(500).json({error: 'Failed to create product'})
    }
 })

  // Get a product by ID
  productRoutes.get('/:id', async (req, res)=>{
    try{
        const {id} = req.params
        const product = await Product.findByPk(id);
        if(product){
            res.json(product)
        }else{
            res.status(404).json({error: 'Product not found'})
        }        
    }catch(err){
        res.status(500).json({error: 'Failed to create product'})
    }
 })

 // Update Product
 productRoutes.put('/:id', async (req, res)=>{
    try{
        const {id} = req.params
        const product = await Product.findByPk(id);
        if(product){
            const {title, category, price} = req.body;
            product.title = title;
            product.category = category;
            product.price = price
            await product.save();
            res.json(product)
        }else{
            res.status(404).json({error: 'Product not found'})
        }        
    }catch(err){
        res.status(500).json({error: 'Failed to create product'})
    }
 })
 
   // Delete a product by ID
   productRoutes.delete('/:id', async (req, res)=>{
    try{
        const {id} = req.params
        const product = await Product.findByPk(id);
        if(product){
           await product.destroy()
            res.status(204).json({message: "Product Deleted"})
        }else{
            res.status(404).json({error: 'Product not found'})
        }        
    }catch(err){
        res.status(500).json({error: 'Failed to create product'})
    }
 })
 module.exports = productRoutes