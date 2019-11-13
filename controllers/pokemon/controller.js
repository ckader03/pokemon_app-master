const Pokemon = require('../../models/pokemon');

const controller = {};

controller.index = (req, res) => {
  Pokemon
    .findAll()
    .then((data) => {
      res.render('pokemon/index', {pokemon: data});
    })
    .catch(err => console.log('ERROR:', err));
};

controller.show = (req, res) => {
  const id = req.params.id;
  Pokemon
    .findById(id)
    .then((data) => {
      res.render('pokemon/show',data);
    })
    .catch(err => console.log('ERROR:', err));
};

controller.new = (req, res) => {
  res.render('pokemon/new');
};

controller.edit = (req, res) => {
  const id = req.params.id;
  Pokemon
    .findById(id)
    .then(data => {
      res.render('pokemon/edit', data);
    })

};

module.exports = controller;
