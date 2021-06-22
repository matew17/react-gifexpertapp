import { shallow } from "enzyme";
import React from "react";
import '@testing-library/jest-dom';

import GifGrid from './../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('GifGrid', () => {

    const category = 'Kimetsu';
    // let wrapper = shallow(
    //     <GifGrid category={category} />
    // );

    // beforeEach(() => {
    //     wrapper = shallow(
    //         <GifGrid category={category} />
    //     );
    // });

    test('debe ser igual al snapshot ', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(
            <GifGrid category={category} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar imagenes cuando se cargan imagenes useFetchGifs', () => {
        const gifs = [{
            id: 'abc',
            url: 'https://url.com/image',
            title: 'kimetsu'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(
            <GifGrid category={category} />
        );

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
});
