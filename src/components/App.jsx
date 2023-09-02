import Filter from './Filter/Filter';
import FormContact from './Form/Form';
import ListContact from './ListContacts/ListContacts';

export const App = () => {
  return (
    <div className="flex gap-6 py-10 px-10">
      <FormContact />
      <div className="w-96">
        <Filter />
        <ListContact />
      </div>
    </div>
  );
};
