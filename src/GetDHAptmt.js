import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetDHAptmt = () => {
  const [data, setData] = useState([]);
  const [data17, setData17] = useState([]);
  const [data18, setData18] = useState([]);
  const [data19, setData19] = useState([]);
  const [data20, setData20] = useState([]);
  const [data21, setData21] = useState([]);
  const [DHhospital, setDHhospital] = useState([]);
  const [DHhospital17, setDHhospital17] = useState([]);
  const [DHhospital18, setDHhospital18] = useState([]);
  const [DHhospital19, setDHhospital19] = useState([]);
  const [DHhospital20, setDHhospital20] = useState([]);
  const [DHhospital21, setDHhospital21] = useState([]);
  const date1 = '15';
  const date2 = '16';
  const date3 = '17';
  const date4 = '18';
  const date5 = '19';
  const date6 = '20';
  useEffect(() => {
    axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=282001&date=${date1}-05-2021`
      )
      .then(response => setData(response.data.centers));
    axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=282001&date=${date2}-05-2021`
      )
      .then(response => setData17(response.data.centers));
    axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=282001&date=${date3}-05-2021`
      )
      .then(response => setData18(response.data.centers));
    axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=282001&date=${date4}-05-2021`
      )
      .then(response => setData19(response.data.centers));
    axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=282001&date=${date5}-05-2021`
      )
      .then(response => setData20(response.data.centers));
    axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=282001&date=${date6}-05-2021`
      )
      .then(response => setData21(response.data.centers));
  }, []);
  useEffect(() => {
    data.map(ele => {
      if (ele.center_id === 697215) {
        const temp = [];
        ele.sessions.map(element => {
          temp.push(element.available_capacity);
        });
        setDHhospital(temp);
      }
    });
  }, [data]);
  useEffect(() => {
    data17.map(ele => {
      if (ele.center_id === 697215) {
        const temp = [];
        ele.sessions.map(element => {
          temp.push(element.available_capacity);
        });
        setDHhospital17(temp);
      }
    });
  }, [data17]);
  useEffect(() => {
    data18.map(ele => {
      if (ele.center_id === 697215) {
        const temp = [];
        ele.sessions.map(element => {
          temp.push(element.available_capacity);
        });
        setDHhospital18(temp);
      }
    });
  }, [data18]);
  useEffect(() => {
    data19.map(ele => {
      if (ele.center_id === 697215) {
        const temp = [];
        ele.sessions.map(element => {
          temp.push(element.available_capacity);
        });
        setDHhospital19(temp);
      }
    });
  }, [data19]);
  useEffect(() => {
    data20.map(ele => {
      if (ele.center_id === 697215) {
        const temp = [];
        ele.sessions.map(element => {
          temp.push(element.available_capacity);
        });
        setDHhospital20(temp);
      }
    });
  }, [data20]);
  useEffect(() => {
    data21.map(ele => {
      if (ele.center_id === 697215) {
        const temp = [];
        ele.sessions.map(element => {
          temp.push(element.available_capacity);
        });
        setDHhospital21(temp);
      }
    });
  }, [data21]);
  useEffect(() => {
    console.log(DHhospital);
    console.log(DHhospital17);
    console.log(DHhospital18);
    console.log(DHhospital19);
    console.log(DHhospital20);
    console.log(DHhospital21);
  }, [DHhospital, DHhospital17, DHhospital18, DHhospital19, DHhospital20, DHhospital21]);
  return (
    <div>
      <h1>Availability in District Hospital</h1>
      <h2>{date1}th</h2>
      {DHhospital.length > 0
        ? DHhospital.map((ele, index) => <span key={index}>{ele}</span>)
        : null}
      <h2>{date2}th</h2>
      {DHhospital17.length > 0
        ? DHhospital17.map((ele, index) => <span key={index}>{ele}</span>)
        : null}
      <h2>{date3}th</h2>
      {DHhospital18.length > 0
        ? DHhospital18.map((ele, index) => <span key={index}>{ele}</span>)
        : null}
      <h2>{date4}th</h2>
      {DHhospital19.length > 0
        ? DHhospital19.map((ele, index) => <span key={index}>{ele}</span>)
        : null}
      <h2>{date5}th</h2>
      {DHhospital20.length > 0
        ? DHhospital20.map((ele, index) => <span key={index}>{ele}</span>)
        : null}
      <h2>{date6}th</h2>
      {DHhospital21.length > 0
        ? DHhospital21.map((ele, index) => <span key={index}>{ele}</span>)
        : null}
    </div>
  );
};

export default GetDHAptmt;
