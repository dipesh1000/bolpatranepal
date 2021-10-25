import React from 'react';
import { Table } from 'react-bootstrap';

const AwardedTable = () => {
  return (
    <div className="tableContainer">
      <div className="main_title">Awared/Work To</div>
      <Table hover size="sm" variant="light">
        <thead>
          <tr>
            <td>S.No.</td>
            <td>Organizations</td>
            <td>Location</td>
            <td>Tendor Price</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default AwardedTable;
