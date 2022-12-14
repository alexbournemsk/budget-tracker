import React from 'react';
import { Grid } from '@material-ui/core';

import Main from './components/Main/Main';
import Details from './components/Details';
import useStyles from './styles';


const App = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.grid} spacing={0} alignItems='center' justifyContent='center' style={{ height: '100vh' }}>
            <Grid item xs={12} sm={4}>
                <Details title={'Прибыль'} type={'Income'}/>
            </Grid>

            <Grid item xs={12} sm={3}>
                <Main />
            </Grid>

            <Grid item xs={12} sm={4}>
                <Details title={'Расходы'} type={'Expenses'}/>
            </Grid>
        </Grid>
    )
}

export default App