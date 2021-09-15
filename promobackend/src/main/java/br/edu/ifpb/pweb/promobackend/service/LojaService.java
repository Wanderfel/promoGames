package br.edu.ifpb.pweb.promobackend.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ifpb.pweb.promobackend.model.Loja;
import br.edu.ifpb.pweb.promobackend.repositories.LojaRepository;

@Service
public class LojaService {
    
    @Autowired
    private LojaRepository lojaRepository;

    public List<Loja> getLojas() {
        return this.lojaRepository.findAll();
    }

    public Loja getLojaPorId(Long idLoja) {
        return this.lojaRepository.findById(idLoja).orElse(null);
    }

    @Transactional
    public Loja inserirOuAtualizar(Loja loja) {
        Loja lojaInserida = this.lojaRepository.save(loja);
        return lojaInserida;
    }

    public void apagar(Long id) {
        this.lojaRepository.deleteById(id);
    }
}
