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

const HireTalentModal = ({ modalTrigger, triggerClass, selectedCategory }) => {
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
      category: selectedCategory,
      subject: "Hire A Talent",
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
        <DialogTrigger className={triggerClass}>{modalTrigger}</DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="border-b pb-4 mb-4">
              Hire A Talent
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
                  Attach JD file here
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
                  placeholder="write your job requirement here *"
                  name="message"
                  value={formData.message}
                  onChange={onChangeHandler}
                  required
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

export default HireTalentModal;
