import { SimulationScenario, SimulatorOptions } from './types';
import { renderMockupHTML } from './template';

export class PhoneSimulator {
  private scenarios: SimulationScenario[];
  private currentIndex: number = 0;
  private container: HTMLElement;
  private typingTimer: number | null = null;
  private stepTimer: number | null = null;
  private clockTimer: number | null = null;
  private isMounted: boolean = false;

  private domChatBody: HTMLElement | null = null;
  private domInputText: HTMLElement | null = null;
  private domInputWrapper: HTMLElement | null = null;
  private domCursor: HTMLElement | null = null;
  private domSendBtn: HTMLElement | null = null;
  private domPhoneTime: HTMLElement | null = null;

  constructor(options: SimulatorOptions, scenarios: SimulationScenario[]) {
    const el = document.getElementById(options.containerId);
    if (!el) {
      throw new Error(`[PhoneSimulator] Element with id '${options.containerId}' not found.`);
    }
    this.container = el;
    this.scenarios = scenarios;
  }

  public mount(): void {
    if (this.isMounted) return;

    // If container doesn't have the phone screen yet, inject template
    if (!this.container.querySelector('.phone-screen')) {
      this.container.innerHTML = renderMockupHTML(this.scenarios);
    }

    this.bindDOM();
    this.bindEvents();
    this.startClock();
    this.isMounted = true;

    // Start initial scenario after small delay
    setTimeout(() => {
      this.playScenario(0);
    }, 600);
  }

  private bindDOM(): void {
    this.domChatBody = this.container.querySelector('#simChatBody');
    this.domInputText = this.container.querySelector('#simInputText');
    this.domInputWrapper = this.container.querySelector('#simInputWrapper');
    this.domCursor = this.container.querySelector('#simCursor');
    this.domSendBtn = this.container.querySelector('#simSendBtn');
    this.domPhoneTime = this.container.querySelector('#simPhoneTime');
  }

  private bindEvents(): void {
    // Chips clicks
    const chips = this.container.querySelectorAll<HTMLButtonElement>('.sim-chip');
    chips.forEach((chip) => {
      chip.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLButtonElement;
        const idx = target.getAttribute('data-scenario-index');
        if (idx !== null) {
          this.triggerPrompt(parseInt(idx, 10));
        }
      });
    });

    // Send button click
    if (this.domSendBtn) {
      this.domSendBtn.addEventListener('click', () => {
        this.triggerPrompt(this.currentIndex);
      });
    }

    // New Chat button
    const newChatBtn = this.container.querySelector('#simNewChatBtn');
    if (newChatBtn) {
      newChatBtn.addEventListener('click', () => {
        this.replay();
      });
    }
  }

  private startClock(): void {
    this.updateClock();
    this.clockTimer = window.setInterval(() => this.updateClock(), 30000);
  }

  private updateClock(): void {
    if (!this.domPhoneTime) return;
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    this.domPhoneTime.textContent = `${h}:${m}`;
  }

  public triggerPrompt(index: number): void {
    this.stopAllTimers();
    this.resetUI();
    this.playScenario(index);
  }

  public replay(): void {
    this.stopAllTimers();
    this.resetUI();
    this.playScenario(this.currentIndex);
  }

  public stopAllTimers(): void {
    if (this.typingTimer !== null) {
      clearInterval(this.typingTimer);
      this.typingTimer = null;
    }
    if (this.stepTimer !== null) {
      clearTimeout(this.stepTimer);
      this.stepTimer = null;
    }
  }

  private resetUI(): void {
    if (this.domChatBody) this.domChatBody.innerHTML = '';
    if (this.domInputText) {
      this.domInputText.textContent = 'Digite uma instrução ou comando...';
      this.domInputText.classList.remove('has-value');
    }
    if (this.domInputWrapper) this.domInputWrapper.classList.remove('active-typing');
    if (this.domCursor) this.domCursor.classList.remove('blink');
  }

  private scrollToBottom(): void {
    if (this.domChatBody) {
      this.domChatBody.scrollTo({ top: this.domChatBody.scrollHeight, behavior: 'smooth' });
    }
  }

  public playScenario(scenarioIndex: number): void {
    this.stopAllTimers();
    this.currentIndex = scenarioIndex % this.scenarios.length;
    const scenario = this.scenarios[this.currentIndex];

    if (!this.domChatBody || !this.domInputText) return;

    this.updateClock();

    // Step 1: Typewriter effect in input
    let charIdx = 0;
    this.domInputText.textContent = '';
    this.domInputText.classList.add('has-value');
    if (this.domInputWrapper) this.domInputWrapper.classList.add('active-typing');
    if (this.domCursor) this.domCursor.classList.add('blink');

    this.typingTimer = window.setInterval(() => {
      if (!this.domInputText) return;
      if (charIdx < scenario.prompt.length) {
        this.domInputText.textContent += scenario.prompt.charAt(charIdx);
        charIdx++;
      } else {
        if (this.typingTimer !== null) {
          clearInterval(this.typingTimer);
          this.typingTimer = null;
        }

        // Step 2: Haptic Send click
        this.stepTimer = window.setTimeout(() => {
          if (this.domSendBtn) {
            this.domSendBtn.classList.add('clicked');
            setTimeout(() => this.domSendBtn?.classList.remove('clicked'), 180);
          }

          if (this.domInputWrapper) this.domInputWrapper.classList.remove('active-typing');
          if (this.domCursor) this.domCursor.classList.remove('blink');
          if (this.domInputText) {
            this.domInputText.textContent = 'Digite uma instrução ou comando...';
            this.domInputText.classList.remove('has-value');
          }

          // User Bubble
          const userRow = document.createElement('div');
          userRow.className = 'sim-row-user';
          userRow.innerHTML = `
            <div class="sim-bubble-user">
              <div>${scenario.prompt}</div>
              <div class="sim-bubble-meta">
                <span>${scenario.time}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
            </div>
          `;
          this.domChatBody?.appendChild(userRow);
          this.scrollToBottom();

          // Step 3: Agent Thinking
          this.stepTimer = window.setTimeout(() => {
            const agentRow = document.createElement('div');
            agentRow.className = 'sim-row-agent';
            agentRow.innerHTML = `
              <div class="sim-avatar">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"></path></svg>
              </div>
              <div class="sim-bubble-agent" data-agent-bubble="active">
                <!-- Thinking Card -->
                <div class="sim-thinking-card">
                  <div class="sim-thinking-header">
                    <div class="sim-thinking-left">
                      <div class="sim-thinking-icon-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z"></path></svg>
                      </div>
                      <span class="sim-thinking-title">Raciocínio da IA</span>
                      <span class="sim-thinking-badge">${scenario.thinking.lines}</span>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#818CF8" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </div>
                  <div class="sim-thinking-body">
                    ${scenario.thinking.text}
                  </div>
                </div>
              </div>
            `;
            this.domChatBody?.appendChild(agentRow);
            this.scrollToBottom();

            const activeBubble = this.container.querySelector<HTMLElement>('[data-agent-bubble="active"]');

            // Step 4: Tool execution
            this.stepTimer = window.setTimeout(() => {
              if (activeBubble && scenario.tool) {
                const toolCard = document.createElement('div');
                toolCard.className = 'sim-tool-card';

                const diffBadge = scenario.tool.diffStats
                  ? `<span style="background: rgba(16, 185, 129, 0.2); color: #34D399; font-size: 9.5px; padding: 2px 5px; border-radius: 4px; margin-left: 6px;">+${scenario.tool.diffStats.added} / -${scenario.tool.diffStats.removed}</span>`
                  : '';

                toolCard.innerHTML = `
                  <div class="sim-tool-header">
                    <div class="sim-tool-left">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                      <span>${scenario.tool.name}</span>
                      ${diffBadge}
                    </div>
                    <span class="sim-tool-cmd">${scenario.tool.cmd}</span>
                  </div>
                  <div class="sim-tool-body">
                    <div>${scenario.tool.output}</div>
                    <div class="sim-tool-success">${scenario.tool.success}</div>
                  </div>
                `;
                activeBubble.appendChild(toolCard);
                this.scrollToBottom();
              }

              // Step 5: Final Response Text
              this.stepTimer = window.setTimeout(() => {
                if (activeBubble) {
                  const textEl = document.createElement('div');
                  textEl.className = 'sim-agent-text';
                  textEl.textContent = scenario.response;
                  activeBubble.appendChild(textEl);

                  const footerEl = document.createElement('div');
                  footerEl.className = 'sim-agent-footer';
                  footerEl.innerHTML = `
                    <span>Antigravity 2.0</span> • <span>Agora</span>
                    ${scenario.modelBadge ? `<span style="background: rgba(99, 102, 241, 0.2); color: #818CF8; padding: 1px 6px; border-radius: 4px; margin-left: 4px; font-weight: 600;">${scenario.modelBadge}</span>` : ''}
                  `;
                  activeBubble.appendChild(footerEl);
                  activeBubble.removeAttribute('data-agent-bubble');
                  this.scrollToBottom();

                  // Step 6: Loop after 7 seconds
                  this.stepTimer = window.setTimeout(() => {
                    this.playScenario(this.currentIndex + 1);
                  }, 7000);
                }
              }, 800);
            }, 1000);
          }, 550);
        }, 450);
      }
    }, 35);
  }

  public destroy(): void {
    this.stopAllTimers();
    if (this.clockTimer !== null) {
      clearInterval(this.clockTimer);
      this.clockTimer = null;
    }
    this.isMounted = false;
  }
}
