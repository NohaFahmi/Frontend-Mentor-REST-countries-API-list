import React from 'react';
import ReactLoading from 'react-loading';
 
const UiLoader = ({ type, color }) => (
    <ReactLoading type={type} color={color} width={'5%'} />
);
 
export default UiLoader;
