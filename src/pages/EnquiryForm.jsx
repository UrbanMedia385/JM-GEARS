import React, { useState, useEffect, useRef } from "react";
import "../assets/css/EnquiryForm.css";
import { Button, Checkbox, FormControl, Grid, Input, InputLabel, ListItemText, ListSubheader, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import { CementSpareParts } from "../ProductsData/cementSparePartsData";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP +50,
      // width: 250,
    },
  },
};


export const EnquiryForm = ({data}) => {
  console.log(data)
// Extracting the 'CementSpareParts' object
// const cementSparePartsObject = CementSpareParts.find(item => item.hasOwnProperty('CementSpareParts'))?.CementSpareParts || [];
const foundObject = CementSpareParts.find(item => item.hasOwnProperty(data));

// Extract the value associated with the key
const foundValue = foundObject ? foundObject[data] : [];

// Extract the array of values from the found value
const crushersArray = foundValue[0]?.[data] || [];

// Extracting keys and values from all the object
const productsData = foundValue.map(subItem => {
  const key = Object.keys(subItem)[0]; // Extracting the key
  const values = Object.values(subItem)[0]; // Extracting the values
  return { key, values };
});

  const [personName, setPersonName] =useState([]);
  const handleInputChange = (event) => {
    let inputValue = event.target.value;

    // Remove any non-numeric characters from the input value
    const numericValue = inputValue.replace(/\D/g, '');

    // Limit the input to a maximum of 10 characters
    const truncatedValue = numericValue.slice(0, 10);

    // Update the input field value with the truncated numeric value
    event.target.value = truncatedValue;

    // Perform your logic or update state with the truncated value
    // For example, you can setState or dispatch an action with truncatedValue
  };
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleToggle = (value) => () => {
    const currentIndex = personName.indexOf(value);
    const newChecked = [...personName];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setPersonName(newChecked);
  };

  return (
    <div id="enquiry-form">
      <form
        className="form"
        autoComplete="on"
      >
        <div className="formHeading">
          <h3>Enquire Now!</h3>
        </div>
        {/* <div className="formSection"> */}
        <Grid container spacing={2} justifyContent="center">
      <Grid item xs={6} sm={3}>
        <TextField
          required
          id="outlined-required"
          helperText="Enter Email"
          sx={{
            width: '100%',
            '& input': { color: 'white' },
            '&:before': { borderBottom: '1px solid white' },
            '&:after': { borderBottom: '1px solid white' },
            '& fieldset': { borderColor: 'white' },
            '&:focus': {
              '& fieldset': { borderColor: 'white !important' },
            },
          }}
        />
      </Grid>
      <Grid item xs={6} sm={3}>
        <TextField
          required
          id="outlined-required"
          helperText="Enter Name"
          sx={{
            width: '100%',
            '& input': { color: 'white' },
            '&:before': { borderBottom: '1px solid white' },
            '&:after': { borderBottom: '1px solid white' },
            '& fieldset': { borderColor: 'white' },
            '&:focus': {
              '& fieldset': { borderColor: 'white !important' },
            },
          }}
        />
      </Grid>
      <Grid item xs={6} sm={3}>
      <TextField
      required
      id="outlined-required"
      helperText="Enter Number"
      type="text" // Set the type to 'text'
      onInput={handleInputChange} // Handle the input event
      sx={{
        width: '100%',
        '& input': { color: 'white' },
        '&:before': { borderBottom: '1px solid white' },
        '&:after': { borderBottom: '1px solid white' },
        '& fieldset': { borderColor: 'white' },
        '&:focus': {
          '& fieldset': { borderColor: 'white !important' },
        },
      }}
    />

      </Grid>
      <Grid item xs={6} sm={3}>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel htmlFor="grouped-select" sx={{ color: 'white' }}>Products</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
            
            sx={{
              color: 'white',
              '&:before': { borderBottom: '1px solid white' },
              '&:after': { borderBottom: '1px solid white' },
              '& fieldset': { borderColor: 'white' },
              '&:focus': {
                '& fieldset': { borderColor: 'white !important' },
              },
            }}
          >
            {/* <ListSubheader>Cement Spare Parts</ListSubheader>
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
            <ListSubheader>Category 2</ListSubheader>
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))} */}
            {productsData.map((item) => (
        <>
          <ListSubheader>{item.key}</ListSubheader>
          {item.values.map((value) => (
            <MenuItem key={value} value={value}>
                            <Checkbox
                checked={personName.indexOf(value) > -1}
                onChange={handleToggle(value)}
              />
              <ListItemText primary={value} />
            </MenuItem>
          ))}
        </>
      ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid sx={{cursor:'pointer'}} >
        <Button sx={{cursor:'pointer'}} variant="contained">Submit</Button>
      </Grid>
    </Grid>
      </form>
    </div>
  );
};
