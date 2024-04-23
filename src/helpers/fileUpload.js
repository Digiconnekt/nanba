import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const useFileUpload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fileUploadReq = async (file) => {
    try {
      setIsLoading(true);
      const data = new FormData();

      data.append("file", file);
      data.append(
        "upload_preset",
        import.meta.env.VITE_APP_CLOUDINARY_UPLOAD_PRESET
      );
      data.append("cloud_name", import.meta.env.VITE_APP_CLOUDINARY_CLOUD_NAME);

      const res = await axios.post(
        import.meta.env.VITE_APP_CLOUDINARY_UPLOAD_URL,
        data
      );
      setData(res);
      toast.success("file uploaded Successfully");
      // console.log("res", res);
    } catch (error) {
      setError(error);
      toast.error("Failed to upload file");
      // console.log("error in uploading file", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, fileUploadReq };
};

export default useFileUpload;
