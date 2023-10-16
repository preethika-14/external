module.exports.homelist = function(req,res){
    res.render('locations-list',{title:'Home'});
};

module.exports.locationInfo = function(req, res) {
    res.render('location-info', { title: 'Location Info' });
  };
  module.exports.locationInfo2 = function(req, res) {
    res.render('location-info2', { title: 'Location Info 2' });
  };
  
  module.exports.locationInfo3 = function(req, res) {
    res.render('location-info3', { title: 'Location Info 3' });
  };

  module.exports.addReview = function(req, res) {
    res.render('location-review-form', { title: 'Add Review' });
  };
  
  // locations.js

module.exports.addReview2 = function(req, res) {
    res.render('location-review-form2', { title: 'Add Review for Gismat' });
  };
  
  module.exports.addReview3 = function(req, res) {
    res.render('location-review-form3', { title: 'Add Review for Tree Stories Cafe' });
  };