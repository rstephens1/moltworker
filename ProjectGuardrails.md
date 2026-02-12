# Project Guardrails

Use this checklist at the start of any new Codex thread for this repo.

Scope of this file:
- Account isolation, deployment safety, and stop conditions only.
- Testing workflow and evidence order live in `readme.md`.

## Account Confirmation

Before any work, ask the user to confirm:
- GitHub account: rstephens1 or bvca1
- Cloudflare account: rstephens1@gmail.com or info@bennettvalley.org

Do not assume. Wait for confirmation.

## Cloudflare Isolation

Always isolate Wrangler per repo:

- Create a local wrapper script `wrangler.sh` that sets `WRANGLER_HOME` to a repo-local folder (e.g., `.wrangler-home`).
- Add `.wrangler-home/`, `.wrangler/`, `node_modules/`, and `.DS_Store` to `.gitignore`.
- Always run Wrangler via `bash wrangler.sh ...`.
- Before any Cloudflare command, run `bash wrangler.sh whoami`.
- If the account is wrong, run `bash wrangler.sh logout` then `bash wrangler.sh login`, then re-check `whoami`.

## GitHub Safety

- Verify the expected remote with `git remote -v` before push/pull.
- If the remote doesn’t match the confirmed account, stop and ask.

## Stop Conditions

If any account ambiguity appears, STOP and ask for clarification before proceeding.

## Final Confirmation

Repeat back:
- Repo path
- GitHub account
- Cloudflare account

Only then proceed.

## Port Hygiene

Use consistent, per-project port defaults and avoid clashes:
- Assign explicit ports per project (document them).
- If a server fails to start, check for a port conflict and stop the owning process.
- Stop unused dev servers when switching threads/projects.
