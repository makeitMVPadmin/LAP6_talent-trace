import PropTypes from 'prop-types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Check } from 'lucide-react';

export default function SuccessModal({ open, onClose }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-[#FFF1C5] border-none shadow-lg w-[700px] h-[300px]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-customBlue"
        ></button>

        {/* Checkmark icon */}
        <div className="flex justify-center -mt-12">
          <Check className="w-[80px] h-[80px] text-[#FFF1C5]  bg-customYellow rounded-full shadow-md" />
        </div>

        {/* Modal content */}
        <DialogHeader>
          <DialogTitle className="text-[42px] font-fraunces leading-normal font-bold text-customBlue text-center mb-6">
            Success, your Snapshot has been generated
          </DialogTitle>
          <p className="font-montserrat text-customBlue text-center text-sm mt-2">
            You can now view and download your snapshot!
          </p>
        </DialogHeader>
        <DialogFooter className=" mt-9 overflow-hidden bg-customYellow h-[35px] rounded-b-full"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// ✅ Add PropTypes to fix ESLint warnings
SuccessModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
