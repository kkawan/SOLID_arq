interface Logger {
  info(message: string): void;
  error(message: string): void;
}

class LegacyLogger {
  log(level: string, text: string): void {
    console.log(`[${level}] ${text}`);
  }
}

class LegacyLoggerAdapter implements Logger {
  private readonly legacy: LegacyLogger;

  constructor(legacy: LegacyLogger) {
    this.legacy = legacy;
  }

  info(message: string): void {
    this.legacy.log("INFO", message);
  }

  error(message: string): void {
    this.legacy.log("ERROR", message);
  }
}

class Application {
  private readonly logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  run(): void {
    this.logger.info("Iniciando aplicação");
    this.logger.error("Falha ao conectar no banco");
  }
}

export function executarAdapter(): void {
  const legacy = new LegacyLogger();
  const logger: Logger = new LegacyLoggerAdapter(legacy);
  const app = new Application(logger);

  console.log("=== Pattern Estrutural: Adapter ===");
  app.run();
}
