import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { clearAllFormData } from "../../redux/slices/forms";
import { editKycForm } from "../../redux/slices/forms";
function ViewDetails() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [formDetails, setFormDetails] = useState(null);
  const userId = useSelector((state) => state.auth.user.userId);

  // Function to fetch user details from the server
  const fetchKYCForm = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/users?id=${userId}`
      );

      const userKYCForms = response.data;
      // const currentFormKey = `form${userKYCForms?.currentForm || 1}`; // Adjust key as needed
      setFormDetails(userKYCForms[0].kycForms);
    } catch (error) {
      console.error("Failed to fetch KYC forms:", error);
    }
  };

  // const deleteKycForm = async (userId) => {
  //   try {
  //     const response = await axios.delete(
  //       `http://localhost:3000/users?id=${userId}`
  //     );

  //     const user = response.data;
  //     // const currentFormKey = `form${userKYCForms?.currentForm || 1}`; // Adjust key as needed
  //     const kycForms = user[0].kycForms;
  //     await axios.delete(
  //       `http://localhost:3000/users/?id=${userId}/${kycForms}`
  //     );
  //     Navigate("/layout/view-details");
  //   } catch (error) {
  //     console.error("Failed to fetch KYC forms:", error);
  //   }
  // };
  const deleteKycForms = () => {
    dispatch(clearAllFormData(userId));
    navigate("/layout/basic-details");
    window.location.reload();

    //   const userKYCForms = response.data;
    //   if (userKYCForms.length > 0) {
    //     const formDetails = userKYCForms[0].kycForms;
    //     setFormDetails(formDetails);

    //     // Construct URL for deleting a specific form
    //     const formKeyToDelete = "form1"; // Replace with the desired form key (e.g., 'form1', 'form2', etc.)
    //     const deleteUrl = `http://localhost:3000/users/${userId}/kycForms/${formKeyToDelete}`;

    console.log("Failed to fetch KYC forms:");
  };

  const editKycForms = () => {
    // dispatch(clearAllFormData(userId));
    dispatch(editKycForm());
    navigate("/layout/basic-details");

    console.log("Failed to fetch KYC forms:");
  };

  useEffect(() => {
    if (userId) {
      fetchKYCForm(userId);
      // window.location.reload();
    }
  }, [userId]);

  useEffect(() => {
    if (formDetails) {
      console.log("Form details updated:", formDetails);
    }
  }, [formDetails]);

  return (
    <table className="w-full border-collapse text-[#696774]">
      <thead className="bg-[#F3F2F8]">
        <tr className="font-thin">
          <th className="py-2 px-2 font-normal text-center w-1/12">Type</th>
          <th className="font-normal text-center w-1/12">Company Name</th>
          <th className="font-normal text-center w-1/12">Contact No.</th>
          <th className="font-normal text-center w-1/12">Address</th>
          <th className="font-normal text-center w-1/12">Street</th>
          <th className="font-normal text-center w-1/12">Zip Code</th>
          <th className="font-normal text-center w-1/12">City</th>
          <th className="font-normal text-center w-1/12">State</th>
          <th className="font-normal text-center w-1/12">Country</th>
          <th className="font-normal text-center w-1/12">Default</th>
          <th className="font-normal text-center w-1/12">Action</th>
        </tr>
      </thead>
      <tbody>
        {formDetails ? (
          <tr className="border-b">
            <td className="py-2 px-2 text-center">
              {formDetails.form4.addressType || "-"}
            </td>
            <td className="text-center">{formDetails.form1.company || "-"}</td>
            <td className="text-center">
              {formDetails.form4.contactNo || "-"}
            </td>
            <td className="text-center">{formDetails.form4.area || "-"}</td>
            <td className="text-center">{formDetails.form4.street || "-"}</td>
            <td className="text-center">{formDetails.form4.zipcode || "-"}</td>
            <td className="text-center">{formDetails.form4.city || "-"}</td>
            <td className="text-center">{formDetails.form4.state || "-"}</td>
            <td className="text-center">{formDetails.form4.country || "-"}</td>
            <td className="text-center">
              <input type="checkbox" className="border-primary" />
            </td>
            <td className="text-center">
              <div className="flex justify-center gap-1 items-center">
                <button
                  onClick={() => editKycForms()}
                  className="text-primary px-1 py-1   rounded"
                >
                  <FaPencilAlt />
                </button>
                <button
                  onClick={() => deleteKycForms()}
                  className="text-[#FF0F0F] px-1 py-1 rounded"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </td>
          </tr>
        ) : (
          <tr>
            <td colSpan="11" className="text-center py-4">
              {/* <p>Loading...</p> */}
              <p>No Data Found!</p>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default ViewDetails;
