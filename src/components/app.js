import React from 'react'

function app  ()  {
    const readGoogleSheet=()=> {
       

fetch("https://sheetdb.io/api/v1/dxkccfwf9lama")
.then((response) => response.json())
.then((data) => console.log(data));

    };

    const updateGoogleSheet=()=> {
        fetch("https://sheetdb.io/api/v1/dxkccfwf9lama/id/1", {
    method: 'PATCH',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: {
            
        id: "101",
        }
    })
})
  .then((response) => response.json())
  .then((data) => console.log(data));

    };
    const deleteGoogleSheet=() =>{
        fetch("https://sheetdb.io/api/v1/dxkccfwf9lama", {
    method: 'DELETE',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
  .then((response) => response.json())
  .then((data) => console.log(data));

    };
    const createGoogleSheet=() =>{
        fetch("https://sheetdb.io/api/v1/dxkccfwf9lama", {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: [
            {
                'id': "INCREMENT",
                'name': "Mark",
                'age': 18
            }
        ]
    })
})
  .then((response) => response.json())
  .then((data) => console.log(data));

    }
  return (
    <div>
      <button onClick={() =>readGoogleSheet()}>Read Google Sheet</button>
      <button onClick={() =>updateGoogleSheet()}>Update Google Sheet</button>
      <button onClick={() =>deleteGoogleSheet()}>Update Google Sheet</button>
      <button onClick={() =>createGoogleSheet()}>Update Google Sheet</button>
    </div>
  )
}

export default app
