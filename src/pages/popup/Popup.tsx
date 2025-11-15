import logo from "@assets/img/logo.svg";
import { motion } from "framer-motion";

export default function Onboarding() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-6 font-sans text-center">
      <motion.img
        src={logo}
        alt="NotWallet Logo"
        className="h-32 mb-6 opacity-90"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      <motion.h1
        className="text-3xl font-semibold tracking-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Welcome to NotWallet Crypto
      </motion.h1>

      <p className="text-gray-400 text-sm mt-2 max-w-xs">
        A minimal, secure and privacy‑first crypto wallet built for the modern
        web.
      </p>

      <div className="w-full max-w-sm mt-10 space-y-3">
        <button className="w-full py-3 rounded-xl bg-white text-gray-900 font-medium shadow-md hover:bg-gray-200 transition-all">
          Get Started
        </button>

        <button className="w-full py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-200 font-medium hover:bg-gray-700 transition-all">
          I already have a wallet
        </button>

        <a
          href="https://notwallet.eu"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-gray-400 text-sm hover:text-gray-200"
        >
          Visit notwallet.eu
        </a>
      </div>
    </div>
  );
}
