/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Select, DatePicker, Checkbox } from 'antd';
import { getUsers } from '../../../actions/user';
import {
  GetContractType,
  GetDepartement,
  GetOffice,
} from '../../../actions/SettingsAction';

import { useDispatch } from 'react-redux';
const { Option } = Select;

function JobInformation(props) {
  const [OfficeList, setOfficeList] = useState([]);
  const [reprtedto, setreprtedto] = useState([]);
  const [DepartementList, setDepartementList] = useState([]);
  const [ContractTypeList, setContractTypeList] = useState([]);

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
    if (res.status == 200) setreprtedto(res.data);
  };

  useEffect(() => {
    GetOffices();
  }, []);

  const GetOffices = async () => {
    const res = await GetOffice(dispatch);
    if (res.status == 200) setOfficeList(res.data);
  };
  useEffect(() => {
    GetDepartements();
  }, []);

  const GetDepartements = async () => {
    const res = await GetDepartement(dispatch);
    if (res.status == 200) setDepartementList(res.data);
  };

  useEffect(() => {
    GetContractTypes();
  }, []);

  const GetContractTypes = async () => {
    const res = await GetContractType(dispatch);
    if (res.status == 200) setContractTypeList(res.data);
  };
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
                onChange={(e) => props.HandleOffice(e)}
              >
                {OfficeList.length > 0 &&
                  OfficeList.map((el, index) => {
                    return (
                      <Option key={index} value={el._id}>
                        {' '}
                        {el.name}{' '}
                      </Option>
                    );
                  })}
              </Select>
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
                onChange={(e) => props.HandleDep(e)}
              >
                {DepartementList.length > 0 &&
                  DepartementList.map((el, index) => {
                    return (
                      <Option key={index} value={el._id}>
                        {' '}
                        {el.name}{' '}
                      </Option>
                    );
                  })}
              </Select>
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
                onChange={(e) => props.HandleReported(e)}
              >
                {reprtedto.length > 0 &&
                  reprtedto.map((el, index) => {
                    return (
                      <Option key={index} value={el._id}>
                        {' '}
                        {el.name + ' ' + el.lastName}{' '}
                      </Option>
                    );
                  })}
              </Select>
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
                onChange={(e) => props.HandleContract(e)}
              >
                {ContractTypeList.length > 0 &&
                  ContractTypeList.map((el, index) => {
                    return (
                      <Option key={index} value={el._id}>
                        {' '}
                        {el.name}{' '}
                      </Option>
                    );
                  })}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name={'Start'} label="Start">
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
