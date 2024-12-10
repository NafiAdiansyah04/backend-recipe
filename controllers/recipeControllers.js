const Recipe = require('../models/recipe');

exports.getRecipes = async (req, res)=>{
    try{
        const recipes = await Recipe.find();
        res.json(recipes);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

exports.getRecipe = async (req, res)=>{
    try{
        const recipe = await Recipe.findById(req.params.id);
        if(recipe){
            res.json(recipe);
        }else{
            res.status(404).json({message: 'Recipe not found'});
        }
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

exports.createRecipe = async (req, res)=>{
    const recipe = new Recipe ({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
    });

    try{
        const newRecipe = await recipe.save();
        res.status(201).json(newRecipe);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

exports.updateRecipe = async (req, res)=>{
    try{
        const recipe = await Recipe.findById(req.params.id);
        if(recipe){
            recipe.name = req.body.name || recipe.name;
            recipe.image = req.body.image || recipe.image;
            recipe.description = req.body.description || recipe.description;
            recipe.ingredients = req.body.ingredients || recipe.ingredients;
            recipe.instructions = req.body.instructions || recipe.instructions;

            const updatedRecipe = await recipe.save();
            res.json(updatedRecipe);
        }else{
            res.status(404).json({message: 'Recipe not found'});
        }
    }catch(error){
        res.status(500).json({message: error.message})
    }
};

exports.deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if(recipe) {
            await Recipe.deleteOne({_id: req.params.id});
            res.json({ message: 'Recipe removed' });
            }else {
            res.status(404).json({ message: 'Recipe not found' });
        }
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};