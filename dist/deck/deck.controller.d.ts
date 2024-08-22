import { DeckService } from './deck.service';
import { Deck } from './schema/deck.schema';
import { createDeckDto } from './dto/create-deck.dto';
import { updateDeckDto } from './dto/update-deck.dto';
export declare class DeckController {
    private deckService;
    constructor(deckService: DeckService);
    getCommander(name: string): Promise<any>;
    getAllDecks(): Promise<Deck[]>;
    createDeck(deck: createDeckDto): Promise<Deck>;
    getById(id: string): Promise<Deck>;
    updateDeck(id: string, deck: updateDeckDto): Promise<Deck>;
    deleteById(id: string): Promise<Deck>;
}
