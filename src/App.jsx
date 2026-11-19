
import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";

import { Homepage } from "./pages/Homepage/Homepage";
import { MapPage } from "./pages/MapPage/MapPage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";

import "./App.css";

function App() {
  const [imageInfo, setImageInfo] = useState([]);
  const [qImages, setqImages] = useState(0);
  const [processedImages, setProcessedImages] = useState(0);
  const [noGPSImages, setNoGPSImages] = useState(0);
  const [trashFound, setTrashFound] = useState(0);

  const [emailLoggedIn, setEmailLoggedIn] = useState(() => {
    return localStorage.getItem("emailLoggedIn") || "";
  });

  useEffect(() => {
    if (emailLoggedIn) {
      localStorage.setItem("emailLoggedIn", emailLoggedIn);
    } else {
      localStorage.removeItem("emailLoggedIn");
    }
  }, [emailLoggedIn]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Homepage
            imageInfo={imageInfo}
            setImageInfo={setImageInfo}
            qImages={qImages}
            processedImages={processedImages}
            noGPSImages={noGPSImages}
            trashFound={trashFound}
            setqImages={setqImages}
            setProcessedImages={setProcessedImages}
            setNoGPSImages={setNoGPSImages}
            setTrashFound={setTrashFound}
          />
        }
      />

      <Route
        path="/sirensky"
        element={
          <Homepage
            imageInfo={imageInfo}
            setImageInfo={setImageInfo}
            qImages={qImages}
            processedImages={processedImages}
            noGPSImages={noGPSImages}
            trashFound={trashFound}
            setqImages={setqImages}
            setProcessedImages={setProcessedImages}
            setNoGPSImages={setNoGPSImages}
            setTrashFound={setTrashFound}
          />
        }
      />

      <Route path="/alert" element={<MapPage imageInfo={imageInfo} />} />
      <Route path="/about" element={<AboutPage />} />

      <Route
        path="/login"
        element={
          <LoginPage
            emailLoggedIn={emailLoggedIn}
            setEmailLoggedIn={setEmailLoggedIn}
          />
        }
      />

      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
