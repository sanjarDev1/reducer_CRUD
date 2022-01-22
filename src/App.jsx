import React, { useReducer } from 'react';

export const App = () => {
  
const funcReduser =(state, action)=>{
switch (action.type) {
  // case 'delete': return state.data.filter(value=>value.id !== action.payload.ids)
  case 'edit': return {
    ...state,
     select: state.select = action.payload.mock.id,
     title: state.title = action.payload.mock.name
    }
  case 'soz' : return {...state, title: state.title = action.payload.write}
  case 'save': return {data: state.data.map(value=>value.id === state.select ? {...value, name: state.title}: value )}
  case 'search': return action.payload.searched !== '' ?  {data: state.data.filter(value=>value.name.toLowerCase().includes(action.payload.searched))} : {...state}
  default: return state;  
}
}

  const [state, dispatch] = useReducer(funcReduser,{
  data: [
    {id: 1, name: 'Toshmat'},
    {id: 2, name: 'Eshmat'},
    {id: 3, name: 'Nurmat'},
    {id: 4, name: 'Jurat'},
    ],
    select:null,
    title: ''
});
  
  
  
  return (
  <div>
    <input type="text" onChange={(e)=>dispatch({type:'search', payload:{searched: e.target.value }})}/>
    <button >search</button>
          <table border='1px'width={"50%"}>
             <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Action </th>
              </tr>
            </thead>
            <tbody>
                {
                  state.data.map((value)=>{
                    return(
                      <tr key={value.id}>
                          <td>{value.id}</td>
                          <td>{state.select === value.id ? <input value={state.title} type="text" onChange={(e)=>dispatch({type: 'soz',payload:{write:e.target.value}})}/> :  value.name}</td>
                          <td>
                            {/* <button onClick={()=>dispatch({type:'delete', payload:{ids: value.id}})} >delete</button> */}
                            {
                              state.select === value.id ? 
                              <button onClick={()=>dispatch({type: "save"})} >Save</button>
                              :
                              <button onClick={()=>dispatch({type: 'edit', payload:{ mock: value }})}>Edit</button>
                            }
                          </td>
                      </tr>
                    )
                  })
                }
            </tbody>
          </table>

  </div>)
};
