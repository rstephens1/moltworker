const ALLOWED_CONFIG_PATHS = new Set([
  'agents.defaults.model.primary',
  'gateway.auth.token',
  'gateway.port',
]);

export function isAllowedConfigPath(path: string): boolean {
  return ALLOWED_CONFIG_PATHS.has(path);
}
