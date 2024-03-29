// import React from "react";
// import TextField from "@material-ui/core/TextField";
// import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: 200,
//     },
//   },
//   root2: {
//     "& > *": {
//       margin: theme.spacing(1),
//     },
//   },
// }));

// export default function ValidationTextFields() {
//   const classes = useStyles();

//   return (
//     <form className={classes.root} noValidate autoComplete='off'>
//       <div>
//         <TextField error id='standard-error' label='Name' defaultValue='' />
//         <TextField
//           error
//           id='standard-error-helper-text'
//           label='Error'
//           defaultValue='Hello World'
//           helperText='Incorrect entry.'
//         />
//       </div>
//       <div>
//         <TextField
//           error
//           id='filled-error'
//           label='Error'
//           defaultValue='Hello World'
//           variant='filled'
//         />
//         <TextField
//           error
//           id='filled-error-helper-text'
//           label='Error'
//           defaultValue='Hello World'
//           helperText='Incorrect entry.'
//           variant='filled'
//         />
//       </div>
//       <div>
//         <TextField
//           error
//           id='outlined-error'
//           label='Error'
//           defaultValue='Hello World'
//           variant='outlined'
//         />
//         <TextField
//           error
//           id='outlined-error-helper-text'
//           label='Error'
//           defaultValue='Hello World'
//           helperText='Incorrect entry.'
//           variant='outlined'
//         />
//       </div>
//       <div className={classes.root2}>
//         <Button variant='contained' color='secondary'>
//           Secondary
//         </Button>
//       </div>
//     </form>
//   );
// }
