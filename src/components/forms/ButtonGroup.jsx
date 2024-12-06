import ActionButton from "../formComponents/ActionButton";

export default function ButtonGroup({ resetForm }) {
  return (
    <div className="flex justify-evenly w-2/6">
      <ActionButton type="submit" variant="lightGray">
        Previous
      </ActionButton>
      <ActionButton type="submit" variant="primary">
        Save & Next
      </ActionButton>
      <ActionButton type="submit" variant="gray">
        Save
      </ActionButton>
      <ActionButton type="reset" variant="darkGray" onClick={() => resetForm()}>
        Reset
      </ActionButton>
    </div>
  );
}
