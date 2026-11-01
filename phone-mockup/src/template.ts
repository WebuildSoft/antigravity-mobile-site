import { SimulationScenario } from './types';

export function renderMockupHTML(scenarios: SimulationScenario[]): string {
  const chipsHtml = scenarios
    .map(
      (s, idx) =>
        `<button class="sim-chip" data-scenario-index="${idx}">${s.chipLabel}</button>`
    )
    .join('');

  return `
    <div class="mockup-wrapper">
      <div class="mockup-glow"></div>
      <div class="phone-frame">
        <div class="phone-screen">
          <!-- Notch / Status Bar -->
          <div class="phone-top-bar">
            <span class="phone-time" id="simPhoneTime">09:41</span>
            <div class="phone-island">
              <div class="phone-camera-dot"></div>
            </div>
            <div class="phone-status-icons">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
              <span>5G</span>
              <svg width="15" height="11" viewBox="0 0 24 14" fill="currentColor"><rect x="1" y="1" width="19" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2"></rect><rect x="3" y="3" width="13" height="8" rx="1"></rect><path d="M22 5v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>
            </div>
          </div>

          <!-- Flutter Mobile AppBar Replica -->
          <div class="flutter-appbar">
            <div class="flutter-appbar-left">
              <button class="appbar-icon-btn" title="Histórico de Conversas" aria-label="Menu">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              </button>
              <div class="flutter-title-group">
                <span class="flutter-app-name">Antigravity</span>
                <div class="flutter-status-badge">
                  <span class="dot-pulse"></span>
                  <span>Online</span>
                </div>
              </div>
            </div>
            <div class="flutter-appbar-actions">
              <button class="appbar-icon-btn" title="Arquivos do Projeto" aria-label="Arquivos">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </button>
              <button class="appbar-icon-btn" id="simNewChatBtn" title="Nova Conversa" aria-label="Nova Conversa">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </button>
              <button class="appbar-icon-btn" title="Escanear QR Code" aria-label="QR Code">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><rect x="7" y="7" width="3" height="3"></rect><rect x="14" y="7" width="3" height="3"></rect><rect x="7" y="14" width="3" height="3"></rect></svg>
              </button>
              <button class="appbar-icon-btn" title="Configurações" aria-label="Configurações">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              </button>
            </div>
          </div>

          <!-- Chat Content Simulation Area -->
          <div class="phone-chat-body" id="simChatBody">
            <!-- Dynamically populated -->
          </div>

          <!-- Quick Action Chips -->
          <div class="sim-quick-chips">
            ${chipsHtml}
          </div>

          <!-- Flutter Mobile Bottom Bar Replica -->
          <div class="phone-input-bar">
            <button class="phone-camera-btn" title="Enviar Foto ou Imagem" aria-label="Câmera">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            </button>
            <div class="phone-fake-input-wrapper" id="simInputWrapper">
              <span id="simInputText" class="phone-fake-input-text">Digite uma instrução ou comando...</span>
              <span class="sim-cursor" id="simCursor"></span>
            </div>
            <button class="phone-send-btn" id="simSendBtn" title="Enviar" aria-label="Enviar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
