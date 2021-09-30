package br.edu.ifpb.pweb.promobackend.controller;

import br.edu.ifpb.pweb.promobackend.dto.GameDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifpb.pweb.promobackend.model.Game;
import br.edu.ifpb.pweb.promobackend.service.GameService;

import java.util.List;

@RestController
@RequestMapping("/")
public class GameController {
    
    @Autowired
    private GameService gameService;

    @GetMapping("/games")
    public List<Game> getGames() {
        return this.gameService.getGames();
    }

    @GetMapping("/games/{id}")
    public Game getGamePorId(@PathVariable("id") Long idGame) {
        return this.gameService.getGamePorId(idGame);
    }

    @PostMapping("/games")
    public Game inserirGame(@RequestBody GameDto game) throws Exception {
        return this.gameService.inserirOuAtualizar(game);
    }

    @PutMapping("/games")
    public Game atualizarGame(@RequestBody GameDto game) throws Exception {
        return this.gameService.inserirOuAtualizar(game);
    }

    @DeleteMapping("/games/{id}")
    public void apagarGame(@PathVariable("id") Long id) {
        this.gameService.apagar(id);
    }

}
