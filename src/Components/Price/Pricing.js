import React, { useEffect, useState } from 'react'
import icon1 from '../../assets/img/icons/jm.png';
import icon2 from '../../assets/img/icons/images.png';
import icon3 from '../../assets/img/icons/download1.png';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import {  Button, ButtonGroup, Checkbox, FormControl, Grid, Input, InputAdornment, InputLabel, MenuItem, Select, Tab, Tabs, TextField } from '@mui/material';
export const conversionFactors = {
    USD: 0.014, // Assuming 1 INR = 0.014 USD
    EUR: 0.012, // Assuming 1 INR = 0.012 EUR
    GBP: 0.011, // Assuming 1 INR = 0.011 GBP
    INR: 1,     // Default currency, 1 INR = 1 INR
    AUD: 0.02,  // Assuming 1 INR = 0.02 AUD
    CAD: 0.018, // Assuming 1 INR = 0.018 CAD
    JPY: 1.5,   // Assuming 1 INR = 1.5 JPY
    CNY: 0.09,  // Assuming 1 INR = 0.09 CNY
    SGD: 0.019, // Assuming 1 INR = 0.019 SGD
    NZD: 0.022, // Assuming 1 INR = 0.022 NZD
    AED: 0.052, // Assuming 1 INR = 0.052 AED
    ZAR: 0.23,  // Assuming 1 INR = 0.23 ZAR
    BRL: 0.072, // Assuming 1 INR = 0.072 BRL
    MXN: 0.29,  // Assuming 1 INR = 0.29 MXN
    CHF: 0.013, // Assuming 1 INR = 0.013 CHF
    SEK: 0.13,  // Assuming 1 INR = 0.13 SEK
    NOK: 0.12,  // Assuming 1 INR = 0.12 NOK
    DKK: 0.095, // Assuming 1 INR = 0.095 DKK
    HKD: 0.11,  // Assuming 1 INR = 0.11 HKD
    SAR: 0.052, // Assuming 1 INR = 0.052 SAR
  };
  const icons = {
    1: icon1,
    2: icon2,
    3: icon3
  };
  export const CementPlants = [
    {id:1, name : "Mining Machine", img : icon1},
    {id:2, name : "Clinkerizer", img : icon2},
    {id:3, name : "Packaging Machines", img : icon3}]
  export const formatCurrency = (amount, currency) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
    });
  
    return formatter.format(amount);
  };
  export const unformatCurrency = (formattedValue) => {
    // Convert to string and remove any non-digit characters
    const numericString = formattedValue.toString().replace(/[^\d.-]/g, '');
  
    // Parse the numeric string to a float
    const numericValue = parseFloat(numericString);
  
    return isNaN(numericValue) ? 0 : numericValue;
  };
  
  
  export const currencyMenuItems = Object.keys(conversionFactors).map((currencyCode) => (
    <MenuItem key={currencyCode} value={currencyCode} selected={currencyCode === 'INR'}>
      {currencyCode}
    </MenuItem>
  ));
  
const Pricing = () => {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState('INR'); // Initial currency as INR
    const [price, setPrice] = useState(100); // Initial price (you can fetch this from your data)
    const [invoiceSubtotal, setINvoiceTotal] = useState(0)
    const [counter, setCounter] = useState(0);
    const [rowsData, setRowsData] = useState([]);
    const [value, setValue] = useState(0);
    useEffect(() => {
      const initialRows = [
        createRow(1, 'Mining Machine', rowQuantity(1), priceCalculator(300000000), 300000000),
        createRow(2, 'Clinkerizer', rowQuantity(1), priceCalculator(540000000), 540000000),
        createRow(3, 'Packaging Machines', rowQuantity(1), priceCalculator(590000000), 590000000),
      ];
      setRowsData(initialRows);
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        updatePrices(newValue);
      };
    
      const updatePrices = (tabValue) => {
        const tabPrices = {
          0: { 1: 300000000, 2: 540000000, 3: 590000000 },
          1: { 1: 400000000, 2: 640000000, 3: 690000000 },
          2: { 1: 500000000, 2: 740000000, 3: 790000000 },
        };
        
        const updatedRows = rowsData.map((row) => ({
          ...row,
          unit :priceCalculator(tabPrices[tabValue][row.id]),
          price: tabPrices[tabValue][row.id],
          selected : false
        }));
    console.log(updatedRows)
    setINvoiceTotal(0)
    setSelectedCheckboxes([])
        setRowsData(updatedRows);
      };
    
    
      const a11yProps = (index) => {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      };
    
    const handleCurrencyChange = (event) => {
      const newCurrency = event.target.value;
      const newPrice = price * conversionFactors[newCurrency];
  
      // Update the state
      setSelectedCurrency(newCurrency);
      setPrice(newPrice);

    };
    interface Row {
        desc: string;
        qty: number;
        unit: number;
        price: number;
      }
      
      
  const TAX_RATE = 0.18;


  function priceRow(qty: number, unit: number) {
    return qty * unformatCurrency(unit);
  }
  function subtotal(items:  Row[]) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }
  
  function createRow(id: number,desc: string, qty: number, unit: number) {
    const price = priceRow(qty, unit);
    const newPrice = priceRow(qty, unit);
    const selected = false
    return { id,desc, qty, unit,price,newPrice,selected};
  }
  function priceCalculator(value) {
    const newPrice = value * conversionFactors[selectedCurrency];
    return formatCurrency(newPrice,selectedCurrency)
  }
function rowQuantity(value) {
    return value
}
      const invoiceTaxes = TAX_RATE * invoiceSubtotal;
      const invoiceTotal = invoiceTaxes + invoiceSubtotal;
      const ImageComponent = ({ id }) => {
        return (
          <img
          className='image-grid'
          src={icons[id]}
            alt={`Image ${id}`}
           
          />
        );
      };
      
      const PlusButton = () => {
        return <span style={{ margin: "0 5px" }}>+</span>;
      };
      const handleCheckboxChange = (selectedRow, isChecked) => {
        const updatedRowsData = rowsData.map((row) => {
            if (row.id === selectedRow.id) {
              return { ...row, selected: !selectedRow.selected }; // Update selected status to true for the matching ID
            }
            return row;
          });
        
          setRowsData(updatedRowsData);
        console.log(selectedRow)
        // Use isChecked to determine whether the checkbox is selected or unselected
        const valueToAdd =unformatCurrency(selectedRow.price) // replace with the actual value property

        if (isChecked) {
          setINvoiceTotal((prevTotal) => prevTotal + valueToAdd);
        } else {
          setINvoiceTotal((prevTotal) => prevTotal - valueToAdd);
        }
        let updatedSelection = [...selectedCheckboxes];

        if (updatedSelection.includes(selectedRow.id)) {
          updatedSelection = updatedSelection.filter((item) => item !== selectedRow.id);
        } else {
          updatedSelection.push(selectedRow.id);
        }
        console.log(updatedSelection)
        setSelectedCheckboxes(updatedSelection);
      };
      
  return (
    <section className="pricing-wrapper section-padding pricing-bg">
        
        <div className="container">
        <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">
            <div className="block-contents text-center">
                <div className="section-title">
                <h2> Cement Plant Estimates</h2>
                <span>We provide you with a rough estimate of the investment required before starting a chemical plant.</span>
                </div>
            </div>
            </div>
        </div>
        <FormControl sx={{display : 'flex', justifyContent:'flex-end', flexDirection:'row'}}>
        <Select
          labelId="currency-selector-label"
          id="currency-selector"
          value={selectedCurrency}
          onChange={handleCurrencyChange}
        >
        {currencyMenuItems}
          {/* Add more currencies as needed */}
        </Select>
      </FormControl>
        <div className="row">
            <div className="col-lg-12 col-md-6 col-12">
                
            <div className="single-pricing-plan active">

            <TableContainer className='not-for-mobile' component={Paper}>
      <Table sx={{ minWidth: '100%' }} aria-label="spanning table">
        <TableHead>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
           <Tab label="100 TON"  />
          <Tab label="500 TON" />
          <Tab label="1000 TON"  />
        </Tabs>
      </Box>
          <TableRow>
            <TableCell>Machinery</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Select</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsData.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right" >
             {row.qty}
                </TableCell>
              <TableCell align="right">{priceCalculator(row.price,selectedCurrency)}</TableCell>
              <TableCell align="right">
                <Checkbox
                    checked={row.selected}
                    onChange={(event) => handleCheckboxChange(row, event.target.checked)}
                />
                </TableCell>
            
            </TableRow>
            
          ))}
          <TableRow >
            <TableCell ><b>Subtotal</b></TableCell>
            <TableCell colSpan={2} align="right">{priceCalculator(invoiceSubtotal,selectedCurrency)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><b>Tax</b></TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell colSpan={1} align="right">{priceCalculator(invoiceTaxes,selectedCurrency)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell ><b>Total</b></TableCell>
            <TableCell colSpan={2} align="right">{priceCalculator(invoiceTotal,selectedCurrency)}</TableCell>
          </TableRow>
        </TableBody>
        
      </Table>
    </TableContainer>
    <TableContainer className='only-for-mobile' component={Paper}>
      <Table sx={{ minWidth: '100%' }} aria-label="spanning table">
        <TableHead>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
           <Tab label="100 TON"  />
          <Tab label="500 TON" />
          <Tab label="1000 TON"  />
        </Tabs>
      </Box>
          <TableRow>
            <TableCell>Machinery</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsData.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc} <b style={{fontSize:'11px'}}>({priceCalculator(row.price,selectedCurrency)})</b></TableCell>
              <TableCell align="left">
                <Checkbox
                    checked={row.selected}
                    onChange={(event) => handleCheckboxChange(row, event.target.checked)}
                />
                </TableCell>
            
            </TableRow>
            
          ))}
          <TableRow >
            <TableCell  ><b>Subtotal</b></TableCell>
            <TableCell style={{fontSize:'11px'}} align="left"  ><b>{priceCalculator(invoiceSubtotal,selectedCurrency)}</b></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><b>Tax </b>({`${(TAX_RATE * 100).toFixed(0)}%`})</TableCell>
            <TableCell style={{fontSize:'11px'}} align="left"  ><b>{priceCalculator(invoiceTaxes,selectedCurrency)}</b></TableCell>
          </TableRow>
          <TableRow>
            <TableCell ><b>Total</b></TableCell>
            <TableCell style={{fontSize:'11px'}} align="left"  ><b>{priceCalculator(invoiceTotal,selectedCurrency)}</b></TableCell>
          </TableRow>
        </TableBody>
        
      </Table>
    </TableContainer>
                

    </div>
            </div>
            <Grid sx={{ flexGrow: 1, marginTop:'10px' }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={1}>
        {selectedCheckboxes.map((id, index) => (
            <Grid key={value} item>
              <ImageComponent id={id} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid>
        </div>
        
        </div>
    </section>  

  )
}

export default Pricing