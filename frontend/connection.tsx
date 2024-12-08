import { createAppKit } from "@reown/appkit/react";
import { Ethers5Adapter } from "@reown/appkit-adapter-ethers5";
import { sepolia, liskSepolia } from "@reown/appkit/networks";


// 1. Get projectId
const projectId = import.meta.env.VITE_APPKIT_PROJECT_ID;

// 2. Set the networks
export const networks = [liskSepolia, sepolia];


// 3. Create a metadata object - optional
const metadata = {
    name: "My Website",
    description: "My Website description",
    url: "https://mywebsite.com", // origin must match your domain & subdomain
    icons: ["https://avatars.mywebsite.com/"],
};

// 4. Create a AppKit instance
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
