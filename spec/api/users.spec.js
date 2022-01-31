const supertest = require('supertest');
const app = require('../../app');
const request  =supertest(app);


describe("User tests",()=>{
    
    //=====================================================POST /user/create===============================================
    it("should create a new user", async ()=>{
        const response = await request.post('/user/create').send({
            email:"example@gmail.com",
            password:"example",
            name:"John"
        })
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBeDefined();
    })

    //======================================================POST /user/login================================================
    it("should login a user", async ()=>{
        const response1 = await request.post('/user/create').send({
            email:"example@gmail.com",
            password:"example",
            name:"John"
        })
        expect(response1.statusCode).toBe(200);

        const response = await request.post('/user/login').send({
            email:"example@gmail.com",
            password:"example"
        })
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBeDefined();
    })

    //=======================================================GET /user/me====================================================
    //it("should get the details of the current user")


})