import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form'
// import Slider from "rc-slider";
// import RangeSlider from 'react-bootstrap-range-slider';

const FilterNav = () => {
  // const [ value, setValue ] = useState(0); 
  const [values, setValues] = useState([0, 1000]); // Initial minimum and maximum values

  const handleChange = (newValues) => {
    setValues(newValues);
  };
  
  return (
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Price</Accordion.Header>
          <Accordion.Body>
            {/* <div style={{ width: "80%", margin: "0 auto" }}>
              <Slider.Range
                min={0}
                max={1000}
                step={10}
                value={values}
                onChange={handleChange}
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>${values[0]}</span>
                <span>${values[1]}</span>
              </div>
            </div> */}
            {/* <label for="customRange1" className="form-label">Example range</label>
            <input type="range" className="form-range" id="customRange1"></input> */}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Color</Accordion.Header>
          <Accordion.Body>
          <Form>
            <div key={`default-checkbox}`} className="mb-3">
              <Form.Check 
                type='checkbox'
                id={`default-checkbox`}
                label={`default checkbox`}
              />
            </div>
          </Form>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Discounted</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    
  );
};

export default FilterNav;
