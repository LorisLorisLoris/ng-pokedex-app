import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html', 
})

export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private pokemonService: PokemonService, 
    ){}

  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id'); 
    if(pokemonId){
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }

  goToPokemonList(){
this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(pokemon: Pokemon){
    this.router.navigate(['/edit/pokemon', pokemon.id]);
  }
}

// 1- on va chercher le service activated route
// 2- on l'injecte dans le composant via le constructeur
// 3- on recupere l'id contenu dans l'url 
// 4- si l'id a ete trouve dans l'url on attribut a la propriete pokemon, le pokemon qui correspond à 'identifiant 
