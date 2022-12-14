// Full circle 1:13:00: 
//  creating the reducer (contextReducer.js)
//  creating the dispatch functions (context.js deleteTransaction & addTransactions)
//  pass it into Context.Provider (ExpenseTrackerContext.Provider value ={{deleteTransaction, addTransactions}} {children})
//  accept it into component (const {addTransaction} = useContext(ExpenseTrackerContext)
//  calling them (addTransaction(transaction))

import React, { useState, useContext } from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import useStyles from './styles';
import { ExpenseTrackerContext } from '../../../context/context';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: '2022-11-09',
}

const Form = () => {
    const classes = useStyles();
    const [formData, setformData] = useState(initialState);
    const { addTransaction } = useContext(ExpenseTrackerContext);

    const createTransaction = () => {
        const transaction = { ... formData, amount: Number(formData.amount), id: uuidv4()}
        addTransaction(transaction);
        setformData(initialState);
    }

 
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align='center' variant='subtitle' gutterBottom>
                    ...
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Тип</InputLabel>
                    <Select value={formData.type} onChange={(evt) => setformData({ ...formData, type: evt.target.value })}>
                        <MenuItem value='Income'>Приход</MenuItem>
                        <MenuItem value='Expense'>Расход</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Категория</InputLabel>
                    <Select value={formData.category} onChange={(evt) => setformData({ ...formData, category: evt.target.value })}>
                        <MenuItem value='Бизнес'>Бизнес</MenuItem>
                        <MenuItem value='Зарплата'>Зарплата</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={6}>
                <TextField type='number' label='Сумма' fullWidth value={formData.amount} onChange={(evt) => setformData({ ...formData, amount: evt.target.value })} />
            </Grid>

            <Grid item xs={6}>
                <TextField type='date' label='Date' fullWidth value={formData.date} onChange={(evt) => setformData({ ...formData, date: evt.target.value })}/>
                <Button className={classes.button} variant='outlined' color='primary' fullWidth onClick={createTransaction}>Добавить</Button>
            </Grid>
        </Grid>
    )
}

export default Form