import { useDispatch, useSelector } from 'react-redux';
import { deliteContact } from 'redux/sliceContact';
import Table from 'react-bootstrap/Table';

const ListContact = () => {
  const contacts = useSelector(state => state.contants);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const visibleContactList = () => {
    const visibleList = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return visibleList;
  };

  return (
    <Table striped bordered hover variant="ligth">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {visibleContactList().map((contact, i) => (
          <tr>
            <td>{i + 1}</td>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td
              onClick={e => {
                dispatch(deliteContact(contact.id));
              }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <span>&#215;</span>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ListContact;
