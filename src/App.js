import { useQuery, gql } from '@apollo/client';
import "./App.css"

const GET_SUBJECTS = gql`
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
  const { loading, error, data } = useQuery(GET_SUBJECTS);
  console.log(data)
 if (loading) return <p className='loading'>Loading...</p>;
 if (error) return <p className='error-out'>Error : {error.message}</p>;
  return (
    <div className='container-box'>
      <h2 className="title-of-header"> Fecting Data with Graphical api and using react...!</h2>
      <li className="point-to-words">
      
        {data && data.messages.items.map(eachMessage =>(<p className="App-link">id:{eachMessage.id}
        <p>subject:{eachMessage.subject}</p>
        <p>Body:{eachMessage.body}</p>
        <hr/></p>
        
        
        ))}
        </li>
    </div>
  );
}