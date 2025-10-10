import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiLinux,
  SiDocker,
  SiJavascript,
  SiNextdotjs,
  SiLaravel,
  SiCodeigniter,
  SiPhp,
  SiCss3,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaX,
  FaXTwitter,
  FaFacebook,
  FaWhatsapp,
  FaTelegram,
  FaInstagram,
  FaTiktok
} from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  x: FaX,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  linux: SiLinux,
  docker: SiDocker,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  laravel: SiLaravel,
  codeigniter: SiCodeigniter,
  php: SiPhp,
  css3: SiCss3,
  html5: SiHtml5,
  tailwindcss: SiTailwindcss,
  bootstrap: SiBootstrap,
  github: FaGithub,
  linkedin: FaLinkedin,
  email: HiEnvelope,
  whatsapp: FaWhatsapp,
  telegram: FaTelegram,
  facebook: FaFacebook,
  instagram: FaInstagram,
  twitter: FaXTwitter,
  tiktok: FaTiktok,
  discord: FaDiscord,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
