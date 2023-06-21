// לא ברורות ESLint בהערה עקב שגיאות

// const express = require('express');
// const request = require('supertest');
// const messageRouter = require('../api/routes/messageRouter');
// const { getAll, createMessage } = require('../api/controllers/messageController');
// const Message = require('../api/models/message');

// const app = express();
// app.use('/messages', messageRouter);

// describe('getAll function', () => {
//   test('should return all messages', async () => {
//     const messages = [{}];
//     jest.spyOn(Message, 'find').mockResolvedValue(messages);

//     const req = {};
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await getAll(req, res);

//     expect(Message.find).toHaveBeenCalledTimes(1);
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith(messages);
//   });

//   test('should return an error message if there are no messages', async () => {
//     jest.spyOn(Message, 'find').mockRejectedValue(new Error());

//     const req = {};
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await getAll(req, res);

//     expect(res.status).toHaveBeenCalledWith(404);
//     expect(res.send).toHaveBeenCalledWith('error');
//   });
// });
// describe('createMessage function', () => {
//   test('should create a new message', async () => {
//     const req = {
//       body: {
//         userCode: '5678',
//         subject: 'ddd',
//         body: 'bbb',
//       },
//     };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };

//     await createMessage(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.send).toHaveBeenCalledWith({ message: expect.any(Object) });
//   }, 100000);

//   test('should return an error message if there is an error', async () => {
//     const req = {
//       body: { text: 'Hello' },
//     };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn(),
//     };
//     jest.spyOn(Message.prototype, 'save').mockRejectedValue(new Error('error'));

//     await createMessage(req, res);

//     expect(res.status).toHaveBeenCalledWith(400);
//     expect(res.send).toHaveBeenCalledWith({ message: 'error' });
//   });
// });

// test('try get function', async () => {
//   const res = await request(app).get('/');
//   expect(res.statusCode).toBe(404);
//   expect(res.send).toBe('error');
// });
