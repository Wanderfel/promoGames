package br.edu.ifpb.pweb.promobackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifpb.pweb.promobackend.model.Loja;
import br.edu.ifpb.pweb.promobackend.service.LojaService;

@RestController
@RequestMapping("/")
public class LojaController {
    
    @Autowired
    private LojaService lojaService;

    @GetMapping("/lojas")
    public List<Loja> getGames() {
        return this.lojaService.getLojas();
    }

    @GetMapping("/lojas/{id}")
    public Loja getGamePorId(@PathVariable("id") Long idGame) {
        return this.lojaService.getLojaPorId(idGame);
    }

    @PostMapping("/lojas")
    public Loja inserirUsuario(@RequestBody Loja loja){
        return this.lojaService.inserirOuAtualizar(loja);
    }

    @PutMapping("/lojas/{id}")
    public Loja atualizarLoja(@RequestBody Loja loja){
        return this.lojaService.inserirOuAtualizar(loja);
    }

    @DeleteMapping("/lojas/{id}")
    public void apagarLoja(@PathVariable("id") Long id) {
        this.lojaService.apagar(id);
    }
}
