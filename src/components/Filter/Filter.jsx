import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/sliceFilter';

import { IoIosSearch } from 'react-icons/io';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter);

  return (
    <div className="relative">
      <input
        type="text"
        name="query"
        onChange={e => dispatch(changeFilter(e.target.value))}
        value={value}
        className="border-2 border-indigo-500 py-2 px-10"
        placeholder="Search..."
      />
      <span className="absolute top-0 left-0">
        <IoIosSearch
          style={{ width: 40, height: 40, fill: 'rgb(88 28 135)' }}
        />
      </span>
    </div>
  );
};

export default Filter;
