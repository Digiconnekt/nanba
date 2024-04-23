import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useMail from "@/helpers/sendMail";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { fadeInLeft, fadeInRight } from "@/helpers/framerMotionHelper";
import { LoaderCircle } from "lucide-react";

const FormAndMap = () => {
  const { isLoading, data, sendMailReq } = useMail();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

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
      subject: formData.subject,
      message: formData.message,
    };

    sendMailReq(
      templateData,
      import.meta.env.VITE_APP_EMAIL_JS_TEMPLATE_ID_CONTACT
    );
  };

  useEffect(() => {
    if (data) {
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  }, [data]);

  return (
    <>
      <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-24 overflow-hidden">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Have Some Questions?
        </h2>

        <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-14">
          <motion.div
            className="col-span-12 lg:col-span-6"
            variants={fadeInLeft()}
            initial="hidden"
            whileInView="visible"
          >
            <form onSubmit={submitHandler} className="grid grid-cols-12 gap-5">
              <div className="col-span-12">
                <Input
                  type="text"
                  placeholder="Fullname *"
                  name="fullName"
                  value={formData.fullName}
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className="col-span-12">
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
                  placeholder="Subject *"
                  name="subject"
                  value={formData.subject}
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className="col-span-12">
                <Textarea
                  placeholder="write your message here *"
                  name="message"
                  value={formData.message}
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className="col-span-12">
                <Button className="w-full" type="submit" disabled={isLoading}>
                  Submit
                  {isLoading && (
                    <LoaderCircle className="animate-spin ms-2" size={20} />
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
          <motion.div
            className="col-span-12 lg:col-span-6"
            variants={fadeInRight()}
            initial="hidden"
            whileInView="visible"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1957.9811565850805!2d76.97007208876285!3d11.041452479841157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85866a14d3bd7%3A0xa79be8491dcd174e!2sThangammal%20Nagar%2C%20Kalpana%20Layout%2C%20Ganapathy%2C%20Coimbatore%2C%20Tamil%20Nadu%20641006!5e0!3m2!1sen!2sin!4v1713524263055!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              width={"100%"}
              height={"100%"}
            ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FormAndMap;
