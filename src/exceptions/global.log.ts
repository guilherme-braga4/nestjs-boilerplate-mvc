import { LoggerService } from '@nestjs/common';

export class EmojiLogger implements LoggerService {
    log(message: string) {
        this.writeToFile('📢 ' + message);
    }

    error(message: string, trace: string) {
        this.writeToFile('❌ Error: ' + message);
        this.writeToFile('🔍 Stack Trace: ' + trace);
    }

    warn(message: string) {
        this.writeToFile('⚠️ Warn: ' + message);
    }

    debug(message: string) {
        this.writeToFile('🐞 Debug: ' + message);
    }

    private writeToFile(message: string) {
        console.log(message);
    }
}