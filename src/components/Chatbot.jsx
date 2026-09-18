import React, { useEffect } from "react";

const BOTPRESS_INJECT =
  "https://cdn.botpress.cloud/webchat/v5.0/inject.js";

const BOTPRESS_CONFIG =
  "https://files.bpcontent.cloud/2026/09/15/07/20260915075858-T2GFDWBI.js";

export default function Chatbot({ open, setOpen }) {

  useEffect(() => {
    // Already loaded
    if (window.botpress) {
      setupBotpress();
      return;
    }

    // Load Botpress inject script
    const script1 = document.createElement("script");

    script1.src = BOTPRESS_INJECT;
    script1.id = "botpress-inject";
    script1.async = true;

    document.body.appendChild(script1);

    script1.onload = () => {
      // Load your Botpress configuration script
      if (document.getElementById("botpress-config")) return;

      const script2 = document.createElement("script");

      script2.src = BOTPRESS_CONFIG;
      script2.id = "botpress-config";
      script2.async = true;

      document.body.appendChild(script2);

      setupBotpress();
    };

    return () => {
      // Don't remove Botpress scripts on component unmount
    };
  }, []);

  const setupBotpress = () => {
    if (!window.botpress) return;

    // Wait until Botpress Webchat is initialized
    window.botpress.on("webchat:initialized", () => {
      console.log("✅ Botpress Webchat Initialized");

      // If React state says chat should be open
      if (open) {
        setTimeout(() => {
          window.botpress.open();
        }, 300);
      }
    });

    // When Botpress opens
    window.botpress.on("webchat:opened", () => {
      console.log("🤖 Campus Companion Opened");
      setOpen(true);
    });

    // When Botpress closes
    window.botpress.on("webchat:closed", () => {
      console.log("❌ Campus Companion Closed");
      setOpen(false);
    });
  };

  // React state -> Botpress
  useEffect(() => {
    if (!window.botpress) return;

    if (open) {
      if (typeof window.botpress.open === "function") {
        window.botpress.open();
      }
    } else {
      if (typeof window.botpress.close === "function") {
        window.botpress.close();
      }
    }
  }, [open]);

  return null;
}