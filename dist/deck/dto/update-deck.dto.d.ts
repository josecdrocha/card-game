import { colors } from "../schema/deck.schema";
export declare class updateDeckDto {
    readonly name: string;
    readonly commanderName: string;
    readonly cards: string[];
    readonly colors: colors[];
}
