'use client'
import { useAccount } from "wagmi";
import { useBalance } from "wagmi";

export default function WalletInfo() {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { data, isError, isLoading } = useBalance({
    address: address,
  });

  return (
    <>
      {isConnecting && <div>Connecting…</div>}
      {isDisconnected && <div>Disconnected</div>}
      {isLoading && <div>Fetching balance…</div>}
      {isError && <div>Error fetching balance</div>}
      <div>Address: {address}</div>
      <div>
        Balance: {data?.formatted} {data?.symbol}
      </div>
    </>
  )
}