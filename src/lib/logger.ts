type LogLevel = "info" | "warn" | "error";
type LogContext = Record<string, unknown>;

function emit(level: LogLevel, event: string, context: LogContext): void {
  const entry = {
    timestamp: new Date().toISOString(),
    level,
    event,
    ...context,
  };
  const line = JSON.stringify(entry);
  if (level === "error") console.error(line);
  else if (level === "warn") console.warn(line);
  else console.log(line);
}

export function logInfo(event: string, context: LogContext = {}): void {
  emit("info", event, context);
}

export function logWarn(event: string, context: LogContext = {}): void {
  emit("warn", event, context);
}

export function captureError(event: string, err: unknown, context: LogContext = {}): void {
  const errorInfo =
    err instanceof Error
      ? { name: err.name, message: err.message, stack: err.stack }
      : { message: String(err) };
  emit("error", event, { ...context, error: errorInfo });
  // Swap this for Sentry.captureException(err, { tags: { event }, extra: context })
  // once a DSN is wired up — signatures align, so no call-site changes required.
}
