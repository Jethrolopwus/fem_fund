/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppKitProvider } from "@reown/appkit/react";
import { BrowserProvider } from "ethers";
import { useEffect, useMemo, useState } from "react";
import { jsonRpcProvider } from "../constants/providers";
import { Eip1193Provider } from "ethers";

const useRunners = () => {
    const [signer, setSigner] = useState<any | null>(null);
    const { walletProvider }  = useAppKitProvider<Eip1193Provider>("eip155");

    const provider = useMemo(
        () => (walletProvider ? new BrowserProvider(walletProvider) : null),
        [walletProvider]
    );

    useEffect(() => {
        if (!provider) return setSigner(null);
        provider.getSigner().then((newSigner: { address: any; }) => {
            if (!signer) return setSigner(newSigner);
            if (newSigner.address === signer.address) return;
            setSigner(newSigner);
        });
    }, [provider, signer]);
    return { provider, signer, readOnlyProvider: jsonRpcProvider };
};

export default useRunners;
