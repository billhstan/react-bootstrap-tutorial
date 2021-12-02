import './App.css';
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Alert, Form } from 'react-bootstrap';
function App() {
  const [incident, setIncident] = useState({
    email: '',
    incident: ''
  })
  const handleSubmit = event => {
    event.preventDefault();
    alert(`Your state values: \n 
            email: ${incident.email} \n
            incident: ${incident.incident} \n 
            You can replace this alert with more code which handles validation and REST API post request call.`);
  };
  const updateIncident = (event, property) => {
    const target = event.target
    console.log(target)

    event.preventDefault()
    setIncident((prevState) => ({
      ...prevState,
      [property]: event.target.value,
    }))
  }
  return (

    <div className="App">
      <header className="App-header">

        <Alert variant="primary">This is a Button</Alert>
        <Button>Experiment by using a button first</Button>
        <Form className='row mt-2 col-6' onSubmit={handleSubmit}>
          <Form.Group className="row mt-2">
            <Form.Label htmlFor="email" className="col-sm-3 col-form-label col-form-label-sm text-right">Email</Form.Label>
            <div class="col-sm-9">
              <Form.Control
                name="email"
                size="sm"
                type="text"
                placeholder="test@example.com"
                value={incident.email}
                onChange={(e) => updateIncident(e, 'email')}
              />
            </div>
          </Form.Group>
          <Form.Group className="row mt-2">
						<Form.Label htmlFor="incident" className="col-sm-3 col-form-label col-form-label-sm text-right">Incident description</Form.Label>
            <div class="col-sm-9">      
						<Form.Control
							name="incident"
							as="textarea"
              rows="3"
							placeholder="Describe the incident"
              size="sm"
              value={incident.incident}
              onChange={(e) => updateIncident(e, 'incident')}
						/>
            </div>
		      </Form.Group>
          <Form.Group className="row mt-2">
            <div class="form-button offset-sm-9 col-sm-3">
              <Button
                id="submit"
                size="sm"
                className="btn btn-primary float-right"
                onClick={handleSubmit}
              >Submit</Button>
            </div>
          </Form.Group>		          
        </Form>
      </header>
    </div>
  );
}

export default App;
