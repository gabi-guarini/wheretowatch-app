import { StreamingService } from "@/app/domain/services/StreamingService";
import { Show } from "@/app/domain/types/Show";

// https://docs.movieofthenight.com
import streamingAvailability from "streaming-availability";

export class StreamingAvailabilityAPI implements StreamingService {

    private readonly api: streamingAvailability.Client;

    constructor(
        private readonly apiKey: string,
        private readonly outputLang: string = "es",
    ) {
        this.api = new streamingAvailability.Client(
            new streamingAvailability.Configuration({
                apiKey: this.apiKey,
            })
        );
    }

    searchByTitle(title: string): Promise<Show> {
        throw new Error("Method not implemented.");
    }
}
