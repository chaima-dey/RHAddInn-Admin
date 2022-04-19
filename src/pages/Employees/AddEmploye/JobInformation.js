import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Select, DatePicker, Checkbox } from 'antd';
import { getUsers } from '../../../actions/user';
import { useDispatch } from 'react-redux';

function JobInformation(props) {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  const dispatch = useDispatch();
  const user = props.user;
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const res = await getUsers(dispatch);
    console.log(res.data);

    if (res.status == 200) setData(res.data);
  };

  const [Data, setData] = useState([user]);
  const [reprtedto, setreprtedto] = useState([]);

  return (
    <>
      <Form layout="vertical">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              name={'Office'}
              label="Office"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                style={{ width: '100%' }}
                showSearch
                placeholder="Select office"
                size="large"
                onChange={(e) => props.HandleOffice(e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={'Departement'}
              label="Departement"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                style={{ width: '100%' }}
                showSearch
                placeholder="Select Departement"
                onChange={(e) => props.HandleDep(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              name={'Job Title'}
              label="Job Title"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                style={{ width: '100%' }}
                showSearch
                placeholder="Select Job Title"
                onChange={(e) => props.HandlePost(e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={'Reported to'}
              label="Reported to"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                style={{ width: '100%' }}
                showSearch
                placeholder="Reported to"
                size="large"
                onChange={(e) => props.HandleReported(e.target.value)}
                //options={reprtedto}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              name={'Contract'}
              label="Contract"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                style={{ width: '100%' }}
                showSearch
                placeholder="Select Contract Type"
                onChange={(e) => props.HandleContract(e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name={'Start'} val label="Start">
              <DatePicker
                style={{ width: '100%', height: '40px' }}
                size="large"
                placeholder={'Start with Addinn From'}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Checkbox onChange={onChange}>Send Invitation </Checkbox>
        </Row>
      </Form>
    </>
  );
}

export default JobInformation;
