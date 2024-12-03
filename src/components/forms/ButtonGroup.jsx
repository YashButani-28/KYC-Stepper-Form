import ActionButton from "../formComponents/ActionButton";

export default function ButtonGroup() {
  return (
    <div className="flex justify-evenly w-2/6">
      <ActionButton variant="lightGray">Previous</ActionButton>
      <ActionButton variant="primary">Save & Next</ActionButton>
      <ActionButton variant="gray">Save</ActionButton>
      <ActionButton variant="darkGray">Reset</ActionButton>
    </div>
  );
}
