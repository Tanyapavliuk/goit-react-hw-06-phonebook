import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/actions';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter);

  return (
    <>
      <input
        type="text"
        name="query"
        onChange={e => dispatch(changeFilter(e.target.value))}
        value={value}
        className="border-2 border-indigo-500 py-2 px-3"
        placeholder="Search..."
      />
    </>
  );
};

export default Filter;
