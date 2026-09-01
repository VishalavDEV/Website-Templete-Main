const API_BASE = 'http://localhost:8080/api';
const WS_BASE = 'ws://localhost:8080/ws-busy';

export async function fetchStatus() {
  try {
    const res = await fetch(`${API_BASE}/status`);
    if (!res.ok) throw new Error('Status fetch failed');
    return await res.json();
  } catch (err) {
    console.warn('Backend offline, using fallback state:', err);
    return {
      status: 'BUSY',
      message: 'Do Not Disturb - Deep Work in Progress',
      color: '#FF5A1F',
      brightness: 90,
      active: true,
      expiryMinutes: 25,
      lastUpdated: new Date().toISOString()
    };
  }
}

export async function updateStatus(statusData) {
  try {
    const res = await fetch(`${API_BASE}/status`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(statusData)
    });
    if (!res.ok) throw new Error('Status update failed');
    return await res.json();
  } catch (err) {
    console.warn('Backend update failed:', err);
    return statusData;
  }
}

export async function toggleStatusActive() {
  try {
    const res = await fetch(`${API_BASE}/status/toggle`, {
      method: 'POST',
    });
    if (!res.ok) throw new Error('Status toggle failed');
    return await res.json();
  } catch (err) {
    console.warn('Backend toggle failed:', err);
    return null;
  }
}

export async function fetchPomodoro() {
  try {
    const res = await fetch(`${API_BASE}/pomodoro`);
    if (!res.ok) throw new Error('Pomodoro fetch failed');
    return await res.json();
  } catch (err) {
    console.warn('Backend pomodoro offline, fallback:', err);
    return {
      running: false,
      remainingSeconds: 1500,
      totalSeconds: 1500,
      mode: 'FOCUS',
      cyclesCompleted: 3,
      statusText: 'READY'
    };
  }
}

export async function sendPomodoroAction(action, seconds = null, mode = null) {
  try {
    const res = await fetch(`${API_BASE}/pomodoro/action`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, seconds, mode })
    });
    if (!res.ok) throw new Error('Pomodoro action failed');
    return await res.json();
  } catch (err) {
    console.warn('Pomodoro action failed:', err);
    return null;
  }
}

export async function fetchTelemetry() {
  try {
    const res = await fetch(`${API_BASE}/telemetry`);
    if (!res.ok) throw new Error('Telemetry fetch failed');
    return await res.json();
  } catch (err) {
    return {
      deviceId: 'BSB-MATRIX-9920',
      firmwareVersion: 'v2.4.1-rc3',
      batteryPercentage: 88,
      isCharging: true,
      wifiSsid: 'BusyMesh_5G',
      wifiRssi: -42,
      temperatureCelsius: 31.4,
      bleConnected: true
    };
  }
}

export function subscribeToWebSocket(onMessage) {
  let ws = null;
  let reconnectTimeout = null;

  function connect() {
    try {
      ws = new WebSocket(WS_BASE);

      ws.onopen = () => {
        console.log('[WS] Connected to Busy Status WebSocket stream');
      };

      ws.onmessage = (event) => {
        try {
          const payload = JSON.parse(event.data);
          onMessage(payload);
        } catch (e) {
          console.error('[WS] Parse error', e);
        }
      };

      ws.onclose = () => {
        console.log('[WS] Disconnected. Reconnecting in 3s...');
        reconnectTimeout = setTimeout(connect, 3000);
      };

      ws.onerror = (err) => {
        console.warn('[WS] Socket error', err);
        ws.close();
      };
    } catch (e) {
      console.warn('[WS] Connection failed:', e);
      reconnectTimeout = setTimeout(connect, 4000);
    }
  }

  connect();

  return () => {
    if (reconnectTimeout) clearTimeout(reconnectTimeout);
    if (ws) ws.close();
  };
}
