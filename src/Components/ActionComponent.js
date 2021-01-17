import React from "react";
import "./ActionComponent.css";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Table from './Table'
import {
  setSelectedOperator,
  setSelectedPromoter,
  setSelectedFromDate,
  setSelectedToDate,
  setSelectedServices,
  getTableData
} from "../redux/action";

const ActionComoponent = (props) => {
  const dispatch = useDispatch();
  const {
    user,
    token,
    data,
    selectedOperator,
    selectedPromoter,
    selectedServices,
    selectedFromDate,
    selectedToDate,
  } = useSelector((state) => state);

  console.log('Data', data);
 
 

  const id = parseInt(props.match.params.id);
  console.log(props);
  return (
    <>
    <div className="actionComponent">
        <h2>NDOTO</h2>
        

    <div className="row">
          <div className="col-md-2">
           
          </div>
           <div className="col-md-2">
           
          </div>
        </div>
        
          <div className="row">
          <div className="col-md-2">
           
          </div>
           <div className="col-md-2">
           
          </div>
    </div>
    






      <div className="form-row">
        <select
          value={selectedOperator}
          onChange={(e) => dispatch(setSelectedOperator(e.target.value))}
        >
                <option defaultValue="" selected>
                Select Operator
              </option>
              {
                  data?.map(operatorList => {
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
       
        <select
          value={selectedPromoter}
          onChange={ (e) => dispatch(setSelectedPromoter(e.target.value))}
        >
           <option defaultValue="" selected>Select Promoter</option>
                  {
          data?.find(operatorList => operatorList.operator === selectedOperator)?.promoterlist.map(promoter => {
            return <option value={promoter.promoter}> { promoter.promoter }</option>
                   })
               }
        </select>

        <div>
            From:<input type="date" value={selectedFromDate} onChange={(e)=>dispatch(setSelectedFromDate(e.target.value))}></input>
           To:<input type="date" onChange={(e)=>dispatch(setSelectedFromDate(e.target.value))}></input>     
        </div>
        
         {console.log(selectedFromDate)}
        <div className="checkbox-group">
            {
              // console.log('selected promoter', selectedPromoter)
              data?.find(operatorList => operatorList.operator === selectedOperator)?.promoterlist?.find(promoter => promoter.promoter === selectedPromoter)?.servicelist.map((service,index) => {
                return   <label class="contain">{service.servicename}
                  <input
                    type="checkbox"
                    value={index + 1}
                    onClick={
                      (e) => {
                      
                        if (e.target.checked) {
                            
                            let filteredValues = [...selectedServices,e.target.value]
                            dispatch(setSelectedServices(filteredValues))
                          } else {
                            let filteredValues = selectedServices.filter(item => e.target.value !== item)
                            dispatch(setSelectedServices(filteredValues))
                        }
                         
                      }
                    } />
                  {
                    console.log('selected services', selectedServices)
                  }
                <span class="checkmark"></span>
              </label>
              })
              
            }
{/*             
              <label class="contain">Thee
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </label>
              <label class="contain">Four
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </label> */}
         </div>  
       
      </div>
      <div className="form-row">
          < button className = "btn btn-outline-dark"
          onClick = {()=>
            dispatch(getTableData(id, user, token, selectedOperator, selectedPromoter, selectedServices, selectedFromDate))
          }> Get Data </button>
        </div>
        {/* <Table/> */}
      </div>
      </>
  );
};

export default ActionComoponent;
