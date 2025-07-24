import { StreamingService } from "@/app/domain/services/StreamingService";

export class StreamingServiceSingleton {
    private static instance: StreamingService;

    private constructor() { } // <- evita `new` desde fuera

    static get(): StreamingService {
        if (!this.instance) {
            this.instance = this.createInstance();
        }
        return this.instance;
    }

    private static createInstance(): StreamingService {
        throw new Error("Method not implemented.");
    }
}
