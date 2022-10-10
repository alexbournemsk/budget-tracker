import React, { useState } from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import useStyles from './styles';

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: '2022-11-09',
}

const Form = () => {
    const classes = useStyles();
    const [formData, setformData] = useState(initialState);


    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align='center' variant='subtitle' gutterBottom>
                    ...
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type} onChange={(evt) => setformData({ ...formData, type: evt.target.value })}>
                        <MenuItem value='Income'>Income</MenuItem>
                        <MenuItem value='Expense'>Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(evt) => setformData({ ...formData, category: evt.target.value })}>
                        <MenuItem value='Business'>Business</MenuItem>
                        <MenuItem value='Salary'>Salary</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={6}>
                <TextField type='number' label='Amount' fullWidth value={formData.amount} onChange={(evt) => setformData({ ...formData, amount: evt.target.value })} />
            </Grid>

            <Grid item xs={6}>
                <TextField type='date' label='Date' fullWidth />
                <Button className={classes.button} variant='outlined' color='primary' fullWidth>Create</Button>
            </Grid>
        </Grid>
    )
}

export default Form