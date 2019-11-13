const Pokemon = require('../../models/pokemon');

const controller = {};

controller.index = (req, res) => {
  Pokemon
    .findAll()
    .then((data) => {
      res.json(data);
    })
    .catch(err => console.log('ERROR:', err));
};

controller.show = (req, res) => {
  const id = req.params.id;
  Pokemon
    .findById(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log('ERROR:', err));
};

controller.create = (req, res) => {
  const name = req.body.name,
        description = req.body.description,
        image = req.body.image,
        type = req.body.type;

  Pokemon
    .create(name, description, image, type)
    .then(data => res.json(data))
    .catch(err => console.log('ERROR:', err));
};

controller.update = (req, res) => {
  const id = req.body.id,
        name = req.body.name,
        description = req.body.description,
        image = req.body.image,
        type = req.body.type;

  Pokemon
    .update(id, name, description, image, type)
    .then(data => res.json(data))
    .catch(err => console.log('ERROR:', err));
};

controller.destroy = (req, res) => {
  const id = req.params.id;

  Pokemon
    .destroy(id)
    .then(data => res.json(data))
    .catch(err => console.log('ERROR:', err));
};

module.exports = controller;
