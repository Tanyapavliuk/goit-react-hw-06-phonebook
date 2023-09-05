import { Container, Row, Col } from 'react-bootstrap';
import Filter from './Filter/Filter';
import FormContact from './Form/Form';
import ListContact from './ListContacts/ListContacts';

export const App = () => {
  return (
    <Container className="py-10">
      <Row>
        <Col>
          <FormContact />
        </Col>
        <Col>
          <Filter />
          <ListContact />
        </Col>
      </Row>
    </Container>
  );
};
