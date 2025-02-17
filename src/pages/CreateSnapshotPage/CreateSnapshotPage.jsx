import SelectSkills from '@/components/SelectSkills/SelectSkills';

const CreateSnapshotPage = () => {
  return (
    <>
      <h1>Create Snapshot</h1>
      <SelectSkills /> {/* Ensure this is within CategoriesProvider */}
    </>
  );
};

export default CreateSnapshotPage;
