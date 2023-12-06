// apiThunk.js
import { createAsyncThunk } from "@reduxjs/toolkit";


// get fun
export const ApiData = createAsyncThunk('apifetchdata', async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts');
    return result.json();
});


// delete fun
export const DeleteApiData = createAsyncThunk('apidelete', async (id) => {
    let authToken = 'frist testing';
    const result = await fetch(`delete-api/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
        },
    });
    if (result.ok) {
        return { success: true };
    } else {
        const errorData = await result.json();
        return { success: false, error: errorData };
    }
});


//update funtion
export const UpdateApiData = createAsyncThunk('apiUpdate', async ({ id, newData }) => {
    let authToken = 'first testing';
    const result = await fetch(`update-api/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify(newData),
    });

    if (result.ok) {
        const updatedData = await result.json();
        return { success: true, updatedData };
    } else {
        const errorData = await result.json();
        return { success: false, error: errorData };
    }
});


//update funtion in axios
export const UpdateApiDataAxis = createAsyncThunk('apiUpdate', async ({ id, newData }) => {
    const authToken = 'first testing';
  
    try {
      const response = await axios.patch(`update-api/${id}`, newData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      });
  
      // Assuming your response contains the updated data
      return { success: true, updatedData: response.data };
    } catch (error) {
      // If there's an error, you can handle it here
      return { success: false, error: error.response.data };
    }
});