import { PhoneSimulator } from './simulator';
import { DEFAULT_SCENARIOS } from './scenarios';
import { SimulationScenario } from './types';

export function createPhoneMockup(
  containerId: string = 'antigravity-phone-mockup',
  customScenarios?: SimulationScenario[]
): PhoneSimulator {
  const scenarios = customScenarios && customScenarios.length > 0 ? customScenarios : DEFAULT_SCENARIOS;
  const simulator = new PhoneSimulator({ containerId }, scenarios);
  simulator.mount();
  return simulator;
}

// Expose globally on window for easy drop-in script tag usage
declare global {
  interface Window {
    AntigravityPhoneMockup: {
      create: typeof createPhoneMockup;
      scenarios: typeof DEFAULT_SCENARIOS;
      instance?: PhoneSimulator;
    };
  }
}

if (typeof window !== 'undefined') {
  window.AntigravityPhoneMockup = {
    create: createPhoneMockup,
    scenarios: DEFAULT_SCENARIOS,
  };

  // Auto-init if standard container exists on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    const defaultEl = document.getElementById('antigravity-phone-mockup');
    if (defaultEl && !window.AntigravityPhoneMockup.instance) {
      window.AntigravityPhoneMockup.instance = createPhoneMockup('antigravity-phone-mockup');
    }
  });
}

export * from './types';
export * from './scenarios';
export * from './simulator';
