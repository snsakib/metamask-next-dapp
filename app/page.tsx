"use client";
import { Web3Button } from "@web3modal/react";
import { Web3NetworkSwitch } from "@web3modal/react";
import WalletInfo from "@/components/WalletInfo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 border">
      <Web3Button />
      <Web3NetworkSwitch />
      <WalletInfo/>
    </main>
  );
}
