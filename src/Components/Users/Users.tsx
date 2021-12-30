import React from 'react'
import * as api from '../../Api/index'
import { Grid, Input } from '@mui/material'
import { UserCard } from '../index'
import UserInterface from '../../Assets/Interfaces/UserInterface'
import useClasses from './styles'

const Users = () => {
    const [usersList, setUsersList] = React.useState<UserInterface[]>([])
    const [usersListFiltered, setUsersListFiltered] = React.useState<UserInterface[]>([])
    const [searchValue, setSearchValue] = React.useState<string | undefined>()
    const classes = useClasses()

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
        <Grid container spacing={3}>
            <Grid item xs={12} md={12} className={classes.inputWrapper}>
                <Input value={searchValue} onChange={handleSearch} placeholder="Search" />
            </Grid>
            <Grid container spacing={3} item xs={12} md={12}>
                {
                    usersListFiltered.map((el : UserInterface) => (
                        <Grid key={el.id} item xs={12} sm={4} md={4} lg={3} className={classes.userCardWrapper}>
                            <UserCard user={el} />
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    )
}

export default Users
