import { Module } from '@nestjs/common';
import { DeckController } from './deck.controller';
import { DeckService } from './deck.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DeckSchema } from './schema/deck.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Deck', schema: DeckSchema}])],
  controllers: [DeckController],
  providers: [DeckService],
})
export class DeckModule {}
