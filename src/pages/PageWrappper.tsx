import React, { useEffect, useState } from 'react';
import { NavBar } from "../components/molecules/NavBar";
import { SocketProvider } from "../context/socket";
import { BrowserDimensionsProvider } from "../context/browserDimensions";
import { AuthProvider } from '../context/auth';
import { RecordingPage } from "./RecordingPage";
import { MainPage } from "./MainPage";
import { useGlobalInfoStore } from "../context/globalInfo";
import { getActiveBrowserId } from "../api/recording";
import { AlertSnackbar } from "../components/atoms/AlertSnackbar";
import Login from './Login';
import Register from './Register';
import UserRoute from '../routes/userRoute';
import { Routes, Route, useNavigate } from 'react-router-dom';

export const PageWrapper = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const { browserId, setBrowserId, notification, recordingName, setRecordingName, recordingId, setRecordingId } = useGlobalInfoStore();

  const handleEditRecording = (recordingId: string, fileName: string) => {
    setRecordingName(fileName);
    setRecordingId(recordingId);
    setBrowserId('new-recording');
    navigate('/recording');
  }

  const isNotification = (): boolean => {
    if (notification.isOpen && !open) {
      setOpen(true);
    }
    return notification.isOpen;
  }

  useEffect(() => {
    const isRecordingInProgress = async () => {
      const id = await getActiveBrowserId();
      if (id) {
        setBrowserId(id);
        navigate('/recording');
      }
    }
    isRecordingInProgress();
  }, []);

  return (
    <div>
      <AuthProvider>
        <SocketProvider>
          <React.Fragment>
            {!browserId && <NavBar recordingName={recordingName} isRecording={!!browserId} />}
            <Routes>
              <Route element={<UserRoute />}>
                <Route path="/" element={<MainPage handleEditRecording={handleEditRecording} />} />
              </Route>
              <Route element={<UserRoute />}>
                <Route path="/recording" element={
                  <BrowserDimensionsProvider>
                    <RecordingPage recordingName={recordingName} />
                  </BrowserDimensionsProvider>
                } />
              </Route>
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/register"
                element={<Register />}
              />
            </Routes>
          </React.Fragment>
        </SocketProvider>
      </AuthProvider>
      {isNotification() ?
        <AlertSnackbar severity={notification.severity}
          message={notification.message}
          isOpen={notification.isOpen} />
        : null
      }
    </div>
  );
}
