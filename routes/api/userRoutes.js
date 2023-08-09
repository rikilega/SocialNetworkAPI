const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

  // Add friend route
router
.route('/:userId/friends/:friendId')
.post(addFriend);

// Delete friend route
router
.route('/:userId/friends/:friendId')
.delete(removeFriend);

module.exports = router;
