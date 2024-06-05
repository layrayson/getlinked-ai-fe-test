import NetworkSpeed from "network-speed";
import { useEffect, useState } from "react";
const testNetworkSpeed = new NetworkSpeed();

export const useGetNetworkSpeed = () => {
  const [speed, setSpeed] = useState<number | null>(null);

  async function getNetworkDownloadSpeed() {
    try {
      const baseUrl = "https://eu.httpbin.org/stream-bytes/500000";
      const fileSizeInBytes = 500000;
      const speed = await testNetworkSpeed.checkDownloadSpeed(
        baseUrl,
        fileSizeInBytes
      );
      return parseInt(speed.mbps);
    } catch (error) {
      return 0;
    }
  }

  useEffect(() => {
    getNetworkDownloadSpeed().then((speed) => {
      setSpeed(speed > 5 ? 10 : (speed / 5) * 10);
    });
  }, []);

  return { speed };
};
