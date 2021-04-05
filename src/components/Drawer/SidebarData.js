import React from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/gi";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: "Engineering",
    path: "/eng",
    icon: <FaIcons.FaGraduationCap />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    /* subNav: [
      {
        title: 'Computer Science',
        path: '/engineering/cse',
        icon: <RiIcons.RiComputerLine />
      },
      {
        title: 'Electronics and Communication',
        path: '/engineering/ece',
        icon: <FcIcons.FcElectronics />
      }, 
      
    ] */
  },
  {
    title: "Exams",
    path: "/exam",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    /* subNav: [
      {
        title: 'JEE',
        path: '/exams/jee',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'UPSC',
        path: '/exams/upsc',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'NEET',
        path: '/exams/neet',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'SSC',
        path: '/exams/SSC',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'CAT',
        path: '/exams/CAT',
        icon: <IoIcons.IoIosPaper />
      }
    ]  */
  },
  {
    title: "Medicine",
    path: "/med",
    icon: <FaIcons.FaBriefcaseMedical />,
  },
  {
    title: "Government",
    path: "/gov",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Management",

    path: "/dummy",
    icon: <FaIcons.FaEnvelopeOpenText />,
  },
  {
    title: "Research",
    path: "/dummy",
    icon: <GiIcons.GiArchiveResearch />,
  },
  {
    title: "Accountant",
    path: "/dummy",
    icon: <MdIcons.MdAccountBalance />,
  },
  {
    title: "Music",
    path: "/dummy",
    icon: <RiIcons.RiMusicFill />,
  },
  {
    title: "Fitness",
    path: "/dummy",
    icon: <IoIcons.IoIosFitness />,
  },
  {
    title: "Influencer",
    path: "/dummy",
    icon: <FaIcons.FaPhotoVideo />,
  },
  {
    title: "Author",
    path: "/dummy",
    icon: <BsIcons.BsBookHalf />,
  },
  {
    title: "Business",
    path: "/dummy",
    icon: <IoIcons.IoIosBusiness />,
  },
];
