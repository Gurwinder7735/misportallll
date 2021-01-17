import {
  SET_USER,
  SET_TOKEN,
  SET_PASSWORD,
  SET_USERNAME,
  SET_DATA,
  SET_TABLE_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_LOADING,
  SET_SELECTED_OPERATOR,
  SET_SELECTED_PROMOTER,
  SET_SELECTED_SERVICES,
  SET_SELECTED_FROM_DATE,
  SET_SELECTED_TO_DATE,
} from "./actionType";

import queryString from 'query-string'; 

export const setUser = (data)=>{
    console.log('setting user');
    return {
        type: SET_USER,
        payload: data
    }
}

export const setToken = (data)=>{
    console.log('setting user');
    return {
        type: SET_TOKEN,
        payload: data
    }
}

export const setPassword = (data)=>{
    return {
        type: SET_PASSWORD,
        payload: data
    }
}

export const setUsername = (data)=>{
    console.log('setting user');
    return {
        type: SET_USERNAME,
        payload: data
    }
}

export const setData = (data)=>{
    console.log('setting user');
    return {
        type: SET_DATA,
        payload: data
    }
}

export const setTableData = (data)=>{
    console.log('setting user');
    return {
        type: SET_TABLE_DATA,
        payload: data
    }
}

export const getDataSuccess = (data)=>{
    console.log('setting user');
    return {
        type: GET_DATA_SUCCESS,
        payload: data
    }
}

export const getDataLoading = (data)=>{
    console.log('setting user');
    return {
        type: GET_DATA_LOADING,
        payload: data
    }
}

export const setSelectedOperator = (data)=>{
    console.log('setting user');
    return {
        type: SET_SELECTED_OPERATOR,
        payload: data
    }
}

export const setSelectedPromoter = (data)=>{
    console.log('setting user');
    return {
        type: SET_SELECTED_PROMOTER,
        payload: data
    }
}

export const setSelectedServices = (data)=>{
    console.log('setting user');
    return {
        type: SET_SELECTED_SERVICES,
        payload: data
    }
}

export const setSelectedFromDate = (data)=>{
    console.log('setting user');
    return {
        type: SET_SELECTED_FROM_DATE,
        payload: data
    }
}

export const setSelectedToDate = (data)=>{
    console.log('setting user');
    return {
        type: SET_SELECTED_TO_DATE,
        payload: data
    }
}

export const handleLogin = (username,password)=>{
    // console.log('Logging In');
    return async (dispatch) => {

        const data = {
            Username: username,
            password: password
        }

        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: queryString.stringify(data)
        };

        fetch('https://mis-api.gamesawaari.com/Auth',requestOptions).then(res=>{
            return res.json();
        }).then(res=>{
            console.log('response',res.data);  
            dispatch(setUser(res.data.user)) 
            console.log(res.data.Token);
            dispatch(setToken(res.data.Token))

        })
    }
}

export const handleLogOut = () => {
   
    return async (dispatch) => {
            dispatch(setToken(null))
            dispatch(setUser(null))
    }
}

export const getData = (user,token)=>{
    console.log('Getting Data');
    return async (dispatch) => {
        const data = {
            action: 1,
            user: 'ndoto'
        }
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded','token': token },
            body: queryString.stringify(data)
        };

        fetch('https://mis-api.gamesawaari.com/Urls', requestOptions)
        .then(res=>{
            return res.json();
            // console.log('res',JSON.stringify(res))
        }).then(res=>{
            // console.log('response Data',res.data.operatorlist);
            dispatch(setData(res.data.operatorlist))  
        })
    }
}

export const getTableData = (id, user, token, selectedOperator, selectedPromoter, selectedServices, selectedFromDate)=>{
    console.log('Getting Table Data.........');
    return async (dispatch) => {
        const data = {
            action: id,
            user: 'ndoto',
            datetime: selectedFromDate,
            promotername: selectedPromoter,
            operator: selectedOperator,
            svc_name: `"${selectedServices}"`
        }
          const requestOptions = {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'token': token
              },
              body: queryString.stringify(data)
        };
        
        fetch('https://mis.api.gamesawaari.com/Urls', requestOptions).then(res => {
            console.log('ResS',res);
            return res.json()
        }).then(res => {
            console.log('DAATA',data);
        }).catch(err => {
            console.log(err);
        })
    }
}

