import React from 'react';
import { Button, Form } from 'react-bootstrap';

const ProcrumentInterest = ({
  data,
  handleNext,
  handleChange,
  handlePrev,
  handleSubmit,
  step,
}) => {
  return (
    <div className="procrument_interest container">
      <div className="procrument_heading">
        <div className="procrument_heading_text">
          Procurements you are interested in
        </div>
        <div className="form_checkall">
          <Form.Group controlId="selectAll">
            <Form.Check type="checkbox">
              <Form.Check.Label>Check All</Form.Check.Label>
              <Form.Check.Input
                name="selectAll"
                onChange={handleChange}
                type="checkbox"
                step={step}
                checked={
                  data?.filter((i) => i && i.isChecked !== true).length < 1
                }
              />
            </Form.Check>
          </Form.Group>
        </div>
      </div>
      <ul className="interest_box_list">
        {data &&
          data.map((item, index) => (
            <li key={index}>
              <Form.Group controlId={`formBasicCheckbox${item?.id}`}>
                <Form.Check
                  type="checkbox"
                  onChange={handleChange}
                  step={step}
                  id={item?.id}
                  value={item?.title}
                  checked={(item && item.isChecked) || false}
                  name={item?.title}
                  label={item?.title}
                />
              </Form.Group>
            </li>
          ))}
      </ul>
      <div className="button_container">
        {step !== 'first' && (
          <Button onClick={handlePrev} type="button">
            Prev
          </Button>
        )}
        {step !== 'third' ? (
          <Button
            onClick={handleNext}
            className="nextBtnInterest"
            type="button"
          >
            Next
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            className="nextSubmitBtn btn-success"
            type="submit"
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProcrumentInterest;
