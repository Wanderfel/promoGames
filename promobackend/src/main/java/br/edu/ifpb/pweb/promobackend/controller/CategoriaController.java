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

import br.edu.ifpb.pweb.promobackend.model.Categoria;
import br.edu.ifpb.pweb.promobackend.service.CategoriaService;

@RestController
@RequestMapping("/")
public class CategoriaController {
    
    @Autowired
    private CategoriaService categoriaService;

    @GetMapping("/categorias")
    public List<Categoria> getGames() {
        return this.categoriaService.getCategorias();
    }

    @GetMapping("/categorias/{id}")
    public Categoria getCategoriaPorId(@PathVariable("id") Long idGame) {
        return this.categoriaService.getCategoriaPorId(idGame);
    }

    @PostMapping("/categorias")
    public Categoria inserirUsuario(@RequestBody Categoria categoria){
        return this.categoriaService.inserirOuAtualizar(categoria);
    }

    @PutMapping("/categorias/{id}")
    public Categoria atualizarCategoria(@RequestBody Categoria categoria){
        return this.categoriaService.inserirOuAtualizar(categoria);
    }

    @DeleteMapping("/categorias/{id}")
    public void apagarCategoria(@PathVariable("id") Long id) {
        this.categoriaService.apagar(id);
    }
}
