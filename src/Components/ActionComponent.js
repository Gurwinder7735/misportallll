import React from "react";
import "./ActionComponent.css";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import {
  setSelectedOperator,
  setSelectedPromoter,
  setSelectedFromDate,
  setSelectedToDate,
  setSelectedServices,
} from "../redux/action";

const ActionComoponent = (props) => {
  const dispatch = useDispatch();
  const {
    data,
    selectedOperator,
    selectedPromoter,
    selectedServices,
    selectedFromDate,
    selectedToDate,
  } = useSelector((state) => state);

  console.log('Data',data);

  const id = parseInt(props.match.params.id);
  console.log(props);
  return (
    <div className="actionComponent">
      <h2>NDOTO</h2>
      <div className="form-row">
        <select
          value={selectedOperator}
          onChange={(e) => dispatch(setSelectedOperator(e.target.value))}
        >
                <option defaultValue="" selected>
                Select
              </option>
              {
                  data.length > 0&& data.map(operatorList => {
                      return <option>{operatorList.operator}</option>
                  })
              }
         {/* {data?.map((operator) => {
            
                      return (
                        <option value={operator.operator} selected>
                          {operator.operator}
                        </option>
                      );
                    })} */}
        </select>

        <select>
          <option>Select</option>
        </select>

        <select>
          <option>Select</option>
        </select>
      </div>
    </div>
  );
};

export default ActionComoponent;
