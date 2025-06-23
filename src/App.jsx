
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Inicializa o OneSignal
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "63fb68b2-623d-4a03-83ce-17816e77254e",
        notifyButton: {
          enable: true,
        },
        allowLocalhostAsSecureOrigin: true,
      });
    });
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Kasopi Lembretes</h1>
        <p className="text-lg">
          Você está prestes a receber lembretes para se manter presente. Ative as notificações para receber lembretes entre 9h e 23h.
        </p>
      </div>
    </main>
  );
}
