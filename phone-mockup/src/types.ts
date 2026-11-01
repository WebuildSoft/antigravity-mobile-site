/**
 * Antigravity Phone Mockup - Type Definitions
 */

export interface ToolCall {
  name: 'run_command' | 'edit_file' | 'read_file' | 'search_web';
  cmd: string;
  output: string;
  success: string;
  diffStats?: {
    added: number;
    removed: number;
  };
}

export interface ThinkingInfo {
  lines: string;
  text: string;
  timeTaken?: string;
}

export interface ImageAttachment {
  label: string;
  tag: string;
  icon?: string;
}

export interface SimulationScenario {
  id?: string;
  chipLabel: string;
  prompt: string;
  time: string;
  attachedImage?: ImageAttachment;
  thinking: ThinkingInfo;
  tool?: ToolCall;
  response: string;
  modelBadge?: string;
}

export interface SimulatorOptions {
  containerId: string;
  autoPlay?: boolean;
  typeSpeedMs?: number;
  waitAfterSendMs?: number;
  pauseBetweenScenariosMs?: number;
}
