/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
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

const HireTalentModal = ({ modalTrigger, triggerClass, selectedCategory }) => {
  console.log("selectedCategory", selectedCategory);

  return (
    <>
      <Dialog>
        <DialogTrigger className={triggerClass}>{modalTrigger}</DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="border-b pb-4 mb-4">
              Hire A Talent
            </DialogTitle>
            <DialogDescription>
              <form className="grid grid-cols-12 gap-5">
                <div className="col-span-6">
                  <Input type="text" placeholder="Fullname *" />
                </div>
                <div className="col-span-6">
                  <Input type="email" placeholder="Email *" />
                </div>
                <div className="col-span-12">
                  <Input type="text" placeholder="Mobile *" />
                </div>
                <div className="col-span-12">
                  <Label htmlFor="jd" className="text-xs">
                    Attach JD file here
                  </Label>
                  <Input type="file" id="jd" className="mt-1" />
                </div>
                <div className="col-span-12">
                  <Textarea placeholder="write your job requirement here *" />
                </div>
                <div className="col-span-12">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree with{" "}
                      <NavLink to={"/privacy-policy"} className={"underline"}>
                        privacy policy
                      </NavLink>{" "}
                      and{" "}
                      <NavLink
                        to={"/terms-and-condition"}
                        className={"underline"}
                      >
                        terms & conditions
                      </NavLink>
                    </label>
                  </div>
                </div>
                <div className="col-span-6 mt-5">
                  <DialogClose asChild>
                    <Button variant="outline" className="w-full">
                      Close
                    </Button>
                  </DialogClose>
                </div>
                <div className="col-span-6 mt-5">
                  <Button className="w-full" type="button">
                    Submit
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HireTalentModal;
