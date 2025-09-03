/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as Yup from "yup";
import useMail from "@/helpers/sendMail";
import { NavLink } from "react-router-dom";
import { LoaderCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import useFileUpload from "@/helpers/fileUpload";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useRef, useState } from "react";

const validationSchema = Yup.object({
  fullName: Yup.string()
    .matches(
      /^[A-Za-z\s]+$/,
      "fullname must contain only alphabetic characters"
    )
    .required("fullname is required"),
  email: Yup.string()
    .email("must be a valid email")
    .required("email is required"),
  mobile: Yup.number().required("mobile is required"),
});

const SubmitResumeModal = () => {
  const { isLoading, data, sendMailReq } = useMail();
  const {
    isLoading: isLoadingFileUpload,
    data: dataFileUpload,
    fileUploadReq,
  } = useFileUpload();

  const closeBtnRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    file: "",
    message: "",
  });
  const [file, setFile] = useState("");
  const [validationErrors, setValidationErrors] = useState(null);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "fullName") {
      const sanitizedValue = value.replace(/[^A-Za-z\s]/g, "");
      setFormData((prevData) => ({
        ...prevData,
        fullName: sanitizedValue,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const templateData = {
      fullName: formData.fullName,
      email: formData.email,
      mobile: formData.mobile,
      file: formData.file,
      message: formData.message,
      subject: "Submit Resume",
    };

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      sendMailReq(
        templateData,
        import.meta.env.VITE_APP_EMAIL_JS_TEMPLATE_ID_MODAL
      );
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = {};
        error.inner.forEach((err) => {
          errors[err.path] = err.message;
        });
        setValidationErrors(errors);
      }
    }
  };

  useEffect(() => {
    if (data) {
      if (closeBtnRef.current) {
        closeBtnRef.current.click();
      }

      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        file: "",
        message: "",
      });

      setValidationErrors(null);
    }
  }, [data]);

  useEffect(() => {
    if (dataFileUpload) {
      setFormData((prevData) => ({
        ...prevData,
        file: dataFileUpload?.data?.url,
      }));
    }
  }, [dataFileUpload, file]);

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className="flex items-center gap-2 justify-center">
            <span className="block text-xl font-caveat text-center mb-1">
              for jobseeker
            </span>
            <img
              src="../../../../images/home/curved-arrow.png"
              alt="Arrow"
              className="w-5 h-3"
            />
          </div>
          <span>
            <Button asChild variant="secondary">
              <span>Submit Resume</span>
            </Button>
          </span>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="border-b pb-4 mb-4">
              Submit Resume
            </DialogTitle>
            <form
              className="grid grid-cols-12 gap-5 items-end"
              onSubmit={submitHandler}
            >
              <div className="col-span-6">
                <Input
                  type="text"
                  placeholder="Fullname *"
                  name="fullName"
                  value={formData.fullName}
                  onChange={onChangeHandler}
                />
                {validationErrors?.fullName && (
                  <span className="text-xs text-red-500">
                    {validationErrors?.fullName}
                  </span>
                )}
              </div>
              <div className="col-span-6">
                <Input
                  type="email"
                  placeholder="Email *"
                  name="email"
                  value={formData.email}
                  onChange={onChangeHandler}
                />
                {validationErrors?.email && (
                  <span className="text-xs text-red-500">
                    {validationErrors?.email}
                  </span>
                )}
              </div>
              <div className="col-span-12">
                <Input
                  type="number"
                  placeholder="Mobile *"
                  name="mobile"
                  value={formData.mobile}
                  onChange={onChangeHandler}
                />
                {validationErrors?.mobile && (
                  <span className="text-xs text-red-500">
                    {validationErrors?.mobile}
                  </span>
                )}
              </div>
              <div className="col-span-8">
                <Label htmlFor="jd" className="text-xs">
                  Attach Resume here
                </Label>
                <Input
                  type="file"
                  id="jd"
                  className="mt-1"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <div className="col-span-4">
                <Button
                  className="w-full"
                  type="button"
                  disabled={isLoadingFileUpload || !file}
                  onClick={() => fileUploadReq(file)}
                >
                  Upload
                  {isLoadingFileUpload && (
                    <LoaderCircle className="animate-spin ms-2" size={20} />
                  )}
                </Button>
              </div>
              <div className="col-span-12">
                <Textarea
                  placeholder="write a brief about job expectations"
                  name="message"
                  value={formData.message}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="col-span-12">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" checked />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree with{" "}
                    <NavLink to={"/privacy-policy"} className={"underline"}>
                      privacy policy
                    </NavLink>
                  </label>
                </div>
              </div>
              <div className="col-span-6 mt-5">
                <DialogClose asChild>
                  <Button
                    ref={closeBtnRef}
                    variant="outline"
                    className="w-full"
                  >
                    Close
                  </Button>
                </DialogClose>
              </div>
              <div className="col-span-6 mt-5">
                <Button className="w-full" type="submit" disabled={isLoading}>
                  Submit
                  {isLoading && (
                    <LoaderCircle className="animate-spin ms-2" size={20} />
                  )}
                </Button>
              </div>
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SubmitResumeModal;
