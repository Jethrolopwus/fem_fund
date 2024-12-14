import { createAppKit } from "@reown/appkit/react";
import { Ethers5Adapter } from "@reown/appkit-adapter-ethers5";
import { sepolia, liskSepolia } from "@reown/appkit/networks";


const projectId = import.meta.env.VITE_APPKIT_PROJECT_ID;


export const networks = [liskSepolia, sepolia];



const metadata = {
    name: "My Website",
    description: "My Website description",
    url: "https://mywebsite.com", 
    icons: ["https://avatars.mywebsite.com/"],
};

export const appkit = createAppKit({
    adapters: [new Ethers5Adapter()],
    networks,
    metadata,
    projectId,
    allowUnsupportedChain: false,
    allWallets: "SHOW",
    defaultNetwork: liskSepolia,
    enableEIP6963: true,

    features: {
        analytics: true,
        allWallets: true,
        email: false,
        socials: [],
    },
});
