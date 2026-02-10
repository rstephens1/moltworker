import { describe, expect, it } from 'vitest';
import { isAllowedConfigPath } from './ops-allowlist';

describe('isAllowedConfigPath', () => {
  it('allows known config paths', () => {
    expect(isAllowedConfigPath('agents.defaults.model.primary')).toBe(true);
    expect(isAllowedConfigPath('gateway.auth.token')).toBe(true);
    expect(isAllowedConfigPath('gateway.port')).toBe(true);
  });

  it('rejects unknown config paths', () => {
    expect(isAllowedConfigPath('gateway.bind')).toBe(false);
    expect(isAllowedConfigPath('agents.defaults.model')).toBe(false);
    expect(isAllowedConfigPath('channels.discord.token')).toBe(false);
  });
});
