import Image from "next/image";

const RandomImage = ({ src, img_style, color }) => {
  return (
    <div className={`absolute max-w-[200px] min-w-[100px]`} style={img_style}>
      <Image src={src} alt="img" className={`border-4 rounded-2xl ${color}`} />
    </div>
  );
};

export default RandomImage;
