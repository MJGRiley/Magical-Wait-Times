<<<<<<< HEAD
//copied from 14 min-project
const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
      res.redirect('/login');
=======
const withAuth = (req, res, next) => {
    if (!req.session.userId) {
      res.redirect("/login");
>>>>>>> 28330db49ff13e65b58b7b7d81c4bd8b7cf106c4
    } else {
      next();
    }
  };
  
<<<<<<< HEAD
  module.exports = withAuth;  
=======
  module.exports = withAuth;
  
>>>>>>> 28330db49ff13e65b58b7b7d81c4bd8b7cf106c4
