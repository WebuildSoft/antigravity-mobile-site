"use strict";var AntigravityPhoneMockupBundle=(()=>{var p=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var b=(o,e)=>{for(var t in e)p(o,t,{get:e[t],enumerable:!0})},f=(o,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of v(e))!g.call(o,n)&&n!==t&&p(o,n,{get:()=>e[n],enumerable:!(i=m(e,n))||i.enumerable});return o};var k=o=>f(p({},"__esModule",{value:!0}),o);var T={};b(T,{DEFAULT_SCENARIOS:()=>c,PhoneSimulator:()=>l,createPhoneMockup:()=>h});function u(o){return`
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
              <button class="appbar-icon-btn" title="Hist\xF3rico de Conversas" aria-label="Menu">
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
              <button class="appbar-icon-btn" title="Configura\xE7\xF5es" aria-label="Configura\xE7\xF5es">
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
            ${o.map((t,i)=>`<button class="sim-chip" data-scenario-index="${i}">${t.chipLabel}</button>`).join("")}
          </div>

          <!-- Flutter Mobile Bottom Bar Replica -->
          <div class="phone-input-bar">
            <button class="phone-camera-btn" title="Enviar Foto ou Imagem" aria-label="C\xE2mera">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            </button>
            <div class="phone-fake-input-wrapper" id="simInputWrapper">
              <span id="simInputText" class="phone-fake-input-text">Digite uma instru\xE7\xE3o ou comando...</span>
              <span class="sim-cursor" id="simCursor"></span>
            </div>
            <button class="phone-send-btn" id="simSendBtn" title="Enviar" aria-label="Enviar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `}var l=class{scenarios;currentIndex=0;container;typingTimer=null;stepTimer=null;clockTimer=null;isMounted=!1;domChatBody=null;domInputText=null;domInputWrapper=null;domCursor=null;domSendBtn=null;domPhoneTime=null;constructor(e,t){let i=document.getElementById(e.containerId);if(!i)throw new Error(`[PhoneSimulator] Element with id '${e.containerId}' not found.`);this.container=i,this.scenarios=t}mount(){this.isMounted||(this.container.querySelector(".phone-screen")||(this.container.innerHTML=u(this.scenarios)),this.bindDOM(),this.bindEvents(),this.startClock(),this.isMounted=!0,setTimeout(()=>{this.playScenario(0)},600))}bindDOM(){this.domChatBody=this.container.querySelector("#simChatBody"),this.domInputText=this.container.querySelector("#simInputText"),this.domInputWrapper=this.container.querySelector("#simInputWrapper"),this.domCursor=this.container.querySelector("#simCursor"),this.domSendBtn=this.container.querySelector("#simSendBtn"),this.domPhoneTime=this.container.querySelector("#simPhoneTime")}bindEvents(){this.container.querySelectorAll(".sim-chip").forEach(i=>{i.addEventListener("click",n=>{let s=n.currentTarget.getAttribute("data-scenario-index");s!==null&&this.triggerPrompt(parseInt(s,10))})}),this.domSendBtn&&this.domSendBtn.addEventListener("click",()=>{this.triggerPrompt(this.currentIndex)});let t=this.container.querySelector("#simNewChatBtn");t&&t.addEventListener("click",()=>{this.replay()})}startClock(){this.updateClock(),this.clockTimer=window.setInterval(()=>this.updateClock(),3e4)}updateClock(){if(!this.domPhoneTime)return;let e=new Date,t=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0");this.domPhoneTime.textContent=`${t}:${i}`}triggerPrompt(e){this.stopAllTimers(),this.resetUI(),this.playScenario(e)}replay(){this.stopAllTimers(),this.resetUI(),this.playScenario(this.currentIndex)}stopAllTimers(){this.typingTimer!==null&&(clearInterval(this.typingTimer),this.typingTimer=null),this.stepTimer!==null&&(clearTimeout(this.stepTimer),this.stepTimer=null)}resetUI(){this.domChatBody&&(this.domChatBody.innerHTML=""),this.domInputText&&(this.domInputText.textContent="Digite uma instru\xE7\xE3o ou comando...",this.domInputText.classList.remove("has-value")),this.domInputWrapper&&this.domInputWrapper.classList.remove("active-typing"),this.domCursor&&this.domCursor.classList.remove("blink")}scrollToBottom(){this.domChatBody&&this.domChatBody.scrollTo({top:this.domChatBody.scrollHeight,behavior:"smooth"})}playScenario(e){this.stopAllTimers(),this.currentIndex=e%this.scenarios.length;let t=this.scenarios[this.currentIndex];if(!this.domChatBody||!this.domInputText)return;this.updateClock();let i=0;this.domInputText.textContent="",this.domInputText.classList.add("has-value"),this.domInputWrapper&&this.domInputWrapper.classList.add("active-typing"),this.domCursor&&this.domCursor.classList.add("blink"),this.typingTimer=window.setInterval(()=>{this.domInputText&&(i<t.prompt.length?(this.domInputText.textContent+=t.prompt.charAt(i),i++):(this.typingTimer!==null&&(clearInterval(this.typingTimer),this.typingTimer=null),this.stepTimer=window.setTimeout(()=>{this.domSendBtn&&(this.domSendBtn.classList.add("clicked"),setTimeout(()=>this.domSendBtn?.classList.remove("clicked"),180)),this.domInputWrapper&&this.domInputWrapper.classList.remove("active-typing"),this.domCursor&&this.domCursor.classList.remove("blink"),this.domInputText&&(this.domInputText.textContent="Digite uma instru\xE7\xE3o ou comando...",this.domInputText.classList.remove("has-value"));let n=document.createElement("div");n.className="sim-row-user",n.innerHTML=`
            <div class="sim-bubble-user">
              <div>${t.prompt}</div>
              <div class="sim-bubble-meta">
                <span>${t.time}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
            </div>
          `,this.domChatBody?.appendChild(n),this.scrollToBottom(),this.stepTimer=window.setTimeout(()=>{let d=document.createElement("div");d.className="sim-row-agent",d.innerHTML=`
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
                      <span class="sim-thinking-title">Racioc\xEDnio da IA</span>
                      <span class="sim-thinking-badge">${t.thinking.lines}</span>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#818CF8" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </div>
                  <div class="sim-thinking-body">
                    ${t.thinking.text}
                  </div>
                </div>
              </div>
            `,this.domChatBody?.appendChild(d),this.scrollToBottom();let s=this.container.querySelector('[data-agent-bubble="active"]');this.stepTimer=window.setTimeout(()=>{if(s&&t.tool){let a=document.createElement("div");a.className="sim-tool-card";let r=t.tool.diffStats?`<span style="background: rgba(16, 185, 129, 0.2); color: #34D399; font-size: 9.5px; padding: 2px 5px; border-radius: 4px; margin-left: 6px;">+${t.tool.diffStats.added} / -${t.tool.diffStats.removed}</span>`:"";a.innerHTML=`
                  <div class="sim-tool-header">
                    <div class="sim-tool-left">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                      <span>${t.tool.name}</span>
                      ${r}
                    </div>
                    <span class="sim-tool-cmd">${t.tool.cmd}</span>
                  </div>
                  <div class="sim-tool-body">
                    <div>${t.tool.output}</div>
                    <div class="sim-tool-success">${t.tool.success}</div>
                  </div>
                `,s.appendChild(a),this.scrollToBottom()}this.stepTimer=window.setTimeout(()=>{if(s){let a=document.createElement("div");a.className="sim-agent-text",a.textContent=t.response,s.appendChild(a);let r=document.createElement("div");r.className="sim-agent-footer",r.innerHTML=`
                    <span>Antigravity 2.0</span> \u2022 <span>Agora</span>
                    ${t.modelBadge?`<span style="background: rgba(99, 102, 241, 0.2); color: #818CF8; padding: 1px 6px; border-radius: 4px; margin-left: 4px; font-weight: 600;">${t.modelBadge}</span>`:""}
                  `,s.appendChild(r),s.removeAttribute("data-agent-bubble"),this.scrollToBottom(),this.stepTimer=window.setTimeout(()=>{this.playScenario(this.currentIndex+1)},7e3)}},800)},1e3)},550)},450)))},35)}destroy(){this.stopAllTimers(),this.clockTimer!==null&&(clearInterval(this.clockTimer),this.clockTimer=null),this.isMounted=!1}};var c=[{id:"auth-test",chipLabel:"\u26A1 Corrigir & Testar",prompt:"Implemente a autentica\xE7\xE3o JWT e execute os testes do backend.",time:"10:42",modelBadge:"Gemini 2.5 Pro",thinking:{lines:"3 linhas",timeTaken:"2.1s",text:"Identificando tokens e verificando su\xEDte de testes unit\xE1rios no Go/Gin..."},tool:{name:"run_command",cmd:"go test ./...",output:"PASS: TestAuthTokenVerification (0.04s)<br>PASS: TestUserSessionIsolation (0.02s)",success:"\u2713 19/19 testes passaram com sucesso"},response:"M\xF3dulo de autentica\xE7\xE3o validado! Todos os endpoints est\xE3o protegidos com token seguro e o isolamento de sess\xE3o por UID est\xE1 ativo."},{id:"qr-camera",chipLabel:"\u{1F3A8} Refatorar UI",prompt:"Refatore o componente para Flutter e adicione leitor QR Code.",time:"10:44",modelBadge:"Gemini 2.5 Flash",thinking:{lines:"4 linhas",timeTaken:"1.8s",text:"Analisando camera_service e integrando QrScannerDialog com foco cont\xEDnuo..."},tool:{name:"edit_file",cmd:"lib/widgets/qr_scanner_dialog.dart",output:"Made 1 replacement in qr_scanner_dialog.dart (+28/-8 lines)",success:"\u2713 Widget compilado e renderizado com Diff",diffStats:{added:28,removed:8}},response:"Pronto! O leitor de QR Code foi integrado diretamente na interface com suporte a pareamento instant\xE2neo via c\xE2mera."},{id:"release-build",chipLabel:"\u{1F680} Build Release",prompt:"Gere o APK release da build 24 e atualize o changelog.",time:"10:46",modelBadge:"Gemini 2.5 Pro",thinking:{lines:"5 linhas",timeTaken:"3.4s",text:"Compilando Flutter release com ProGuard e assinando pacote AntigravityMobile-v1.4.0..."},tool:{name:"run_command",cmd:"flutter build apk --release",output:"Built build/app/outputs/flutter-apk/app-release.apk (73.3MB).",success:"\u2713 APK v1.4.0 (Build #24) gerado com sucesso"},response:"Build conclu\xEDdo! O arquivo AntigravityMobile-v1.4.0-build24.apk est\xE1 pronto para download e publicado no reposit\xF3rio de releases."}];function h(o="antigravity-phone-mockup",e){let t=e&&e.length>0?e:c,i=new l({containerId:o},t);return i.mount(),i}typeof window<"u"&&(window.AntigravityPhoneMockup={create:h,scenarios:c},document.addEventListener("DOMContentLoaded",()=>{document.getElementById("antigravity-phone-mockup")&&!window.AntigravityPhoneMockup.instance&&(window.AntigravityPhoneMockup.instance=h("antigravity-phone-mockup"))}));return k(T);})();
