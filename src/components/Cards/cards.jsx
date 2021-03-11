import React from 'react'
import styles from './cards.module.css'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import Countup from 'react-countup'
import Cls from 'classnames'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) { 
    return 'Loading.........'
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        <Grid item component={Card} xs={12} md={3} className={Cls(styles.card,styles.infected)}> 
          <CardContent>
            <Typography color='textPrimary' gutterBottom>
              Infected
            </Typography>
            <Typography variant='h5'>
              <Countup
                start={0}
                end={confirmed.value}
                duration={15.3}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2'>
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={Cls(styles.card,styles.recovered)}>
          <CardContent>
            <Typography color='textPrimary' gutterBottom>
              Recoveries
            </Typography>
            <Typography variant='h5'>
              <Countup
                start={0}
                end={recovered.value}
                duration={15.3}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2'>
              Number of Recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={Cls(styles.card,styles.deaths)}>
          <CardContent>
            <Typography color='textPrimary' gutterBottom>
              Deaths
            </Typography>
            <Typography variant='h5'>
              <Countup
                start={0}
                end={deaths.value}
                duration={15.3}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2'>
              Number of deaths from COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    
    </div>
  )
}

export default Cards
