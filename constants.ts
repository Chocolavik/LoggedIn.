import { NavLink } from './types';

export const APP_CONTENT = {
  header: {
    logoText: "LoggedIn.",
    links: [
      { label: "Mission", href: "#" },
      { label: "Capabilities", href: "#features" },
      { label: "Comms", href: "#support" },
    ] as NavLink[]
  },
  hero: {
    title: "An extension that logs you in to BITS WIFI automatically.",
    description: "Tired of signing in to your BITS WIFI all the time?",
    buttonText: "Not anymore!",
    subLinkText: "How to Set Up?",
    fileName: "extension.zip"
  },
  qrCard: {
    title: "Sync with Station",
    description: "Scan to establish uplink"
  }
};
