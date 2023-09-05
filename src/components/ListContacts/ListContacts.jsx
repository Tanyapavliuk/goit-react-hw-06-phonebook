import { useDispatch, useSelector } from 'react-redux';
import { deliteContact } from 'redux/sliceContact';
import ListGroup from 'react-bootstrap/ListGroup';

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
    <ListGroup variant="flush" style={{ gap: 10 }}>
      {visibleContactList().map(contact => (
        <ListGroup.Item key={contact.id} style={{ backgroundColor: '#a7a7ec' }}>
          <button
            style={{
              backgroundColor: '#5c5c8a',
              width: 30,
              height: 30,
              borderRadius: '50%',
              overflow: 'hidden',
              color: '#a7a7ec',
              marginRight: 20,
            }}
            type="button"
            onClick={e => {
              dispatch(deliteContact(contact.id));
            }}
          >
            &#215;
          </button>
          <span>
            {contact.name} : {contact.phone}
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListContact;
