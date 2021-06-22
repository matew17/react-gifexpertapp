import { getGifs } from './../../helpers/getGifs'

describe('getGifs', () => {
    test('Debe obtener info ', async () => {
        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(10);
    });

    test('Debe obtener info ', async () => {
        const gifs = await getGifs('');

        expect(gifs).toEqual([]);
    });
});
