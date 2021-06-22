import { shallow } from "enzyme";
import React from "react";


import AddCategory from './../../components/AddCategory';

describe('Pruebas en el component AddCategory', () => {
    const setCategory = jest.fn();
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <AddCategory setCategory={setCategory} />
        );
    });

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    // test('Debe de cambiar caja de texto ', () => {
    //     const input = wrapper.find('input');
    //     const value = 'Hola mundo';

    //     input.simulate('change', { target: { value } });
    // });

    test('no debe postear info con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategory).not.toHaveBeenCalled();
    });

    test('debe llaamr setCategories y limpiar caja de texto', () => {
        const value = 'Hola mundo';
        const input = wrapper.find('input');

        input.simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategory).toHaveBeenCalled();
        expect(setCategory).toHaveBeenCalledWith(expect.any(Function));
        expect(input.prop('value')).toBe('');
    });
});
