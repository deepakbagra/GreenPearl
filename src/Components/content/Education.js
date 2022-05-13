import React from 'react';
import useStyles from '../AboutAutism/WhatIsAutism/styles';
import { Typography } from '@material-ui/core';

const Education = () => {
    const classes = useStyles();
  return (
    < div className={classes.container}>
    <Typography variant='h4' style={{marginTop: '5em'}}className={classes.title}>Parenting a Child on the Autism Spectrum</Typography>
          <Typography className={classes.content}>As a parent, you’ve probably spent a lot of time thinking about your child’s future.
              Even more so if they have an autism spectrum disorder.
              <p>Apart from the medical care and therapies that you may line up to help your son or daughter, there are simple, everyday things that make a difference.</p>
    .</Typography>
    <Typography className={classes.title}>Focus on the positive</Typography>
    <Typography className={classes.content}>Just like anyone else, children with autism spectrum disorder often respond well to positive reinforcement. That means when you praise them for the behaviors they’re doing well, it will make them (and you) feel good.
          <p>Be specific, so that they know exactly what you liked about their behavior. Find ways to reward them, either with extra playtime or a small prize like a sticker.</p>
          <p>Also, as you would with anyone -- on the spectrum or not -- prize your child for who they are. As a parent, loving your child for who they are is key.</p>
    </Typography>
    <Typography className={classes.title}>Stay consistent and on schedule</Typography>    
    <Typography className={classes.content}>
              People on the spectrum like routines. Make sure they get consistent guidance and interaction, so they can practice what they learn from therapy.
              <p>This can make learning new skills and behaviors easier, and help them apply their knowledge in different situations. Talk to their teachers and therapists and try to align on a consistent set of techniques and methods of interaction so you can bring what they’re learning home.</p>
        </Typography>
    <Typography className={classes.title}>Put play on the schedule</Typography>    
    <Typography className={classes.content}>
        Finding activities that seem like pure fun, and not more education or therapy, may help your child open up and connect with you.
          </Typography>
          <Typography className={classes.title}>Give it time</Typography>    
    <Typography className={classes.content}>
    You’ll likely try a lot of different techniques, treatments, and approaches as you figure out what’s best for your child. Stay positive and try not to get discouraged if they don’t respond well to a particular method.
          </Typography>
          <Typography className={classes.title}>Get support</Typography>    
    <Typography className={classes.content}>
    Whether online or face-to-face, support from other families, professionals, and friends can be a big help. Create a village of friends and family who understand your child's diagnosis. Friendships may be difficult, and your child will need support in maintaining those friendships. Support groups can be a good way to share advice and information and to meet other parents dealing with similar challenges. Individual, marital, or family counseling can be helpful, too. Think about what might make your life a little easier, and ask for help.
          </Typography>
          <Typography className={classes.title}>Cut your stress</Typography>    
    <Typography className={classes.content}>
    Parents of kids with ASD often face more stress than those who deal with other disabilities. If left unchecked, caregivers can face breakdowns in relationships and even psychological disorders. Stress can affect your health, too.  Stay organized to help yourself avoid getting overwhelmed. This means finding time in your day just for yourself.
    </Typography>
  </div>
  )
}

export default Education;