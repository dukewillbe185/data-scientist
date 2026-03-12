type RequestPayload = {
  task: string;
};

const requiredEnv = [] as const;

function readConfig() {
  const missing = requiredEnv.filter((name) => !process.env[name]);

  if (missing.length > 0) {
    throw new Error(`Missing required env vars for provenance-tracer: ${missing.join(", ")}`);
  }

  return Object.fromEntries(requiredEnv.map((name) => [name, process.env[name] ?? ""]));
}

export async function handleRequest(payload: RequestPayload) {
  const config = readConfig();

  return {
    server: "provenance-tracer",
    task: payload.task,
    configKeys: Object.keys(config),
    message: "Implement the MCP server behavior for this external integration.",
  };
}
