package br.edu.ifpb.pweb.promobackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.edu.ifpb.pweb.promobackend.model.Categoria;

import java.util.List;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
    
}
