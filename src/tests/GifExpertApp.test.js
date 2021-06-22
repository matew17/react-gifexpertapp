import { shallow } from "enzyme";
import React from "react";

import GifExpertApp from './../GifExpertApp';

describe('probar GifExpertApp', () => {

    test('debe renderizar el componente ', () => {
        const wrapper = shallow(
            <GifExpertApp />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('debe renderizar el componente ', () => {
        const defaultCats = ['One Punch', 'Kimetsu'];
        const wrapper = shallow(
            <GifExpertApp defaultCategories={defaultCats} />
        );

        expect(wrapper.find('GifGrid').length).toBe(defaultCats.length);
    });
});
