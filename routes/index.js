exports.login = function(req, res){
  res.render('login', {title: 'Login Page'})
};

exports.portal = function(req, res){
    res.render('portal', {title: 'Portal Page'})
};
