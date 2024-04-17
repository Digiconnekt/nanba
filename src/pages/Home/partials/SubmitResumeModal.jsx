import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const SubmitResumeModal = () => {
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
          <Button variant="outline">Submit Resume</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Submit Resume</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SubmitResumeModal;
