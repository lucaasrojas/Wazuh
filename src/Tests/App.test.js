import { render } from '@testing-library/react';
import App from '../App';

describe("App", () => {
    test('Should render', () => {
        const wrapper = render(
                <App />
        )
        
        expect(wrapper).toMatchSnapshot()
    });
})