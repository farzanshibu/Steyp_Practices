import { useBooleanState, usePrevious } from "webrix/hooks";
import { useEffect } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export default function OffLine({ children }) {
  const {
    value: online,
    setFalse: setOffline,
    setTrue: setOnline,
  } = useBooleanState(navigator.onLine);
  const previousOnline = usePrevious(online);

  useEffect(() => {
    if (!online) {
      return void disableBodyScroll(document.body);
    }

    enableBodyScroll(document.body);
  }, [online]);

  useEffect(() => {
    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);

    return () => {
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
  }, [setOnline, setOffline]);

  return (
    <>
      <div
        style={
          previousOnline === online && online
            ? {
                display: "none",
              }
            : {
                position: "absolute",
                textAlign: "center",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                margin: "20px auto",
                height: "100px",
                borderRadius: "80px",
                width: "500px",
                padding: "20px",
                zIndex: 12,
              }
        }
      >
        <div>
          <div>
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: "red",
                borderRadius: "50%",
                position: "absolute",
                top: "25px",
                right: "60px",
                transform: "translate(50%, -50%)",
                zIndex: 10,
              }}
            ></div>
            <h1>You're not online</h1>
            <h2>Check your internet connection.</h2>
          </div>
        </div>
      </div>

      <div style={{ pointerEvents: online ? "auto" : "none" }}>{children}</div>
    </>
  );
}
