



// Preparing to build a test file from complain project


// import dotenv from 'dotenv';
// dotenv.config(); 

// import request from 'supertest';
// import { connectToDB } from '../db/connect.js';
// import app from '../app.js'; 
// import { Complaint } from '../models/complaint.model.js';


// beforeAll(async () => {
//   await connectToDB();
// });

// afterAll(async () => {
//   await Complaint.deleteMany({ message: "check" }); // clean tests
//   // await mongoose.connection.close(); // finished conection
//   // await server.close(); // close server
// });

// describe('chack complain', () => {

//   test('sending a complain to db', async () => {
//     const res = await request(app)
//       .post('/submit')
//       .send({
//         category: "aaa",
//         message: 'otomatick check'
//       });

//     expect(res.statusCode).toBe(200);
//     expect(res.text).toContain("complain sended succsefuly");
//   });

//   test('entering with a uncorrect passwors get a filse', async () => {
//     const res = await request(app)
//       .post('/admin')
//       .send({ password: "romg" });

//     expect(res.statusCode).toBe(403);
//     expect(res.text).toContain("sassword rong");
//   });

//   test('entering with a corrct password get the complain', async () => {
//     const res = await request(app)
//       .post('/admin')
//       .send({ password: process.env.ADMIN_PASSWORD });

//     // make a route
//     expect(res.statusCode).toBe(302);
//     expect(res.headers.location).toBe('/admin/view');

//     // get to /admin/view
//     const viewRes = await request(app).get('/admin/view');
//     expect(viewRes.text).toContain("list complains");
//   });

// });
