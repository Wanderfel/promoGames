package br.edu.ifpb.pweb.promobackend.dto;

import br.edu.ifpb.pweb.promobackend.model.Categoria;
import br.edu.ifpb.pweb.promobackend.model.Game;
import br.edu.ifpb.pweb.promobackend.model.Loja;
import br.edu.ifpb.pweb.promobackend.repositories.CategoriaRepository;
import br.edu.ifpb.pweb.promobackend.repositories.GameRepository;
import br.edu.ifpb.pweb.promobackend.repositories.LojaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

public class GameDto {
    private Long id;
    private String nome;
    private Float preco;
    private String link;
    private Integer loja;
    private Integer categoria;

    public GameDto(String nome, Float preco, String link, Integer loja, Integer categoria, Long id) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.link = link;
        this.loja = loja;
        this.categoria = categoria;
    }


    public String getNome() {
        return nome;
    }

    public Float getPreco() {
        return preco;
    }

    public String getLink() {
        return link;
    }

    public Integer getLoja() {
        return loja;
    }

    public Integer getCategoria() {
        return categoria;
    }

    public Game toGame(LojaRepository lojaRepository, CategoriaRepository categoriaRepository, GameRepository gameRepository) throws Exception {
        Loja lojaById = lojaRepository.findById(this.loja.longValue()).orElse(null);
        Categoria categoriaById = categoriaRepository.findById(this.categoria.longValue()).orElse(null);

        if (lojaById == null || categoriaById == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        if (this.id == null) {
            return new Game(this.nome, this.preco, lojaById, categoriaById, this.link);
        } else {
            Game gameById = gameRepository.findById(this.id.longValue()).orElse(null);
            gameById.setNome(this.nome);
            gameById.setPreco(this.preco);
            gameById.setLoja(lojaById);
            gameById.setCategoria(categoriaById);
            return gameById;
        }

    }
}
