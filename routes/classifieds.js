
'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex')

// YOUR CODE HERE

function notFound(res) {
  res.setHeader("Content-Type", "text/plain");
  res.status(404);
  res.send('Not Found');
}

router.get('/', (req, res, next) => {
  knex('classifieds')
    .select(['id', 'title', 'description', 'price', 'item_image'])
    .then((ads) => {
      res.setHeader('Content-Type', 'application/json')
      res.status(200);
      res.send(ads);
    })
})

// router.get('/:id', (req, res, next) => {
//   let id = req.params.id;
//
//   knex('classifieds')
//     .where('id', id)
//     .select(['id', 'name', 'message'])
//     .then((messages) => {
//       res.setHeader('Content-Type', 'application/json')
//       res.status(200);
//       res.send(messages[0]);
//     })
// })
//
// router.post('/', (req, res, next) => {
//   let newMessage = req.body;
//
//   knex('classifieds')
//     .insert({
//       name: newMessage.name,
//       message: newMessage.message
//     }, ['name', 'message'])
//     .then((messages) => {
//       res.setHeader('Content-Type', 'application/json')
//       res.status(200);
//       res.send(messages[0]);
//     })
// })
//
// router.patch('/:id', (req, res, next) => {
//   let id = req.params.id;
//   let body = req.body;
//
//   knex('classifieds')
//     .where('id', id)
//     .then((messages) => {
//       if (messages.length === 0) {
//         notFound(res);
//       }
//       else {
//         knex('messages')
//           .returning(['id', 'name', 'message'])
//           .where('id', id)
//           .update({
//             name: body.name,
//             message: body.message
//           })
//           .then(messages => {
//             res.setHeader('Content-Type', 'application/json')
//             res.status(200);
//             res.send(messages[0]);
//           })
//       }
//     })
// })
//
// router.delete('/:id', (req, res, next) => {
//   let id = req.params.id;
//
//   if (isNaN(parseInt(id))) {
//     notFound(res);
//     return;
//   }
//
//   knex('classifieds')
//     .returning(['id', 'name', 'message'])
//     .where('id', id)
//     .del()
//     .then(messages => {
//       if (messages.length === 0) {
//         notFound(res);
//       }
//       else {
//         res.setHeader('Content-Type', 'application/json')
//         res.status(200);
//         res.send(messages[0]);
//       }
//     })

module.exports = router;
