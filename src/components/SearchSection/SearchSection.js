import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { GoSearch } from 'react-icons/go';
import './styles/SearchArea.scss';

const SearchSection = () => {
  return (
    <div className="searchArea">
      <Form>
        <Form.Group as={Row} controlId="formSearch">
          <Col sm={10}>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Search For Procurment"
            />
          </Col>
          <Col sm={2}>
            <Button>
              <GoSearch />
            </Button>
          </Col>
        </Form.Group>
        <div className="seach_field"></div>
      </Form>
    </div>
  );
};

export default SearchSection;
