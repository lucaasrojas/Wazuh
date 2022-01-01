import React from 'react'
import * as api from '../../Api/index'
import {
    Grid, Input, FormGroup, FormControlLabel,
    Checkbox, FormControl, Select, MenuItem, InputLabel, Pagination
} from '@mui/material'
import { TaskCard } from '..'
import TaskInterface from '../../Assets/Interfaces/TaskInterface'
import UserInterface from '../../Assets/Interfaces/UserInterface'
import useClasses from './styles'

interface TasksResponse {
    total_items: number,
    data: TaskInterface[]
}

const Tasks = () => {
    const [tasks, setTasks] = React.useState<TasksResponse | undefined>()
    const [usersList, setUsersList] = React.useState<UserInterface[] | undefined>()
    const [userSelected, setUserSelected] = React.useState<UserInterface | string>("")
    const [completed, setCompleted] = React.useState(false)
    const [searchValue, setSearchValue] = React.useState("")
    const [pagination, setPagination] = React.useState({ offset: 0, page: 1, limit: 10 })
    const classes = useClasses()
    React.useEffect(() => {
        api.getUsers()
            .then(({ data }) => setUsersList(data))
    }, [])
    React.useEffect(() => {
        api.getTasks({ title: searchValue, completed: completed, userId: userSelected, ...pagination, offset: pagination.page === 1 ? 0 : pagination.offset })
            .then((res) => {
                setTasks(res)
            })

    }, [searchValue, completed, userSelected, pagination])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    const handlePagination = (e: React.ChangeEvent<unknown>, page: number) => {
        const newOffset = ((page-1) * pagination.limit)
        setPagination(prev => ({ ...prev, offset: newOffset, page: page }))
    }

    return tasks && tasks.data ? (
        <Grid container spacing={4} className={classes.mainWrapper}>

            <Grid item container spacing={2} xs={12} md={12} className={classes.filterMainWrapper}>
                <Grid item xs={12} md={2} className={classes.filterCheckboxWrapper}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={completed} onChange={(res) => setCompleted(res.target.checked)} />} label="Completed" />
                    </FormGroup>
                </Grid>
                <Grid item xs={12} md={7} className={classes.filterInputWrapper}>
                    <Input fullWidth value={searchValue} onChange={handleSearch} placeholder="Search" />
                </Grid>
                <Grid item xs={12} md={3} className={classes.filterUserSelect}>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="user-filterl">User</InputLabel>
                        <Select
                            labelId="user-filter"
                            id="user-filtert"
                            value={userSelected}
                            label="User"
                            onChange={(res) => {
                                setUserSelected(res.target.value)
                                setPagination(prev => ({ ...prev, page: 1 }))
                            }}
                        >
                            {
                                usersList?.map((user : UserInterface) => (
                                    <MenuItem key={user.id} value={user.id}>{user.username}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container spacing={3} item xs={12} md={12}>
                {
                    tasks.data.map(el => (
                        <Grid key={el.id} item xs={12} sm={6} md={6}>
                            <TaskCard task={el} />
                        </Grid>
                    ))
                }
            </Grid>
            <Grid item xs={12} md={12} className={classes.paginationWrapper}>
                <Pagination
                    count={tasks.total_items / pagination.limit}
                    onChange={handlePagination}
                    hideNextButton={(tasks.total_items / pagination.limit) === pagination.page}
                    hidePrevButton={1 === pagination.page}
                />
            </Grid>
        </Grid>
    ) : <></>
}

export default Tasks
