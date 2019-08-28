// const { Router } = require('express')
const { toJWT, toData } = require('./jwt')
const User = require('../users/model')
const bcrypt = require('bcrypt')

// const router = new Router()

/**
 * Action that checks if a username already exists or
 * creates a new one and returns a token with userID and username
 */
const loginOrRegister = (req, res, next) => {
  // Check if the user passed a username
  const { username, password } = req.body;

  if (!username) return res.status(404).send({
      message: "Please specify a valid username to proceed!"
  });

  // Check if user exists in the database
  return User.findOne({ where: { username: username } })
      .then(user => {
          // Check if user was not found
          if (!user) {
            // Encrypt the password
            bcrypt.hash(password, 10, (err, hash) => {
              if(err){
                console.log('ERROR ON BCRYPT')
                return res.status(500).json({
                  error: err
                });
              } else {
              // User not found, create a new one, with username and password hashed.
              User.create({username, password: hash})
                  .then(u => {
                      // Set status 201 :: user created
                      return res.status(201).send({
                          // Generate the token and return it
                          token: generateToken(u.id, username),
                          username
                      });
                  })
                  .catch(err => {
                      // User not created, return error
                      return res.status(500).send({
                          message: "Cannot create user. Please try again later"
                      })
                  });
            }});

          } else {
              // Valid user exists, 
              //Check password
              bcrypt.compare(password, user.password, (err, match) => {
                //Check if err
                if(err) {
                  return res.status(401).json({
                    message: 'Auth failed'
                  });
                }
                // match = true when password match
                if(match) {
                  //generate token and return it
                  // Return a JWT token with the user id and username
                  return res.status(200).send({
                    username,
                    id: user.id,
                    // Generate the token and return it
                    token: generateToken(user.id, username)
                  });
                } else {
                  return res.status(401).send({
                    message: 'Auth failed'
                  })
                }
              })    
          }
      })
      .catch(e => next(e));
}

// Export auth controller functions
module.exports = { loginOrRegister };



// router
//   .post(
//     '/logins',
//     (req, res) => {
//       const email = req.body.email
//       const password = req.body.password

//       if (!email || !password) {
//         res.status(400).send({
//           message: 'Please supply a valid email and password'
//         })
//       } else {
//         User
//           .findOne({
//             where: {
//               email: req.body.email
//             }
//           })
//           .then(entity => {
//             if (!entity) {
//               res
//                 .status(400)
//                 .send({ message: 'User with that email does not exist' })
//                 return
//             }
//             if (bcrypt.compareSync(req.body.password, entity.password)) {
//               res.send({ jwt: toJWT({ userId: entity.id }) })
//             }
//             else {
//               res
//                 .status(400)
//                 .send({ message: 'Incorrect Password ' })
//             }
//           })
//           .catch(err => {
//             console.error(err)
//             res
//               .status(500)
//               .send({
//                 message: 'something wen wrong'
//               })
//           })
//       }
//     })

//     router.get('/secret-endpoint', (req, res) => {
//       const auth = req.headers.authorization && req.headers.authorization.split(' ')
//       if (auth && auth[0] === 'Bearer' && auth[1]) {
//         try {
//           const data = toData(auth[1])
//           res.send({
//             message: 'Thanks for visiting the secret endpoint.',
//             data
//           })
//         }
//         catch(error) {
//           res.status(400).send({
//             message: `Error ${error.name}: ${error.message}`,
//           })
//         }
//       }
//       else {
//         res.status(401).send({
//           message: 'Please supply some valid credentials'
//         })
//       }
//     })
// module.exports = router