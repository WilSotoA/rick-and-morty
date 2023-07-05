const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", () => {
    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con status: 200", async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = await agent.get('/rickandmorty/character/1');
            expect(response.body).toHaveProperty('id');
            expect(response.body).toHaveProperty('name');
            expect(response.body).toHaveProperty('species');
            expect(response.body).toHaveProperty('gender');
            expect(response.body).toHaveProperty('status');
            expect(response.body).toHaveProperty('origin');
            expect(response.body).toHaveProperty('image');
        });
        it('Si hay un error responde con status: 500', async () => {
            await agent.get('/rickandmorty/character/0').expect(500);
        });
    });
    describe('GET /rickandmorty/login', () => {
        it('si se envian los datos por query correctos retorna un access: true', async () => {
            const response = await agent.get('/rickandmorty/login?email=user@example.com&password=password1');
            expect(response.body).toEqual({ access: true });
        });
        it('si se envian los datos por query incorrectos retorna un access: false', async () => {
            const response = await agent.get('/rickandmorty/login?email=user&password=password');
            expect(response.body).toEqual({ access: false });
        });
    });
    describe('POST /rickandmorty/fav', () => {
        let favorites = [];
        it('lo enviado por body debe ser devuelto en un arreglo', async () => {
            const fav = {
                id: 100,
                status: "nice",
                name: "dev",
                species: "human",
                origin: "earth",
                gender: "male",
                image: "jpg"
            }
            const response = await agent.post('/rickandmorty/fav').send(fav);
            favorites.push(fav);
            expect(response.body).toEqual(favorites);
        });
        it('si se envía un nuevo elemento por body, este debe ser devuelto en un arreglo que incluye un elemento enviado previamente', async () => {
            const fav1 = {
                id: 100,
                status: "nice",
                name: "dev",
                species: "human",
                origin: "earth",
                gender: "male",
                image: "jpg"
            }

            const fav2 = {
                id: 200,
                status: "great",
                name: "summer",
                species: "human",
                origin: "earth",
                gender: "female",
                image: "png"
            }

            const response1 = await agent.post('/rickandmorty/fav').send(fav1);
            favorites.push(fav1);
            expect(response1.body).toEqual(favorites);

            const response2 = await agent.post('/rickandmorty/fav').send(fav2);
            favorites.push(fav2);
            expect(response2.body).toEqual(favorites);
        });

    });
    describe('DELETE /rickandmorty/fav/:id', () => {
        let favorites = [
            {
                id: 100,
                status: "nice",
                name: "dev",
                species: "human",
                origin: "earth",
                gender: "male",
                image: "jpg"
            },
            {
                id: 200,
                status: "great",
                name: "summer",
                species: "human",
                origin: "earth",
                gender: "female",
                image: "png"
            }
        ];

        it('en el caso de que no haya ningún personaje con el ID que envías, sea un arreglo con los elementos previos sin modificar', async () => {
            const invalidId = 500;
            const initialFavorites = [...favorites];
            const response = await agent.delete(`/rickandmorty/fav/${invalidId}`);
            expect(response.body).toEqual(expect.arrayContaining(initialFavorites));
        });
        it('debería eliminar correctamente al personaje cuando se envía un ID válido', async () => {
            const validId = 100;
            const expectedFavorites = favorites.filter(fav => fav.id !== validId);
            const response = await agent.delete(`/rickandmorty/fav/${validId}`);
            expect(response.body).toEqual(expectedFavorites);
        });
    
    });
});