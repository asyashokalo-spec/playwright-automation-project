import { test, expect } from '@playwright/test';

test.describe('MY API TESTS', () => {
    const baseURL = 'https://jsonplaceholder.typicode.com';

    test('Testing Get Request', async ({ request }) => {

        const response = await request.get(`${baseURL}/posts/1`);
        //console.log(await response.text());
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody.id).toBe(1);
        expect(responseBody.userId).toBe(1);
        expect(responseBody).toHaveProperty('title');
        expect(responseBody).toHaveProperty('userId');

    })

    test('Testing Get Request - response as array', async ({ request }) => {

        const response = await request.get(`${baseURL}/posts`);
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody).toBeTruthy();
        expect(responseBody.length).toBeGreaterThan(0);
        expect(responseBody[0].title).toBeTruthy();
        expect(responseBody[0].userId).toBeTruthy();

    })

    test('Testing Post Request', async ({ request }) => {
        const response = await request.post(`${baseURL}/posts`, {
            data: {
                title: 'somtitle',
                body: 'sombody',
                userId: 1
            }
        });
        expect(response.status()).toBe(201);
        const responseBody = await response.json();
        expect(responseBody.title).toBeTruthy();

    })

    test('Testing PUT request', async ({ request }) => {
        const response = await request.put(`${baseURL}/posts/1`, {
            data: {
                title: 'somtitle',
                body: 'sombody',
                userId: 1
            }
        });
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody.title).toBe('somtitle');
    })

    test('Testing Delete request', async ({ request }) => {
        const response = await request.delete(`${baseURL}/posts/1`);
        expect(response.status()).toBe(200);
    })

})