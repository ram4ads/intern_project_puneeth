import { useQuery, gql } from '@apollo/client';
import "./App.css"

const GET_SUBJECTS = gql`
  query GetSubjects{
    messages{
          items{
                 subject
                }       
              
              }
  }
`
;





export default function App() {
  const { loading, error, data } = useQuery(GET_SUBJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className='container-box'>
      <h2 className="title-of-header">✔My first Apollo app🤞</h2>
      <div className="point-to-words">
      
        {data.messages.items.map(eachMessage =>(<h3 class="App-link">=>{eachMessage.subject}</h3>))}
        </div>
    </div>
  );
}