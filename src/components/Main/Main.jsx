import React from 'react'
import { Card, CardHeader, CardContent, Divider, Grid, Typography, List as MUIList } from '@material-ui/core';
import Form from './Form/Form';
import List from './List/List';
 

import useStyles from './styles';

const Main = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader title='Expense Tracker' subheader='Powered by speechly' />
            <CardContent>
                <Typography align='center' variant='h5'>Total Balance $100</Typography>
                <Typography variant='subtitle2' style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    {/* InfoCard ... */}
                    Try saying: Add income for $100 in Category Salary for Monday ...
                </Typography>
                <Divider />
                {/* Form */}
                <Form />
                <CardContent className={classes.CardContent}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            {/* List */}
                            <List />
                        </Grid>
                    </Grid>
                </CardContent>

            </CardContent>

        </Card>
    )
}

export default Main