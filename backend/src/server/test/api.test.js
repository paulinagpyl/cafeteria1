import request from 'supertest';
import server from '../app';

describe('Operaciones CRUD de cafes', () => {
  test('La ruta GET cafes devuelve un status code 200 y un array de al menos un objeto', async () => {
    const response = await request(server).get('/cafes');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('La ruta DELETE /cafes devuelve un status code 404 si el ID no existe', async () => {
    const cafes = import('../cafes.json');
    const idDoesNotExist = Math.max(...cafes.map(cafe => cafe.id)) + 1;
    const response = await request(server)
      .delete(`/cafes/${idDoesNotExist}`)
      .set('Authorization', 'Bearer Token');
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('No se encontró ningún cafe con ese id');
  });

  test('La ruta POST /cafes agrega un nuevo café y devuelve un código 201', async () => {
    const cafes = import('../cafes.json');
    const newId = Math.max(...cafes.map(cafe => cafe.id)) + 1;
    const newCoffee = { id: newId, nombre: `Café ${newId}` };
    const response = await request(server).post('/cafes').send(newCoffee);
    expect(response.status).toBe(201);
    expect(response.body).toContainEqual(newCoffee);
  });

  test('La ruta put de cafes devuelve un codigo 400 si el id del parametro y el id del payload no coinciden', async () => {
    const updatedCoffee = { id: 5, nombre: 'Espresso' };
    const idDoesNotMatch = 6;
    const response = await request(server).put(`/cafes/${idDoesNotMatch}`).send(updatedCoffee);
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('El id del parámetro no coincide con el id del café recibido');
  });

  test('Devuelve 404 para rutas no existentes', async () => {
    const invalidRoute = '/ruta_inexistente';
    // Realiza la solicitud GET a la ruta no existente
    const response = await request(server).get(invalidRoute);
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('La ruta que intenta consultar no existe');
  });
});
