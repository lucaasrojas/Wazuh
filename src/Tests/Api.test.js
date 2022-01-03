import 'regenerator-runtime/runtime'
import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import "@testing-library/jest-dom";
import { getTasks, getTasksByUser, getUserById, getUsers } from '../Api'
import axios from 'axios'
const basePath = process.env.REACT_APP_API_PATH
Enzyme.configure({
    adapter: new EnzymeAdapter()
})
jest.mock('axios');

describe('Api component', () => {
    it("Tasks - Without params should not add query string", async () => {
        const spy = jest.spyOn(axios, "get")
        axios.get.mockImplementationOnce(() => Promise.resolve({data: {}}));
        await getTasks({}).then(res =>  res)
        expect(spy).toBeCalledWith(`${basePath}/api/tasks?`)
    })

    it("Tasks - Having title should add it to the query string", async () => {
        const spy = jest.spyOn(axios, "get")
        axios.get.mockImplementationOnce(() => Promise.resolve({data: {}}));
        await getTasks({title:"Dummy"}).then(res =>  res)
        expect(spy).toBeCalledWith(`${basePath}/api/tasks?&title=Dummy`)
    })

    it("Tasks - Having title and completed should add it to the query string", async () => {
        const spy = jest.spyOn(axios, "get")
        axios.get.mockImplementationOnce(() => Promise.resolve({data: {}}));
        await getTasks({title:"Dummy", completed: true}).then(res =>  res)
        expect(spy).toBeCalledWith(`${basePath}/api/tasks?&title=Dummy&completed=true`)
    })

    it("Tasks - Having title, completed and offset should add it to the query string", async () => {
        const spy = jest.spyOn(axios, "get")
        axios.get.mockImplementationOnce(() => Promise.resolve({data: {}}));
        await getTasks({title:"Dummy", completed: true, offset: "10"}).then(res =>  res)
        expect(spy).toBeCalledWith(`${basePath}/api/tasks?&title=Dummy&completed=true&offset=10`)
    })

    it("Tasks - Having title, completed, offset and limit should add it to the query string", async () => {
        const spy = jest.spyOn(axios, "get")
        axios.get.mockImplementationOnce(() => Promise.resolve({data: {}}));
        await getTasks({title:"Dummy", completed: true, offset: "10", limit: "5"}).then(res =>  res)
        expect(spy).toBeCalledWith(`${basePath}/api/tasks?&title=Dummy&completed=true&offset=10&limit=5`)
    })

    it("Tasks - Having title, completed, offset, limit and userId should add it to the query string", async () => {
        const spy = jest.spyOn(axios, "get")
        axios.get.mockImplementationOnce(() => Promise.resolve({data: {}}));
        await getTasks({title:"Dummy", completed: true, offset: "10", limit: "5", userId: "3"}).then(res =>  res)
        expect(spy).toBeCalledWith(`${basePath}/api/tasks?&title=Dummy&completed=true&offset=10&limit=5&userId=3`)
    })

    it("Tasks By User - Should request with the user id", async () => {
        const spy = jest.spyOn(axios, "get")
        axios.get.mockImplementationOnce(() => Promise.resolve({data: {}}));
        await getTasksByUser({id: "3"}).then(res =>  res)
        expect(spy).toBeCalledWith(`${basePath}/api/users/3/tasks?`)
    })

    it("User - Should call will the user id", async () => {
        const spy = jest.spyOn(axios, "get")
        axios.get.mockImplementationOnce(() => Promise.resolve({data: {}}));
        await getUserById({id: "3"}).then(res =>  res)
        expect(spy).toBeCalledWith(`${basePath}/api/users/3?`)
    })

    it("Get Users - Should call to main user endpoint", async () => {
        const spy = jest.spyOn(axios, "get")
        axios.get.mockImplementationOnce(() => Promise.resolve({data: {}}));
        await getUsers().then(res =>  res)
        expect(spy).toBeCalledWith(`${basePath}/api/users`)
    })

})