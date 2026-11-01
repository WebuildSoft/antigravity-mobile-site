import { SimulationScenario } from './types';

export const DEFAULT_SCENARIOS: SimulationScenario[] = [
  {
    id: 'auth-test',
    chipLabel: '⚡ Corrigir & Testar',
    prompt: 'Implemente a autenticação JWT e execute os testes do backend.',
    time: '10:42',
    modelBadge: 'Gemini 2.5 Pro',
    thinking: {
      lines: '3 linhas',
      timeTaken: '2.1s',
      text: 'Identificando tokens e verificando suíte de testes unitários no Go/Gin...'
    },
    tool: {
      name: 'run_command',
      cmd: 'go test ./...',
      output: 'PASS: TestAuthTokenVerification (0.04s)<br>PASS: TestUserSessionIsolation (0.02s)',
      success: '✓ 19/19 testes passaram com sucesso'
    },
    response: 'Módulo de autenticação validado! Todos os endpoints estão protegidos com token seguro e o isolamento de sessão por UID está ativo.'
  },
  {
    id: 'qr-camera',
    chipLabel: '🎨 Refatorar UI',
    prompt: 'Refatore o componente para Flutter e adicione leitor QR Code.',
    time: '10:44',
    modelBadge: 'Gemini 2.5 Flash',
    thinking: {
      lines: '4 linhas',
      timeTaken: '1.8s',
      text: 'Analisando camera_service e integrando QrScannerDialog com foco contínuo...'
    },
    tool: {
      name: 'edit_file',
      cmd: 'lib/widgets/qr_scanner_dialog.dart',
      output: 'Made 1 replacement in qr_scanner_dialog.dart (+28/-8 lines)',
      success: '✓ Widget compilado e renderizado com Diff',
      diffStats: {
        added: 28,
        removed: 8
      }
    },
    response: 'Pronto! O leitor de QR Code foi integrado diretamente na interface com suporte a pareamento instantâneo via câmera.'
  },
  {
    id: 'release-build',
    chipLabel: '🚀 Build Release',
    prompt: 'Gere o APK release da build 24 e atualize o changelog.',
    time: '10:46',
    modelBadge: 'Gemini 2.5 Pro',
    thinking: {
      lines: '5 linhas',
      timeTaken: '3.4s',
      text: 'Compilando Flutter release com ProGuard e assinando pacote AntigravityMobile-v1.4.0...'
    },
    tool: {
      name: 'run_command',
      cmd: 'flutter build apk --release',
      output: 'Built build/app/outputs/flutter-apk/app-release.apk (73.3MB).',
      success: '✓ APK v1.4.0 (Build #24) gerado com sucesso'
    },
    response: 'Build concluído! O arquivo AntigravityMobile-v1.4.0-build24.apk está pronto para download e publicado no repositório de releases.'
  }
];
