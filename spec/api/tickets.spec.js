const supertest = require('supertest');
const app = require('../../app');
const request  =supertest(app);


describe("Ticket tests",()=>{

    it("Should create a new ticket", async ()=>{
        const response = await request.post('/tickets').send({
            category: "asset",
            subcategory: "requestAllocation",
            title: "Allocate Sample Asset",
            description: "Need sample asset for productive work",
            assignedTo: {
                id: "61890767e0fff743b84689e4"
            }
        })
        expect(response.statusCode).toBe(200);
        expect(response.body.id).toBeDefined();
        expect(response.body.category).toBe(`asset`);
        expect(response.body.subcategory).toBe("requestAllocation");
        expect(response.body.title).toBe("Allocate Sample Asset");
        expect(response.body.description).toBe("Need sample asset for productive work");
        expect(response.body.assignedTo.id).toBe("61890767e0fff743b84689e4");
    })

    it("Should create a update a ticket", async()=>{
          
    })
})
