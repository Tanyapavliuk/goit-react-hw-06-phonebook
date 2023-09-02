import { useDispatch, useSelector } from 'react-redux';
import { deliteContact } from 'redux/sliceContact';

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
    <ul className="flex flex-col gap-3 list-none py-2 ">
      {visibleContactList().map(contact => (
        <li
          key={contact.id}
          className="flex justify-around shadow-md shadow-indigo-500/40 bg-indigo-200 py-2"
        >
          <button
            type="button"
            className="border border-indigo-600 px-2"
            onClick={e => {
              dispatch(deliteContact(contact.id));
            }}
          >
            &#215;
          </button>
          <span>
            {contact.name} : {contact.phone}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ListContact;
