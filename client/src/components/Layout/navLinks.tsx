import { Icon } from "components/Icon"

type NavLinksArgs = { iconSize: number; active: string }

export const navLinks = ({ iconSize, active }: NavLinksArgs) => [
  {
    icon: <Icon size={iconSize} type="home" fill={active === "/home"} />,
    label: "Home",
    link: "/home",
  },
  {
    icon: <Icon size={iconSize} type="search" fill={active === "/homes"} />,
    label: "Explore",
    link: "/homes",
  },
  {
    icon: <Icon size={iconSize} type="bell" fill={active === "/homes"} />,
    label: "Notifications",
    link: "/notifications",
  },
  {
    icon: <Icon size={iconSize} type="mail" fill={active === "/homes"} />,
    label: "Messages",
    link: "/homes",
  },
  {
    icon: <Icon size={iconSize} type="file-list" fill={active === "/homes"} />,
    label: "Lists",
    link: "/homes",
  },
  {
    icon: <Icon size={iconSize} type="bookmark" fill={active === "/homes"} />,
    label: "Bookmarks",
    link: "/homes",
  },
  {
    icon: <Icon size={iconSize} type="home" fill={active === "/homes"} />,
    label: "Premium+",
    link: "/homes",
  },
  {
    icon: <Icon size={iconSize} type="home" fill={active === "/homes"} />,
    label: "Communities",
    link: "/homes",
  },
  {
    icon: <Icon size={iconSize} type="home" fill={active === "/homes"} />,
    label: "Verified Orgs",
    link: "/homes",
  },
  {
    icon: <Icon size={iconSize} type="home" fill={active === "/homes"} />,
    label: "Profile",
    link: "/homes",
  },
  {
    icon: <Icon size={iconSize} type="home" fill={active === "/homes"} />,
    label: "More",
    link: "/homes",
  },
]
