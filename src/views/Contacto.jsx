import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Contcto() {
    return(
        <div>
            <h1 className='titulo2'>Cuentanos, ¿En que podemos ayudarte?
            </h1>
          <Form>
          <Form.Group className=" mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='texto'>Correo</Form.Label>
            <Form.Control type="email" placeholder="nombre@correo.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className='texto'> Descripcion</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button className='boton' variant="danger">Danger</Button>{' '}

        </Form>
        </div>

      );
    }
    
