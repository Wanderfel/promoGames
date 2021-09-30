package br.edu.ifpb.pweb.promobackend.service;

import br.edu.ifpb.pweb.promobackend.dto.GameDto;
import br.edu.ifpb.pweb.promobackend.repositories.CategoriaRepository;
import br.edu.ifpb.pweb.promobackend.repositories.LojaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.edu.ifpb.pweb.promobackend.model.Game;
import br.edu.ifpb.pweb.promobackend.repositories.GameRepository;

import java.util.List;

@Service
public class GameService {

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private LojaRepository lojaRepository;

    @Autowired
    private CategoriaRepository categoriaRepository;

    public List<Game> getGames() {
        return this.gameRepository.findAll();
    }

    public Game getGamePorId(Long idGame) {
        return this.gameRepository.findById(idGame).orElse(null);
    }
    
    @Transactional
    public Game inserirOuAtualizar(GameDto gameDto) throws Exception {
        Game game = gameDto.toGame(this.lojaRepository, this.categoriaRepository,this.gameRepository);
        Game usuarioInserido = this.gameRepository.save(game);
        if (game.getPreco() < 0) {
            throw new RuntimeException("Preço Negativo não permitido");
        }
        return usuarioInserido;
    }

    public void apagar(Long id) {
        this.gameRepository.deleteById(id);
    }
 

}