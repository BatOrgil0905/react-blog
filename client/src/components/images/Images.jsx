import React from "react";
import bgHome from "../images/bgHome.jpg";
import proPic from "../images/propic.jpg";

// --PostPics--
import postPicOne from "../images/postPicOne.jpg";
import postPicTwo from "../images/postPicTwo.jpg";
import postPicThree from "../images/postPicThree.jpg";
import postPicFour from "../images/postPicFour.jpg";
import postPicFive from "../images/postPicFive.jpg";

export const HomeImage = () => {
  return <img className="w-full h-screen object-cover" src={bgHome} alt="" />;
};

export const ProfilePic = () => {
  return (
    <div className="w-[45px] h-[45px] rounded-full overflow-hidden">
      <img
        className="w-full h-full bg-cover object-cover rounded-full"
        src={proPic}
        alt="profile pic"
      />
    </div>
  );
};

export const SettingsProfilePic = () => {
  return (
    <div className="w-[200px] h-[200px] rounded-md overflow-hidden">
      <img
        className="w-full h-full bg-cover object-cover"
        src={proPic}
        alt="profile pic"
      />
    </div>
  );
};

export const AboutMePic = () => {
  return (
    <img
      className="w-full h-[350px] object-cover bg-cover"
      src={proPic}
      alt="about me"
    />
  );
};

export const PostImageOne = () => {
  return (
    <img
      className="w-full h-auto object-cover bg-cover rounded-md"
      src={postPicOne}
      alt="pp1"
    />
  );
};

export const PostImageTwo = () => {
  return (
    <img
      className="w-full h-auto object-cover bg-cover rounded-md"
      src={postPicTwo}
      alt="pp2"
    />
  );
};

export const PostImageThree = () => {
  return (
    <img
      className="w-full h-[415px] object-cover bg-cover rounded-md"
      src={postPicThree}
      alt="pp3"
    />
  );
};

export const PostImageFour = () => {
  return (
    <img
      className="w-[75%] h-[415px] object-cover bg-cover rounded-md"
      src={postPicFour}
      alt="pp4"
    />
  );
};

export const PostImageFive = () => {
  return (
    <img
      className="w-full h-auto object-cover bg-cover rounded-md"
      src={postPicFive}
      alt="pp5"
    />
  );
};
