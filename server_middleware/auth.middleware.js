
/* ------------- authorization ------------- */
const sharedPassword = "triCap08";
const authorizedUsers = [
  {name: 'Sarah', email: 'sarah_humphreys@triserv.com'},
  {name: 'Jaye', email: 'jaye_cerutti@triserv.com'},
  {name: 'Tim', email: 'tim_humphreys@triserv.com'}
]

// app.post(`${baseDir}/${subPath}`, (req, res) => {
//   const {email, password } = req.body;
//   if (!email || !password) {
//     return res.status(400).json({message: 'Email and password required'});
//   }
//   const isAuthorized = authorizedUsers.some(user => user.email === email);
//   const authorizedUser = authorizedUsers.filter(obj => obj.email === email)[0];
//   if (isAuthorized && password === sharedPassword) {
//     res.json({ success: true, name: authorizedUser.name });
//   } else {
//     return res.status(401).json({ message: 'Invalid credentials'});
//   }
// });

function authorizeUser(req, res) {
  const {email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({message: 'Email and password required'});
  }
  const isAuthorized = authorizedUsers.some(user => user.email === email);
  const authorizedUser = authorizedUsers.filter(obj => obj.email === email)[0];
  if (isAuthorized && password === sharedPassword) {
    res.json({ success: true, name: authorizedUser.name });
  } else {
    return res.status(401).json({ message: 'Invalid credentials'});
  }
}

module.exports = { authorizeUser };

/* --------------------------------------------  */