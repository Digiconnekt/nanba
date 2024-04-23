import { useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const useMail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const sendMailReq = async (templateData, templateId) => {
    try {
      setIsLoading(true);
      const res = await emailjs.send(
        import.meta.env.VITE_APP_EMAIL_JS_SERVICE_ID,
        templateId,
        templateData,
        import.meta.env.VITE_APP_EMAIL_JS_PUBLIC_KEY
      );
      setData(res);
      toast.success("Message Send Successfully");
      // console.log("res", res);
    } catch (error) {
      setError(error);
      toast.error("Failed to Send Message");
      // console.log("error in sending email", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, sendMailReq };
};

export default useMail;
