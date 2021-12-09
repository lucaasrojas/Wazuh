import React from 'react'
import { render, queryByAttribute, fireEvent } from '@testing-library/react';

import App from '../App';
const getById = queryByAttribute.bind(null, 'id')

describe("App", () => {
    test('Should render', () => {
        const wrapper = render(
                <App />
        )
        
        expect(wrapper).toMatchSnapshot()
    });
})