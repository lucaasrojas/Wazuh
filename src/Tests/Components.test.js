import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import { UserCard, TaskCard } from '../Components';
import 'regenerator-runtime/runtime'
import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import "@testing-library/jest-dom";
Enzyme.configure({
    adapter: new EnzymeAdapter()
})
jest.mock('axios');
jest.mock('../Api')

describe("UserCard component", () => {
    const mockedUser = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }
    test('Should render', async () => {
        const wrapper = render(
            <BrowserRouter>
                <UserCard user={mockedUser} />
            </BrowserRouter>
        )
        expect(wrapper).toMatchSnapshot()
    });

    test('Should render with the correct data', async () => {
        const wrapper = render(
            <BrowserRouter>
                <UserCard user={mockedUser} />
            </BrowserRouter>
        )
        const cardTitle = wrapper.container.querySelector("strong").innerHTML;
        expect(cardTitle).toBe(mockedUser.name);
    });

    test('Without data should not render', async () => {
        const wrapper = render(
            <BrowserRouter>
                <UserCard />
            </BrowserRouter>
        )
        const cardTitle = wrapper.container.querySelector("strong");
        expect(cardTitle).toBeNull();
    });
})

describe("Task Card", () => {
    const mockedTask = {
        "user_id": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": true
    }
    const incompleteTask = {
        "user_id": 1,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }
    test('The bullet color should be green for completed tasks', async () => {
        const wrapper = render(
            <TaskCard task={mockedTask} />
        )
        const bullet = wrapper.container.querySelector(`#task-${mockedTask.id}-bullet`)
        expect(getComputedStyle(bullet).backgroundColor).toBe('green')
    });

    test('The bullet color should be gray for incompleted tasks', async () => {
        const wrapper = render(
            <TaskCard task={incompleteTask} />
        )
        const bullet = wrapper.container.querySelector(`#task-${incompleteTask.id}-bullet`)
        expect(getComputedStyle(bullet).backgroundColor).toBe('gray')
    });

})