import React from 'react'
import icon1 from '../../assets/img/icons/p1.png';
import icon2 from '../../assets/img/icons/p2.png';
import icon3 from '../../assets/img/icons/p3.png';
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

import {  Checkbox, Tab, Tabs } from '@mui/material';

  const TAX_RATE = 0.07;

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

const handleCheckboxChange = (selectedRow) => {
    console.log(selectedRow.weight)
   };
function priceRow(qty: number, unit: number) {
  return qty * unit;
}

function createRow(desc: string, qty: number, unit: number) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

interface Row {
  desc: string;
  qty: number;
  unit: number;
  price: number;
}

function subtotal(items:  Row[]) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Paperclips (Box)', 100, 1.15),
  createRow('Paper (Case)', 10, 45.99),
  createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;
const Pricing = () => {
    
  return (
    <section className="pricing-wrapper section-padding pricing-bg">
        <div className="container">
        <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">
            <div className="block-contents text-center">
                <div className="section-title">
                <span>Pricing Table</span>
                <h2>Smart Pricing Plans For Smooth Work</h2>
                </div>
            </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 col-md-6 col-12">
            <div className="single-pricing-plan active">
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: '100%' }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Desc</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
              <Checkbox
            checked={row.selected}
            onChange={() => handleCheckboxChange(row)}
          />
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
                

    </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
            <div className="single-pricing-plan active">
                <div className="package-head">
                <div className="icon">
                    <img src={icon2} alt="" />
                </div>
                <div className="package-title">
                    <h6>Standard</h6>
                    <h2>$69.00</h2>
                </div>
                </div>
                <div className="package-features">
                <span>24/7 Tech Support</span>
                <span>Free Equipment Tools</span>
                <span>Advance Options</span>
                <span>Motion Detection Plan</span>
                <span>Night Vision</span>
                </div>
                <div className="package-btn">
                <Link to="/contact">Choose Plan</Link>
                </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
            <div className="single-pricing-plan active">
                <div className="package-head">
                <div className="icon">
                    <img src={icon2} alt="" />
                </div>
                <div className="package-title">
                    <h6>Standard</h6>
                    <h2>$69.00</h2>
                </div>
                </div>
                <div className="package-features">
                <span>24/7 Tech Support</span>
                <span>Free Equipment Tools</span>
                <span>Advance Options</span>
                <span>Motion Detection Plan</span>
                <span>Night Vision</span>
                </div>
                <div className="package-btn">
                <Link to="/contact">Choose Plan</Link>
                </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
            <div className="single-pricing-plan active">
                <div className="package-head">
                <div className="icon">
                    <img src={icon2} alt="" />
                </div>
                <div className="package-title">
                    <h6>Standard</h6>
                    <h2>$69.00</h2>
                </div>
                </div>
                <div className="package-features">
                <span>24/7 Tech Support</span>
                <span>Free Equipment Tools</span>
                <span>Advance Options</span>
                <span>Motion Detection Plan</span>
                <span>Night Vision</span>
                </div>
                <div className="package-btn">
                <Link to="/contact">Choose Plan</Link>
                </div>
            </div>
            </div>
        </div>
        
        </div>
    </section>  

  )
}

export default Pricing