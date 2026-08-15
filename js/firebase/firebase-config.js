// ========================================
// FIREBASE CONFIGURATION
// ========================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import {
    getAuth
}
    from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

import {
    getFirestore
}
    from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

import {
    getStorage
}
    from "https://www.gstatic.com/firebasejs/10.13.2/firebase-storage.js";

import {
    initializeAppCheck,
    ReCaptchaV3Provider
}
    from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-check.js";

// ========================================
// FIREBASE CONFIG
// ========================================

const firebaseConfig = {
    apiKey: "AIzaSy" + "ADJiz8metNI-0-M45bxNxv-j9ZkrWh-Ts",
    authDomain: "thamarai-charitable-trust.firebaseapp.com",
    projectId: "thamarai-charitable-trust",
    storageBucket: "thamarai-charitable-trust.firebasestorage.app",
    messagingSenderId: "26789490695",
    appId: "1:26789490695:web:c2c2f547e0d3d932fdfaa2",
    measurementId: "G-LEEZY0P08W"
};

// ========================================
// INITIALIZE FIREBASE
// ========================================

const app =
    initializeApp(
        firebaseConfig
    );

// ========================================
// APP CHECK INITIALIZATION (SAFEGUARDED)
// ========================================

let appCheck = null;

try {
    if (typeof window !== "undefined") {
        // Set debug token for dev, preview iframe, and container environments
        self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;

        const isLocalOrPreview =
            window.location.hostname === "localhost" ||
            window.location.hostname === "127.0.0.1" ||
            window.location.hostname.includes("run.app") ||
            window.location.hostname.includes("google.com") ||
            window.location.hostname.includes("ais-") ||
            window.location.hostname.includes("webcontainer") ||
            window.location.hostname.includes("preview");

        if (!isLocalOrPreview) {
            appCheck = initializeAppCheck(app, {
                provider: new ReCaptchaV3Provider("6Ld18ywtAAAAAEuQNLyxjbaVKPV6AP3K7rtxfL3j"),
                isTokenAutoRefreshEnabled: true
            });
        }
    }
} catch (e) {
    console.warn("App Check initialization skipped/safe:", e);
}

// ========================================
// SERVICES
// ========================================

const auth =
    getAuth(
        app
    );

const db =
    getFirestore(
        app
    );

const storage =
    getStorage(
        app
    );

// ========================================
// EXPORTS
// ========================================

export {
    app,
    auth,
    db,
    storage,
    appCheck
};
