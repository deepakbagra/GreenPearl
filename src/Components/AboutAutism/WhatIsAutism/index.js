import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

const WhatIsAutism = () => {  
  const classes = useStyles();

  return (
    < div className={classes.container}>
      <Typography variant='h4' style={{marginTop: '5em'}}className={classes.title}>What Is Autism ?</Typography>
      <Typography className={classes.content}>Autism is a complex, lifelong developmental disability that typically appears during early childhood and can impact a person’s social skills, communication, relationships, and self-regulation. Autism is defined by a certain set of behaviors and is a “spectrum condition” that affects people differently and to varying degrees.</Typography>
      <Typography className={classes.title}>Symptoms (in early childhood)</Typography>
      <Typography className={classes.content}>
            1. Speaks later than typical or not at all (nonverbal)<br></br>
            2. Repetition in language or movement, such as repeating the same word or sounds, hand flapping, or any repeated movement<br></br> 
            3. Atypical nonverbal communication, including avoiding eye contact, giving few facial expressions, or having a monotone<br></br>
            4. Prefers solitary or parallel play rather than engaging in associative or cooperative play with other children<br></br>
            5. Extremely distressed by changes, including new foods or changes in schedule<br></br>
            6. Preference for predictable, structured play over spontaneous or make-believe play<br></br> 
            7. Strong, persistent interest on specific topic, part of a toy, or item<br></br>
      </Typography>
      <Typography className={classes.title}>Diagnosis</Typography>
      <Typography className={classes.subTitle}>How to get a diagnosis for children showing autism symptoms?</Typography>
      <Typography className={classes.content}>
            If you think your child may be showing signs of autism, it is recommended that you make an appointment with your child’s General Practitioner (GP), or child and family health nurse.
            Your GP or child and family health nurse will ask you questions about your child’s development. They may also examine and observe your child. This will help them rule out other possible health or developmental issues.
            If they think your child has some of the characteristics of autism, they may refer your child for further assessment.

      </Typography>
    </div>
  )
}

export default WhatIsAutism;