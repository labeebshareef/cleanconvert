export enum LogLevel {
  ERROR = 0,
  WARN = 1,
  INFO = 2,
  DEBUG = 3,
}

export interface LogEntry {
  timestamp: number;
  level: LogLevel;
  message: string;
  data?: any;
  error?: Error;
  context?: string;
}

export class Logger {
  private static instance: Logger;
  private logs: LogEntry[] = [];
  private maxLogs = 100;
  private logLevel: LogLevel;

  private constructor() {
    this.logLevel = process.env.NODE_ENV === 'development' ? LogLevel.DEBUG : LogLevel.WARN;
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private log(level: LogLevel, message: string, data?: any, error?: Error, context?: string) {
    if (level <= this.logLevel) {
      const entry: LogEntry = {
        timestamp: Date.now(),
        level,
        message,
        ...(data !== undefined && { data }),
        ...(error !== undefined && { error }),
        ...(context !== undefined && { context }),
      };

      this.logs.push(entry);

      // Keep only the last maxLogs entries
      if (this.logs.length > this.maxLogs) {
        this.logs = this.logs.slice(-this.maxLogs);
      }

      // Console output
      this.outputToConsole(entry);

      // Send to external logging service (if needed)
      this.sendToExternalService(entry);
    }
  }

  private outputToConsole(entry: LogEntry) {
    const timestamp = new Date(entry.timestamp).toISOString();
    const prefix = `[${timestamp}] ${LogLevel[entry.level]}`;
    const message = entry.context ? `${prefix} [${entry.context}]: ${entry.message}` : `${prefix}: ${entry.message}`;

    switch (entry.level) {
      case LogLevel.ERROR:
        console.error(message, entry.data, entry.error);
        break;
      case LogLevel.WARN:
        console.warn(message, entry.data);
        break;
      case LogLevel.INFO:
        console.info(message, entry.data);
        break;
      case LogLevel.DEBUG:
        console.debug(message, entry.data);
        break;
    }
  }

  private sendToExternalService(entry: LogEntry) {
    // In production, you could send critical errors to an external service
    if (entry.level === LogLevel.ERROR && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: entry.message,
        fatal: false,
        custom_parameters: {
          context: entry.context,
          timestamp: entry.timestamp,
        },
      });
    }
  }

  error(message: string, data?: any, error?: Error, context?: string) {
    this.log(LogLevel.ERROR, message, data, error, context);
  }

  warn(message: string, data?: any, context?: string) {
    this.log(LogLevel.WARN, message, data, undefined, context);
  }

  info(message: string, data?: any, context?: string) {
    this.log(LogLevel.INFO, message, data, undefined, context);
  }

  debug(message: string, data?: any, context?: string) {
    this.log(LogLevel.DEBUG, message, data, undefined, context);
  }

  getLogs(): LogEntry[] {
    return [...this.logs];
  }

  clearLogs() {
    this.logs = [];
  }

  setLogLevel(level: LogLevel) {
    this.logLevel = level;
  }
}

// Global logger instance
export const logger = Logger.getInstance();

// Convenience functions
export const logError = (message: string, data?: any, error?: Error, context?: string) => 
  logger.error(message, data, error, context);

export const logWarn = (message: string, data?: any, context?: string) => 
  logger.warn(message, data, context);

export const logInfo = (message: string, data?: any, context?: string) => 
  logger.info(message, data, context);

export const logDebug = (message: string, data?: any, context?: string) => 
  logger.debug(message, data, context);
