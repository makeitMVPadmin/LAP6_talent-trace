import Snapshot from '@/components/Snapshot/Snapshot';
import SnapStatic from '@/components/SnapStatic/SnapStatic';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

function SnapshotPage() {
  return (
    <>
      <div className="snapshotpage bg-amber-100 flex flex-col items-center pb-[13rem]">
        <div className="snapshotpage__back w-[1200px] flex flex-row my-[2.5rem] gap-[2px] justify-start">
          <img
            src="/src/assets/icons/chevron-left.svg"
            className="snapshotpage__icon"
          />
          <p className="font-medium text-[0.875rem] text-secondary">Previous</p>
        </div>
        <div className="snapshotpage__banner w-[1200px] flex flex-row justify-end gap-[22px] mb-[1rem] items-baseline">
          <div className="snapshotpage__download flex flex-col items-center h-[50px]">
            <img
              src="/src/assets/icons/download.svg"
              className="snapshotpage__icon"
            />
            <p className="snapshotpage__label font-bold text-[0.875rem] text-secondary">
              Download
            </p>
          </div>
          <div className="snapshotpage__download flex flex-col items-center h-[50px]">
            <img
              src="/src/assets/icons/delete.svg"
              className="snapshotpage__icon"
            />
            <p className="snapshotpage__label font-bold text-[0.875rem] text-secondary">
              Delete
            </p>
          </div>
          <div className="snapshotpage__download flex flex-col items-center h-[50px]">
            <img
              src="/src/assets/icons/add.svg"
              className="snapshotpage__icon"
            />
            <p className="snapshotpage__label font-bold text-[0.875rem] text-secondary">
              Create
            </p>
          </div>
        </div>
        <Carousel className="max-w-[1200px]">
          <CarouselContent>
            <CarouselItem className="flex self-center justify-center">
              <SnapStatic />
            </CarouselItem>
            <CarouselItem className="flex self-center justify-center">
              <Snapshot />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}

export default SnapshotPage;
