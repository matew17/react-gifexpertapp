import { shallow } from "enzyme";
import React from "react";

import GifGridItem from './../../components/GifGridItem';

describe('GifGridItem.test', () => {
    const title = 'titulo';
    const url = 'https://localhost.com/image.jpg';
    const wrapper = shallow(
        <GifGridItem
            title={title}
            url={url}
        />);

    test('Debe mostrar el componente correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar un parrrafo con el titulo ', () => {
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);
    });

    test('Debe tener la imagen igual al url y title de los props ', () => {
        const img = wrapper.find('img');

        expect(img.prop('alt')).toBe(title);
        expect(img.prop('src')).toBe(url);
    });

    test('Debe tener DIV animate__bounce ', () => {
        const div = wrapper.find('div');

        expect(div.hasClass('animate__bounce')).toBe(true);
    });
});
