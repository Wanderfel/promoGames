package br.edu.ifpb.pweb.promobackend.model;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.List;

import static javax.persistence.CascadeType.ALL;

@Entity
@Table(name = "tb_loja")
public class Loja {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nome;

    @OneToMany(
            mappedBy = "loja",
            cascade = ALL
    )
    private List<Game> games = new ArrayList<Game>();

    public Loja(String nome) {
        this.nome = nome;
    }

    public Loja() {
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
}
