import express from 'express';
import { getAllUsers, getUserById, insertUser, updateUser, deleteUser, getLogin } from '../services/userService.js';

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  try {
    console.log('get all users')
    const users = await getAllUsers();
    res.send(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});


// TODO move to auth folder - allow to logn and check to the db the passs and email
router.get('/login', async (req, res) => {
  try {
    const { email, password } = req.query;
    const login = await getLogin(email, password);
    // console.log(login);
    res.send(login);
  } catch (err) {
    if (err.message === 'Invalid email or password.') {
      res.status(401).send(err.message);
    } else {
      res.status(500).send(err.message);
    }
  }
});

// Get a user by their ID
router.get('/:id', async (req, res) => {
  try {
    console.log('get user by id');
    const id = req.params.id;
    const user = await getUserById(id);
    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Insert a new user
router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    console.log(email, password);
    const id = await insertUser(firstName, lastName, email, password);
    res.send({ id });
  } catch (err) {
    if (err.message === 'A user with the given email already exists.') {
      res.status(403).send(err.message);
    } else {
      res.status(500).send(err.message);
    }
  }
});

// Update a user's information
router.put('/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const { name, age } = req.body;
      await updateUser(name, age, id);
      res.send({ id });
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

// Delete a user by their ID
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await deleteUser(id);
    res.send({ id });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default router