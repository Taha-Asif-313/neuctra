import NeuctraSpaceProviders from "./NeuctraSpaceProviders";


export const metadata = {
  title: "Neuctra Space",
  description: "Developer space powered by Neuctra",
  openGraph: {
    title: "Neuctra Space",
    description: "Developer space powered by Neuctra",
    type: "website",
  },
};

const NeuctraSpaceLayout = ({ children }) => {
  return <NeuctraSpaceProviders>{children}</NeuctraSpaceProviders>;
};

export default NeuctraSpaceLayout;