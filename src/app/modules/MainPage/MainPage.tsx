import React from 'react';
import AddDialog from '../AddDialog';
import Navbar from '../Navbar';
import WordTable from '../WordTable';

export const MainPage = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = React.useState(false);
  const handleAddDialogToggle = () => {
    setIsAddDialogOpen(!isAddDialogOpen);
  };
  return (
    <div>
      <Navbar />
      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        data-modal-toggle="large-modal"
        onClick={() => {
          handleAddDialogToggle();
        }}
      >
        Add Word
      </button>
      <WordTable />
      <AddDialog open={isAddDialogOpen} onClose={handleAddDialogToggle} />
    </div>
  );
};
