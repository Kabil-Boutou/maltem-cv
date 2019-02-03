import React from 'react'
import * as jsPDF from 'jspdf'

const handelPrint = () => {
  var doc = new jsPDF()
}
const print = props => (
  <>
    <button onClick={handelPrint}>print</button>
  </>
)

export default print
