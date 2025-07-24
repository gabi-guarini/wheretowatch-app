import { Show } from "@/app/domain/types/Show";

// The whole app and componentes will dependt on this abstraction,
// so you can implement any streaming service API through this class
export abstract class StreamingService {

    abstract searchByTitle(title: string): Promise<Show>;
}
