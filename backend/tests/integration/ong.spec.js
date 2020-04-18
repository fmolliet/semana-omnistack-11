const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', ()=>{
    beforeEach( async ()=>{ // precisa fazer migrate
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });
    
    afterAll( async ()=>{ // precisa finalizar conexao
        await connection.destroy();
    })
    
    it('should be able to create a new ONG', async ()=>{
        const response = await request(app)
        .post('/ongs')
        .send({
            name:"APAD2",
            email:"contato@apad.com.br",
            whatsapp:"11980085500",
            city: "Sao Paulo",
            uf: "SP"
        });
        
        expect(response.body).toHaveProperty('id'); // verifica se tem
        expect(response.body.id).toHaveLength(8); // Tem o tamanho 8
    });
});