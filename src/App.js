import { useQuery, gql } from '@apollo/client';
import {TailSpin} from 'react-loader-spinner';

import "./App.css"

const CONTENT_VALUES = gql`
  query GetSubjects{
    messages{
          items{
                 id,
                 body,
                 subject,
                 
                }       
              
              }
  }
`
;
export default function App() {
  const {loading,error, data } = useQuery(CONTENT_VALUES);
  
 if(loading) return(
    <div className="loader-container">
      <TailSpin  className='spinner-class'  visible={true} ariaLabel='tail-spin-loading'/>
      <p className='loading'>Loading..!</p>
    </div>
 );
  
 if (error) return <p className='error-out'>Error : {error.message}</p>;
  return (
    <div className='container-box'>
     <h2 className="title-of-header">✔ Fecting Data with Graphical api and using react...!😘</h2>
      <li className="point-to-words">
      
      
        {data && data.messages.items.map(eachMessage =>(<><p className="App-link">id:{eachMessage.id}</p>
        <p className='subject'>subject:{eachMessage.subject}</p>
        <p className='content'>Body:{eachMessage.body}</p>
        <hr/></>
        
        
        ))}
        </li>
    </div>
  );
}