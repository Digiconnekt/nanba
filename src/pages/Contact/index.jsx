import Banner from "../../components/Banner";
import ContactDetails from "./partials/ContactDetails";
import FormAndMap from "./partials/FormAndMap";

const index = () => {
  return (
    <>
      <Banner
        title={"Contact Us"}
        subTitle={
          "Thank you for getting in touch! Kindly Fill the form, have a great day!"
        }
      />
      <FormAndMap />
      <ContactDetails />
    </>
  );
};

export default index;
