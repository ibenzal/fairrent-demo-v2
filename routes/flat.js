var Flat = require('../models/Flat.js');

module.exports = function(app) {

  /**
   * Find and retrieves all Flats
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  findAllFlats = function(req, res) {
    console.log("GET - /flats");
    return Flat.find(function(err, flats) {
      if(!err) {
        return res.send(flats);
      } else {
        res.statusCode = 500;
        console.log('Internal error(%d): %s',res.statusCode,err.message);
        return res.send({ error: 'Server error' });
      }
    });
  };

  /**
   * Find and retrieves a single Flat by its ID
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  findById = function(req, res) {

    console.log("GET - /flat/:id");
    return Flat.findById(req.params.id, function(err, flat) {

      if(!flat) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }

      if(!err) {
        return res.send(flat);
      } else {

        res.statusCode = 500;
        console.log('Internal error(%d): %s', res.statusCode, err.message);
        return res.send({ error: 'Server error' });
      }
    });
    };
    




  /**
   * Creates a new Flat from the data request
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  addFlat = function(req, res) {

    console.log('POST - /Flat');

    var flat = new Flat({
      price:    req.body.price,
      date:    req.body.date,
      postcode :    req.body.postcode,
      type:    req.body.type,
            age: req.body.age,
            duration: req.body.duration,
            saon: req.body.saon,
            paon: req.body.paon,
            street: req.body.street,
            locality: req.body.locality,
            town: req.body.town,
            city: req.body.city,
            county: req.body.county
    });


        flat.validate(function(error) {
    if (error) {
      res.json({ error : error });
    } else {

                flat.save(function(err) {

            if(err) {

              console.log('Error while saving Flat: ' + err);
              res.send({ error:err });
              return;

            } else {

              console.log("Flat created");
              return res.send({ status: 'OK', Flat:Flat });

            }

          });
      
      }
      
      });
    
    

  };



  /**
   * Update a Flat by its ID
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  updateFlat = function(req, res) {

    console.log("PUT - /Flat/:id");
    return Flat.findById(req.params.id, function(err, flat) {

      if(!flat) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }

      if (req.body.model != null) flat.model = req.body.model;
      if (req.body.price != null) flat.price = req.body.price;
      if (req.body.style != null) flat.style = req.body.style;
      if (req.body.size != null) flat.size  = req.body.size;
      if (req.body.colour != null) flat.color = req.body.color;

      return flat.save(function(err) {
        if(!err) {
          console.log('Updated');
          return res.send({ status: 'OK', Flat:Flat });
        } else {
          if(err.name == 'ValidationError') {
            res.statusCode = 400;
            res.send({ error: 'Validation error' });
          } else {
            res.statusCode = 500;
            res.send({ error: 'Server error' });
          }
          console.log('Internal error(%d): %s',res.statusCode,err.message);
        }

        res.send(flat);

      });
    });
  };



  /**
   * Delete a Flat by its ID
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  deleteFlat = function(req, res) {

    console.log("DELETE - /Flat/:id");
    return Flat.findById(req.params.id, function(err, flat) {
      if(!flat) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }
      console.log(flat);
      return flat.remove(function(err) {
        if(!err) {
          console.log('Removed Flat');
          return res.send({ status: 'OK' });
        } else {
          res.statusCode = 500;
          console.log('Internal error(%d): %s',res.statusCode,err.message);
          return res.send({ error: 'Server error' });
        }
      });
    });
  }

  //Link routes and actions
  app.get('/flat', findAllFlats);
  app.get('/flat/:id', findById);
  app.post('/flat', addFlat);
  app.put('/flat/:id', updateFlat);
  app.delete('/flat/:id', deleteFlat);

}
