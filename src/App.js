import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function App() {
  return (
    <div className="App">
      <InputGroup>
        <Form.Control
          placeholder="Add To-Do"
          aria-label="Todo with Submit Edit Delete"
        />
        <Button variant="success">Submit</Button>
        <Button variant="warning">Edit</Button>
        <Button variant="danger">Delete</Button>
      </InputGroup>
      <p>todo list 1</p>
    
    </div>
  );
}

export default App;
