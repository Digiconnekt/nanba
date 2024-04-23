/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useMail from "@/helpers/sendMail";
import { LoaderCircle } from "lucide-react";
import useFileUpload from "@/helpers/fileUpload";

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

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const templateData = {
      fullName: formData.fullName,
      email: formData.email,
      mobile: formData.mobile,
      file: formData.file,
      message: formData.message,
      subject: "Submit Resume",
    };

    sendMailReq(
      templateData,
      import.meta.env.VITE_APP_EMAIL_JS_TEMPLATE_ID_MODAL
    );
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
            <Button asChild variant="outline">
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
                  value={formData.fullname}
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className="col-span-6">
                <Input
                  type="email"
                  placeholder="Email *"
                  name="email"
                  value={formData.email}
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className="col-span-12">
                <Input
                  type="text"
                  placeholder="Mobile *"
                  name="mobile"
                  value={formData.mobile}
                  onChange={onChangeHandler}
                  required
                />
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
                  <Checkbox id="terms" required />
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
