let bcrypt = require('bcryptjs')

const users = []

let startingId = 1; 

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      // console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && bcrypt.compareSync(password, users[i].password)) {
          res.status(200).send(users[i])
        }else {res.status(400).send("User not found.")}
      }
      
    },
    register: (req, res) => {

      let { username, email, password, firstName, lastName } = req.body
        
        let hashedPassword = bcrypt.hashSync(password, 10);

      let newUser ={
        username,
        email,
        password: hashedPassword,
        firstName,
        lastName,
        id: startingId++
    }

        users.push(newUser)
        console.log('Registering User')
        console.log(users)
        // users.push(users)


        res.status(200).send(newUser)
    }
}

/*
{
        let { email, password, firstName, lastName } = req.body
        
        let hashedPassword = bcrypt.hashSync(password, 10);

        userDatase.push({
            email,
            password: hashedPassword,
            firstName,
            lastName,
            id: startingId++
        })

        console.log(userDatase);

        res.send({success: true})
    }
*/