const dotenv = require("dotenv");
const supertest = require("supertest");
dotenv.config();
// const url = 'https://angular.idms-test.com';
// const url 'https://reqres.in/api/users?page=2';
const url = "https://angular.idms-test.com";
let exampleVar;
beforeAll(async () => {
  let user = {
    email: "superadmin@gmail.com",
    password: "Admin@1234",
    ip: "103.199.224.108",
  };
  let data = await supertest(url)
    .post("/api/v1/settings/user/login")
    .set("Content-Type", "application/json")
    .send(user);
  console.log("https://angular.idms-test.com/api/v1/settings/user/login", data);
  console.log("https://angular.idms-test.com/api/v1/settings/user/login",data.body.result.token);
  process.env.TOKEN = data.body.result.token;
  console.log("performing operations before running the test cases.");
});
afterAll(() => {
  console.log("performing operation after running the test cases.");
});

// Purchase

describe('testing get api for purchase', () => {
  it('IDMS purchase api testcase', async () => {

    const test1 = await supertest(url).get('/api/v1/dashboard/purchase')
    .set('Authorization',`Bearer ${process.env.TOKEN}`)
    .set('Content-Type','application/json')
    .send();
    console.log('hello-------------->',test1);
    expect(test1._body.success).toEqual(true);
});


// });

// Sales

// describe('testing get api for sales', () => {
  it('IDMS sales api testcase', async () => {

    const test1 = await supertest(url).get('/api/v1/dashboard/sales')
    .set('Authorization',`Bearer ${process.env.TOKEN}`)
    .set('Content-Type','application/json')
    .send();
    console.log('hello-------------->',test1);
    expect(test1._body.success).toEqual(true);
});


// });

// Production

// describe('testing get api for production', () => {
  it('IDMS production api testcase', async () => {

    const test1 = await supertest(url).get('/api/v1/dashboard/production')
    .set('Authorization',`Bearer ${process.env.TOKEN}`)
    .set('Content-Type','application/json')
    .send();
    console.log('hello-------------->',test1);
    expect(test1._body.success).toEqual(true);
});


// });

// Maintenance

// describe('testing get api for maintenance', () => {
  it('IDMS maintenance api testcase', async () => {

    const test1 = await supertest(url).get('/api/v1/dashboard/maintenance')
    .set('Authorization',`Bearer ${process.env.TOKEN}`)
    .set('Content-Type','application/json')
    .send();
    console.log('hello-------------->',test1);
    expect(test1._body.success).toEqual(true);
});


// });

// Stores

// describe('testing get api for stores', () => {
  it('IDMS stores api testcase', async () => {

    const test1 = await supertest(url).get('/api/v1/dashboard/stores')
    .set('Authorization',`Bearer ${process.env.TOKEN}`)
    .set('Content-Type','application/json')
    .send();
    console.log('hello-------------->',test1);
    expect(test1._body.success).toEqual(true);
});


// });

// Quality

// describe('testing get api for quality', () => {
  it('IDMS quality api testcase', async () => {

    const test1 = await supertest(url).get('/api/v1/dashboard/quality')
    .set('Authorization',`Bearer ${process.env.TOKEN}`)
    .set('Content-Type','application/json')
    .send();
    console.log('hello-------------->',test1);
    expect(test1._body.success).toEqual(true);
});


// });


// Dispatch

// describe('testing get api for dispatch', () => {
  it('IDMS dispatch api testcase', async () => {

    const test1 = await supertest(url).get('/api/v1/dashboard/dispatch')
    .set('Authorization',`Bearer ${process.env.TOKEN}`)
    .set('Content-Type','application/json')
    .send();
    console.log('hello-------------->',test1);
    expect(test1._body.success).toEqual(true);
});


// });

// HR

// describe('testing get api for HR', () => {


  it('IDMS HR api testcase', async () => {

    const test1 = await supertest(url).get('/api/v1/dashboard/hr')
    .set('Authorization',`Bearer ${process.env.TOKEN}`)
    .set('Content-Type','application/json')
    .send();
    console.log('hello-------------->',test1);
    expect(test1._body.success).toEqual(true);
});




// });


// describe('testing get api for HSN create', () => {


  it('IDMS HSN Create api testcase', async () => {
    let create = {
      
        "provisionType": true,
        "hsnMasterEntryNo": "HSN0119",
        "hsnEntryDate": "",
        "hsnCode": 7889,
        "isActive": "Y",
        "goodsDescription": "jasgasif",
        "gstRate": 18,
        "igstRate": 18,
        "sgstRate": 18,
        "cgstRate": 18,
        "ugstRate": 18,
        "revision": [
            {
                "revisionNo": 159632,
                "revisionDate": "2023-07-26"
            }
        ]
    
    };
    const test1 = await supertest(url).post('/api/v1/purchase/HSN/create')
    .set('Authorization',`Bearer ${process.env.TOKEN}`)
    .set('Content-Type','application/json')
    .send(create);
    console.log('hello-------------->',test1);
    expect(test1._body.success).toEqual(true);
    
    

    
});




});












// {
//   "provisionType": true,
//   "hsnMasterEntryNo": "HSN0119",
//   "hsnEntryDate": "",
//   "hsnCode": 7889,
//   "isActive": "Y",
//   "goodsDescription": "jasgasif",
//   "gstRate": 18,
//   "igstRate": 18,
//   "sgstRate": 18,
//   "cgstRate": 18,
//   "ugstRate": 18,
//   "revision": [
//       {
//           "revisionNo": 159632,
//           "revisionDate": "2023-07-26"
//       }
//   ]
// }


// https://angular.idms-test.com/api/v1/purchase/HSN/create

// Authorization