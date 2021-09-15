package br.edu.ifpb.pweb.promobackend.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ifpb.pweb.promobackend.repositories.CategoriaRepository;

import br.edu.ifpb.pweb.promobackend.model.Categoria;

@Service
public class CategoriaService {
    
    @Autowired
    private CategoriaRepository categoriaRepository;

    public List<Categoria> getCategorias() {
        return this.categoriaRepository.findAll();
    }

    public Categoria getCategoriaPorId(Long idCategoria) {
        return this.categoriaRepository.findById(idCategoria).orElse(null);
    }

    @Transactional
    public Categoria inserirOuAtualizar(Categoria categoria) {
        Categoria categoriaInserida = this.categoriaRepository.save(categoria);
        return categoriaInserida;
    }

    public void apagar(Long id) {
        this.categoriaRepository.deleteById(id);
    }
}
