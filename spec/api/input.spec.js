const supertest = require('supertest');
const app = require('../../app');
const request  =supertest(app);

describe("Input validation tests",()=>{

    //================================================USERS================================================================

    it("Should validate the email ",async ()=>{
        const response = await request.post('/user/create').send({
            password:"example",
            name:"John"
        })
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBeDefined();
        expect(response.body.message).toBe(`email is required`);
    })

    it("Should validate the password ",async ()=>{
        const response = await request.post('/user/create').send({
            email:"example@gmail.com",
            name:"John"
        })
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBeDefined();
        expect(response.body.message).toBe(`password is required`);
    })

    it("Should validate the name",async ()=>{
        const response = await request.post('/user/create').send({
            email:"example@gmail.com",
            password:"example"
        })
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBeDefined();
        expect(response.body.message).toBe(`name is required`);
    })

    it("should validate the email format", async ()=>{
        const response = await request.post('/user/create').send({
            email:"example",
            password:"example",
            name:"John"
        })
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBeDefined();
        expect(response.body.message).toBe(`email is required`);
    })

    //================================================TICKETS===========================================================

    it("should validate the category",async ()=>{
        const response = await request.post('/tickets').send({
            //category: "asset",
            subcategory: "requestAllocation",
            title: "Allocate Sample Asset",
            description: "Need sample asset for productive work",
            assignedTo: {
                id: "61890767e0fff743b84689e4"
            }
        })
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBeDefined();
        expect(response.body.message).toBe(`category is required`);
    })

    it("should validate the subcategory",async ()=>{
        const response = await request.post('/tickets').send({
            category: "asset",
            //subcategory: "requestAllocation",
            title: "Allocate Sample Asset",
            description: "Need sample asset for productive work",
            assignedTo: {
                id: "61890767e0fff743b84689e4"
            }
        })
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBeDefined();
        expect(response.body.message).toBe(`subcategory is required`);
    })

    it("should validate the title",async ()=>{
        const response = await request.post('/tickets').send({
            category: "asset",
            subcategory: "requestAllocation",
            //title: "Allocate Sample Asset",
            description: "Need sample asset for productive work",
            assignedTo: {
                id: "61890767e0fff743b84689e4"
            }
        })
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBeDefined();
        expect(response.body.message).toBe(`title is required`);
    })

    it("should validate the description",async ()=>{
        const response = await request.post('/tickets').send({
            category: "asset",
            subcategory: "requestAllocation",
            title: "Allocate Sample Asset",
            //description: "Need sample asset for productive work",
            assignedTo: {
                id: "61890767e0fff743b84689e4"
            }
        })
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBeDefined();
        expect(response.body.message).toBe(`description is required`);
    })

    it("should validate the id",async ()=>{
        const response = await request.post('/tickets').send({
            category: "asset",
            subcategory: "requestAllocation",
            title: "Allocate Sample Asset",
            description: "Need sample asset for productive work",
            assignedTo: {
                //id: "61890767e0fff743b84689e4"
            }
        })
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBeDefined();
        expect(response.body.message).toBe(`assigned to id is required`);
    })

    it("should validate the category enum",async ()=>{
        const response = await request.post('/tickets').send({
            category: "Nothing",
            subcategory: "requestAllocation",
            title: "Allocate Sample Asset",
            description: "Need sample asset for productive work",
            assignedTo: {
                id: "61890767e0fff743b84689e4"
            }
        })
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBeDefined();
        expect(response.body.message).toBe(`Category can only be asset, employee or other`);
    })

    it("should validate the subcategory enum",async ()=>{
        const response = await request.post('/tickets').send({
            category: "asset",
            subcategory: "Qwerty",
            title: "Allocate Sample Asset",
            description: "Need sample asset for productive work",
            assignedTo: {
                id: "61890767e0fff743b84689e4"
            }
        })
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBeDefined();
        expect(response.body.message).toBe(`subcategory can only be requestAllocation or requestDeallocation`);
    })

    

});