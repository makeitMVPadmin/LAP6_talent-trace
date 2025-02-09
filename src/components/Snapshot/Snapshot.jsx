import './Snapshot.css';
import { Badge } from '@/components/ui/badge';

function Snapshot() {
  return (
    <div className="snapshot h-[900px] w-[1200px] border-2 border-black rounded-[20px] flex flex-row justify-between">
      <div className="snapshot__left my-[32px] ml-[32px] flex flex-col justify-between">
        <div className="snapshot__box h-[386px] w-[262px] bg-[url('/src/assets/images/snapshot_box_frame.png')] flex flex-col">
          <h2 className="snapshot__heading font-serif text-[28px] mt-[28px] mx-[28px]">
            Collaborator
          </h2>
          <p className="snapshot__text font-sans text-xs mx-[28px]">
            This is where the answer will go for approximately 200 characters
            long. I will answer this question in about 40 words as that is the
            conversion. I need about 20 more words to go until I hit the
            capacity.{' '}
          </p>
          <div className="snapshot__media my-[30px] ml-[30px] flex flex-row gap-[9px]">
            <img
              src="/src/assets/images/placeholder_image.png"
              className="snapshot__img h-[80px] w-[80px] rounded-[10px]"
            />
            <img
              src="/src/assets/images/placeholder_image.png"
              className="snapshot__img h-[80px] w-[80px] rounded-[10px]"
            />
          </div>
          <div className="snapshot__skills ml-[30px] flex flex-row gap-[9px]">
            <Badge className="snapshot__badge text-xs h-[20px] bg-slate-200 text-black">
              Figma
            </Badge>
            <Badge className="snapshot__badge text-xs h-[20px] bg-slate-200 text-black">
              Collaboration
            </Badge>
          </div>
        </div>
        <div className="snapshot__box h-[386px] w-[262px] bg-[url('/src/assets/images/snapshot_box_frame.png')]">
          <h2 className="snapshot__heading font-serif text-[28px] mt-[28px] mx-[28px]">
            Analytical
          </h2>
          <p className="snapshot__text font-sans text-xs mx-[28px]">
            This is where the answer will go for approximately 200 characters
            long. I will answer this question in about 40 words as that is the
            conversion. I need about 20 more words to go until I hit the
            capacity.{' '}
          </p>
          <div className="snapshot__media my-[30px] ml-[30px] flex flex-row gap-[9px]">
            <img
              src="/src/assets/images/placeholder_image.png"
              className="snapshot__img h-[80px] w-[80px] rounded-[10px]"
            />
            <img
              src="/src/assets/images/placeholder_image.png"
              className="snapshot__img h-[80px] w-[80px] rounded-[10px]"
            />
          </div>
          <div className="snapshot__skills ml-[30px] flex flex-row gap-[9px]">
            <Badge className="snapshot__badge text-xs h-[20px] bg-slate-200 text-black">
              Figma
            </Badge>
            <Badge className="snapshot__badge text-xs h-[20px] bg-slate-200 text-black">
              Collaboration
            </Badge>
          </div>
        </div>
      </div>
      <div className="snapshot__center flex-1 bg-[url('/src/assets/images/snapshot_center_frame.png')] bg-no-repeat bg-center flex flex-col justify-between items-center">
        <div className="snapshot__top w-[556px] h-[240px] mt-[32px] pt-[15px] px-[45px] flex flex-col items-center">
          <h1 className="snapshot__name font-serif text-[28px] pt-[32px]">
            Vidushi Pandey
          </h1>
          <h3 className="snapshot__role font-serif text-[20px] pt-[15px]">
            UX/UI Designer
          </h3>
          <div className="snapshot__skills--all flex flex-row gap-[20px] w-[380px] pt-[32px] justify-center flex-wrap">
            <Badge className="snapshot__badge text-xs h-[20px] bg-gray-800 text-white">
              Creativity
            </Badge>
            <Badge className="snapshot__badge text-xs h-[20px] bg-gray-800 text-white">
              Collaboration
            </Badge>
            <Badge className="snapshot__badge text-xs h-[20px] bg-gray-800 text-white">
              Creativity
            </Badge>
            <Badge className="snapshot__badge text-xs h-[20px] bg-gray-800 text-white">
              Collaboration
            </Badge>
            <Badge className="snapshot__badge text-xs h-[20px] bg-gray-800 text-white">
              Collaboration
            </Badge>
          </div>
        </div>
        <div className="snapshot__bot w-[556px] h-[240px] mb-[32px] pb-[15px] px-[45px] flex flex-row">
          <div className="snapshot__botinfo">
            <h2 className="snapshot__heading font-serif text-[28px] mt-[28px] mx-[28px]">
              Analytical
            </h2>
            <p className="snapshot__text font-sans text-xs mx-[28px]">
              This is where the answer will go for approximately 200 characters
              long. I will answer this question in about 40 words as that is the
              conversion. I need about 20 more words to go until I hit the
              capacity.{' '}
            </p>
            <div className="snapshot__skills ml-[28px] my-[30px] flex flex-row gap-[9px]">
              <Badge className="snapshot__badge text-xs h-[20px] bg-slate-200 text-black">
                Figma
              </Badge>
              <Badge className="snapshot__badge text-xs h-[20px] bg-slate-200 text-black">
                Collaboration
              </Badge>
            </div>
          </div>
          <div className="snapshot__media flex flex-col min-w-[80px] gap-[9px]">
            <img
              src="/src/assets/images/placeholder_image.png"
              className="snapshot__img h-[80px] w-[80px] rounded-[10px]"
            />
            <img
              src="/src/assets/images/placeholder_image.png"
              className="snapshot__img h-[80px] w-[80px] rounded-[10px]"
            />
          </div>
        </div>
      </div>
      <div className="snapshot__right my-[32px] mr-[32px] flex flex-col justify-between">
        <div className="snapshot__box h-[386px] w-[262px] bg-[url('/src/assets/images/snapshot_box_frame.png')]">
          <h2 className="snapshot__heading font-serif text-[28px] mt-[28px] mx-[28px]">
            Empathetic
          </h2>
          <p className="snapshot__text font-sans text-xs mx-[28px]">
            This is where the answer will go for approximately 200 characters
            long. I will answer this question in about 40 words as that is the
            conversion. I need about 20 more words to go until I hit the
            capacity.{' '}
          </p>
          <div className="snapshot__media my-[30px] ml-[30px] flex flex-row gap-[9px]">
            <img
              src="/src/assets/images/placeholder_image.png"
              className="snapshot__img h-[80px] w-[80px] rounded-[10px]"
            />
            <img
              src="/src/assets/images/placeholder_image.png"
              className="snapshot__img h-[80px] w-[80px] rounded-[10px]"
            />
          </div>
          <div className="snapshot__skills ml-[30px] flex flex-row gap-[9px]">
            <Badge className="snapshot__badge text-xs h-[20px] bg-slate-200 text-black">
              Figma
            </Badge>
            <Badge className="snapshot__badge text-xs h-[20px] bg-slate-200 text-black">
              Collaboration
            </Badge>
          </div>
        </div>
        <div className="snapshot__box h-[386px] w-[262px] bg-[url('/src/assets/images/snapshot_box_frame.png')]">
          <h2 className="snapshot__heading font-serif text-[28px] mt-[28px] mx-[28px]">
            Animator
          </h2>
          <p className="snapshot__text font-sans text-xs mx-[28px]">
            This is where the answer will go for approximately 200 characters
            long. I will answer this question in about 40 words as that is the
            conversion. I need about 20 more words to go until I hit the
            capacity.{' '}
          </p>
          <div className="snapshot__media my-[30px] ml-[30px] flex flex-row gap-[9px]">
            <img
              src="/src/assets/images/placeholder_image.png"
              className="snapshot__img h-[80px] w-[80px] rounded-[10px]"
            />
            <img
              src="/src/assets/images/placeholder_image.png"
              className="snapshot__img h-[80px] w-[80px] rounded-[10px]"
            />
          </div>
          <div className="snapshot__skills ml-[30px] flex flex-row gap-[9px]">
            <Badge className="snapshot__badge text-xs h-[20px] bg-slate-200 text-black">
              Figma
            </Badge>
            <Badge className="snapshot__badge text-xs h-[20px] bg-slate-200 text-black">
              Collaboration
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Snapshot;
