import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { DeckService } from './deck.service';
import { Deck } from './schema/deck.schema';
import { createDeckDto } from './dto/create-deck.dto';
import { updateDeckDto } from './dto/update-deck.dto';

@Controller('deck')
export class DeckController {

    constructor(
        private deckService: DeckService){}
    
        @Get('commander')
        async getCommander(@Query('name') name: string): Promise<any> {
            if (!name) {
                throw new Error('Missing "name" query parameter');
            }
            return this.deckService.fetchCommander(name);
        }

        @Get('allDecks')
        async getAllDecks(): Promise<Deck[]>{
            return this.deckService.findAll()
        }

        @Post('newDeck')
        async createDeck(
            @Body()
            deck: createDeckDto, 
        ): Promise<Deck> {
            return this.deckService.create(deck)
        }

        @Get(':id')
        async getById(
            @Param('id')
            id: string,
        ): Promise<Deck>{
            return this.deckService.findById(id);
        }

        @Put(':id')
        async updateDeck(
            @Param('id')
            id:string,
            @Body()
            deck: updateDeckDto,
        ): Promise<Deck> {
            return this.deckService.updateById(id, deck)
        }

        @Delete(':id')
        async deleteById(
            @Param('id')
            id: string,
        ): Promise<Deck> {
            return this.deckService,this.deleteById(id);
        }
    }





