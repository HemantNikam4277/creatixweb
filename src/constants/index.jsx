import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

import graphic1 from "../assets/graphics/graphic1.png";
import graphic2 from "../assets/graphics/graphic2.png";
import graphic3 from "../assets/graphics/graphic3.png";
import graphic4 from "../assets/graphics/graphic4.png";
import graphic5 from "../assets/graphics/graphic5.png";
import graphic6 from "../assets/graphics/graphic6.png";
import graphic7 from "../assets/graphics/graphic7.png";
import graphic8 from "../assets/graphics/graphic8.png";
import graphic9 from "../assets/graphics/graphic9.png";
import graphic10 from "../assets/graphics/graphic10.png";

export const navItems = [
  { label: "Services", href: "features" },
  { label: "Projects", href: "workflow" },
  { label: "Designs", href: "pricing" },
  { label: "Contact Us", href: "testimonials" },
];

export const pricingImages = [
  [graphic1, graphic2, graphic3],
  [graphic4, graphic5, graphic6],
  [graphic7, graphic8, graphic9],
  [graphic10],
];


export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Creative Landing Page Designs",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "UX Research",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Wireframing and Prototyping",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { text: "Combining design expertise with development skills to deliver exceptional results."},
];

export const platformLinks = [
  { text: "Services", href: "features" },
  { text: "Projects", href: "workflow" },
  { text: "Designs", href: "pricing" },
  { text: "Testimonials", href: "testimonials" },
];

export const communityLinks = [
  { text: "creativxw@gmail.com" },
  { href: "#", text: "WhatsApp : 9226624662" },
  { href: "#", text: "Instagram : creatixweb_" },
  // { href: "#", text: "Hackathons" },
  // { href: "#", text: "Jobs" },
];
