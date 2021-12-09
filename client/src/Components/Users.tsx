import React from 'react'
import * as api from '../Api/index'
import { Grid, Input } from '@mui/material'
import { UserCard } from './index'
import UserInterface from '../Assets/Interfaces/UserInterface'

const Users = () => {
    const [usersList, setUsersList] = React.useState<UserInterface[]>([])
    const [usersListFiltered, setUsersListFiltered] = React.useState<UserInterface[]>([])
    const [searchValue, setSearchValue] = React.useState<string | undefined>()
    React.useEffect(() => {
        api.getUsers()
            .then(({ data }) => {
                setUsersList(data)
                setUsersListFiltered(data)
            })
    }, [])

    React.useEffect(() => {
        if (searchValue) {
            const newArr = usersList.filter((el:UserInterface) =>el.name.toLowerCase().includes(searchValue) || el.email.toLowerCase().includes(searchValue) || el.username.toLowerCase().includes(searchValue))
            setUsersListFiltered(newArr)
        } else {
            setUsersListFiltered(usersList)
        }
    }, [searchValue])

    const handleSearch = (e : React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }
    return (
        <Grid container spacing={3} style={{ maxWidth: 968, margin: "0 auto" }}>
            <Grid item xs={12} md={12} style={{ display: "flex", justifyContent: "center" }}>
                <Input value={searchValue} onChange={handleSearch} placeholder="Search" />
            </Grid>
            <Grid container spacing={3} item xs={12} md={12}>
                {
                    usersListFiltered.map((el : UserInterface) => (
                        <Grid key={el.id} item xs={12} sm={4} md={4}>
                            <UserCard user={el} />
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    )
}

export default Users
