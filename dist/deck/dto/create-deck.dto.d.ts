import { colors } from "../schema/deck.schema";
export declare class createDeckDto {
    readonly name: string;
    readonly commanderName: string;
    readonly cards: string[];
    readonly colors: colors[];
}
