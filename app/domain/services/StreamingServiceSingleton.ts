import { StreamingAvailabilityAPI } from "@/app/api/infrastructure/StreamingAvailabilityAPI";
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
        // StreamingAvailabilityAPI
        const apiKey = process.env.RAPIDAPI_STREAMING_AVAILABILITY_API_KEY;
        if (!apiKey) {
            throw new Error(
                "Environment variable 'RAPIDAPI_STREAMING_AVAILABILITY_API_KEY' is not defined"
            );
        }
        return new StreamingAvailabilityAPI(apiKey);
    }
}
