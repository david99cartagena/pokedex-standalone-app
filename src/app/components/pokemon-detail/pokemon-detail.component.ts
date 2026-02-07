import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonTypeColorService } from 'src/app/services/pokemon-type-color.service';
import { CapitalizePipe } from 'src/app/pipes/capitalize.pipe';
import { PokemonImagePipe } from 'src/app/pipes/pokemon-image.pipe';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, CapitalizePipe, PokemonImagePipe],
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent {
  @Input() pokemon!: Pokemon;
  @Output() close = new EventEmitter();

  flipped = false;
  constructor(public typeColorService: PokemonTypeColorService) {}
}
