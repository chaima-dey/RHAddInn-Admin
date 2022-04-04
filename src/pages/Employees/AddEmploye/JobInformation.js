import React from 'react';
import { Row, Col, Form, Select, DatePicker, Checkbox } from 'antd';

function JobInformation() {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <>
      <Form>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Select
              style={{ width: '100%' }}
              showSearch
              placeholder="Select office"
            />
          </Col>
          <Col span={12}>
            <Select
              style={{ width: '100%' }}
              showSearch
              placeholder="Reported to"
            />
          </Col>
        </Row>

        <br />
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Select
              style={{ width: '100%' }}
              showSearch
              placeholder="Select Departement"
            />
          </Col>
          <Col span={12}>
            <Select
              style={{ width: '100%' }}
              showSearch
              placeholder="Select Job Title"
            />
          </Col>
        </Row>

        <br />
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Select
              style={{ width: '100%' }}
              showSearch
              placeholder="Select Contract Type"
            />
          </Col>
          <Col span={12}>
            <DatePicker
              style={{ width: '100%', height: '40px' }}
              size="large"
              placeholder={'Start with Addinn From'}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Checkbox onChange={onChange}>Send Invitation </Checkbox>
        </Row>
      </Form>
    </>
  );
}

export default JobInformation;
