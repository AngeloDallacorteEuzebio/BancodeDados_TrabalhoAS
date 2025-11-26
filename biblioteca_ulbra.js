// Script de seed MongoDB - Biblioteca-ULBRA (dados em português, ids numéricos)


db.autores.insertMany([
  {
    "id": 1,
    "nome": "Érico Veríssimo"
  },
  {
    "id": 2,
    "nome": "Moacyr Scliar"
  },
  {
    "id": 3,
    "nome": "Caio Fernando Abreu"
  },
  {
    "id": 4,
    "nome": "Lya Luft"
  },
  {
    "id": 5,
    "nome": "Luis Fernando Veríssimo"
  },
  {
    "id": 6,
    "nome": "Martha Medeiros"
  },
  {
    "id": 7,
    "nome": "Dulce Montello"
  },
  {
    "id": 8,
    "nome": "Ricardo Ramos"
  },
  {
    "id": 9,
    "nome": "Ana Paula Maia"
  },
  {
    "id": 10,
    "nome": "João do Rio Grande"
  }
]);

db.editoras.insertMany([
  {
    "id": 1,
    "nome": "Editora UFRGS"
  },
  {
    "id": 2,
    "nome": "L&PM Editores"
  },
  {
    "id": 3,
    "nome": "Editora Sulina"
  },
  {
    "id": 4,
    "nome": "Editora Mercado"
  },
  {
    "id": 5,
    "nome": "Editora da Casa do Poeta"
  }
]);

db.categorias.insertMany([
  {
    "id": 1,
    "nome": "Ficção"
  },
  {
    "id": 2,
    "nome": "Romance"
  },
  {
    "id": 3,
    "nome": "Contos"
  },
  {
    "id": 4,
    "nome": "Ensaios"
  },
  {
    "id": 5,
    "nome": "Biografia"
  },
  {
    "id": 6,
    "nome": "Infantojuvenil"
  }
]);

db.livros.insertMany([
  {
    "id": 1,
    "titulo": "Histórias do Sul 1",
    "isbn": "97885001001",
    "ano": 2011,
    "editora_id": 2,
    "categoria_id": 4,
    "autores": [
      {
        "id_autor": 6,
        "nome": "Martha Medeiros"
      }
    ],
    "resumo": "Coletânea de textos relacionados às tradições e histórias do Rio Grande do Sul (volume 1).",
    "criado_em": "2025-11-26"
  },
  {
    "id": 2,
    "titulo": "Érico - Coletânea 2",
    "isbn": "97885001002",
    "ano": 1976,
    "editora_id": 1,
    "categoria_id": 5,
    "autores": [
      {
        "id_autor": 1,
        "nome": "Érico Veríssimo"
      }
    ],
    "resumo": "Coletânea de textos relacionados às tradições e histórias do Rio Grande do Sul (volume 2).",
    "criado_em": "2025-11-26"
  },
  {
    "id": 3,
    "titulo": "Histórias do Sul 3",
    "isbn": "97885001003",
    "ano": 2002,
    "editora_id": 5,
    "categoria_id": 1,
    "autores": [
      {
        "id_autor": 6,
        "nome": "Martha Medeiros"
      }
    ],
    "resumo": "Coletânea de textos relacionados às tradições e histórias do Rio Grande do Sul (volume 3).",
    "criado_em": "2025-11-26"
  },
  {
    "id": 4,
    "titulo": "Lya - Coletânea 4",
    "isbn": "97885001004",
    "ano": 1997,
    "editora_id": 1,
    "categoria_id": 1,
    "autores": [
      {
        "id_autor": 4,
        "nome": "Lya Luft"
      }
    ],
    "resumo": "Coletânea de textos relacionados às tradições e histórias do Rio Grande do Sul (volume 4).",
    "criado_em": "2025-11-26"
  },
  {
    "id": 5,
    "titulo": "Histórias do Sul 5",
    "isbn": "97885001005",
    "ano": 2002,
    "editora_id": 1,
    "categoria_id": 2,
    "autores": [
      {
        "id_autor": 7,
        "nome": "Dulce Montello"
      }
    ],
    "resumo": "Coletânea de textos relacionados às tradições e histórias do Rio Grande do Sul (volume 5).",
    "criado_em": "2025-11-26"
  },
  {
    "id": 6,
    "titulo": "Ana - Coletânea 6",
    "isbn": "97885001006",
    "ano": 2018,
    "editora_id": 4,
    "categoria_id": 1,
    "autores": [
      {
        "id_autor": 9,
        "nome": "Ana Paula Maia"
      }
    ],
    "resumo": "Coletânea de textos relacionados às tradições e histórias do Rio Grande do Sul (volume 6).",
    "criado_em": "2025-11-26"
  },
  {
    "id": 7,
    "titulo": "Histórias do Sul 7",
    "isbn": "97885001007",
    "ano": 2010,
    "editora_id": 2,
    "categoria_id": 6,
    "autores": [
      {
        "id_autor": 2,
        "nome": "Moacyr Scliar"
      }
    ],
    "resumo": "Coletânea de textos relacionados às tradições e histórias do Rio Grande do Sul (volume 7).",
    "criado_em": "2025-11-26"
  },
  {
    "id": 8,
    "titulo": "João - Coletânea 8",
    "isbn": "97885001008",
    "ano": 2018,
    "editora_id": 1,
    "categoria_id": 5,
    "autores": [
      {
        "id_autor": 10,
        "nome": "João do Rio Grande"
      }
    ],
    "resumo": "Coletânea de textos relacionados às tradições e histórias do Rio Grande do Sul (volume 8).",
    "criado_em": "2025-11-26"
  },
  {
    "id": 9,
    "titulo": "Histórias do Sul 9",
    "isbn": "97885001009",
    "ano": 2001,
    "editora_id": 1,
    "categoria_id": 2,
    "autores": [
      {
        "id_autor": 7,
        "nome": "Dulce Montello"
      }
    ],
    "resumo": "Coletânea de textos relacionados às tradições e histórias do Rio Grande do Sul (volume 9).",
    "criado_em": "2025-11-26"
  },
  {
    "id": 10,
    "titulo": "Ana - Coletânea 10",
    "isbn": "97885001010",
    "ano": 2013,
    "editora_id": 2,
    "categoria_id": 3,
    "autores": [
      {
        "id_autor": 9,
        "nome": "Ana Paula Maia"
      }
    ],
    "resumo": "Coletânea de textos relacionados às tradições e histórias do Rio Grande do Sul (volume 10).",
    "criado_em": "2025-11-26"
  },
  {
    "id": 11,
    "titulo": "Histórias do Sul 11",
    "isbn": "97885001011",
    "ano": 2006,
    "editora_id": 5,
    "categoria_id": 1,
    "autores": [
      {
        "id_autor": 3,
        "nome": "Caio Fernando Abreu"
      }
    ],
    "resumo": "Coletânea de textos relacionados às tradições e histórias do Rio Grande do Sul (volume 11).",
    "criado_em": "2025-11-26"
  },
  {
    "id": 12,
    "titulo": "Luis - Coletânea 12",
    "isbn": "97885001012",
    "ano": 1981,
    "editora_id": 5,
    "categoria_id": 6,
    "autores": [
      {
        "id_autor": 5,
        "nome": "Luis Fernando Veríssimo"
      }
    ],
    "resumo": "Coletânea de textos relacionados às tradições e histórias do Rio Grande do Sul (volume 12).",
    "criado_em": "2025-11-26"
  },
  {
    "id": 13,
    "titulo": "Histórias do Sul 13",
    "isbn": "97885001013",
    "ano": 2010,
    "editora_id": 5,
    "categoria_id": 5,
    "autores": [
      {
        "id_autor": 2,
        "nome": "Moacyr Scliar"
      }
    ],
    "resumo": "Coletânea de textos relacionados às tradições e histórias do Rio Grande do Sul (volume 13).",
    "criado_em": "2025-11-26"
  },
  {
    "id": 14,
    "titulo": "Lya - Coletânea 14",
    "isbn": "97885001014",
    "ano": 2005,
    "editora_id": 3,
    "categoria_id": 1,
    "autores": [
      {
        "id_autor": 4,
        "nome": "Lya Luft"
      }
    ],
    "resumo": "Coletânea de textos relacionados às tradições e histórias do Rio Grande do Sul (volume 14).",
    "criado_em": "2025-11-26"
  },
  {
    "id": 15,
    "titulo": "Histórias do Sul 15",
    "isbn": "97885001015",
    "ano": 2009,
    "editora_id": 5,
    "categoria_id": 1,
    "autores": [
      {
        "id_autor": 2,
        "nome": "Moacyr Scliar"
      }
    ],
    "resumo": "Coletânea de textos relacionados às tradições e histórias do Rio Grande do Sul (volume 15).",
    "criado_em": "2025-11-26"
  },
  {
    "id": 16,
    "titulo": "Lya - Coletânea 16",
    "isbn": "97885001016",
    "ano": 2004,
    "editora_id": 4,
    "categoria_id": 6,
    "autores": [
      {
        "id_autor": 4,
        "nome": "Lya Luft"
      }
    ],
    "resumo": "Coletânea de textos relacionados às tradições e histórias do Rio Grande do Sul (volume 16).",
    "criado_em": "2025-11-26"
  },
  {
    "id": 17,
    "titulo": "Histórias do Sul 17",
    "isbn": "97885001017",
    "ano": 2018,
    "editora_id": 3,
    "categoria_id": 4,
    "autores": [
      {
        "id_autor": 7,
        "nome": "Dulce Montello"
      }
    ],
    "resumo": "Coletânea de textos relacionados às tradições e histórias do Rio Grande do Sul (volume 17).",
    "criado_em": "2025-11-26"
  },
  {
    "id": 18,
    "titulo": "Ricardo - Coletânea 18",
    "isbn": "97885001018",
    "ano": 2007,
    "editora_id": 3,
    "categoria_id": 3,
    "autores": [
      {
        "id_autor": 8,
        "nome": "Ricardo Ramos"
      }
    ],
    "resumo": "Coletânea de textos relacionados às tradições e histórias do Rio Grande do Sul (volume 18).",
    "criado_em": "2025-11-26"
  },
  {
    "id": 19,
    "titulo": "Histórias do Sul 19",
    "isbn": "97885001019",
    "ano": 2006,
    "editora_id": 2,
    "categoria_id": 1,
    "autores": [
      {
        "id_autor": 3,
        "nome": "Caio Fernando Abreu"
      }
    ],
    "resumo": "Coletânea de textos relacionados às tradições e histórias do Rio Grande do Sul (volume 19).",
    "criado_em": "2025-11-26"
  },
  {
    "id": 20,
    "titulo": "Luis - Coletânea 20",
    "isbn": "97885001020",
    "ano": 1991,
    "editora_id": 5,
    "categoria_id": 4,
    "autores": [
      {
        "id_autor": 5,
        "nome": "Luis Fernando Veríssimo"
      }
    ],
    "resumo": "Coletânea de textos relacionados às tradições e histórias do Rio Grande do Sul (volume 20).",
    "criado_em": "2025-11-26"
  }
]);

db.exemplares.insertMany([
  {
    "id": 1,
    "livro_id": 1,
    "codigo_de_barras": "BC2001",
    "data_aquisicao": "2023-04-22",
    "condicao": "Regular",
    "status": "disponivel"
  },
  {
    "id": 2,
    "livro_id": 1,
    "codigo_de_barras": "BC2002",
    "data_aquisicao": "2025-05-31",
    "condicao": "Bom",
    "status": "disponivel"
  },
  {
    "id": 3,
    "livro_id": 1,
    "codigo_de_barras": "BC2003",
    "data_aquisicao": "2024-11-24",
    "condicao": "Regular",
    "status": "emprestado"
  },
  {
    "id": 4,
    "livro_id": 1,
    "codigo_de_barras": "BC2004",
    "data_aquisicao": "2023-01-30",
    "condicao": "Regular",
    "status": "emprestado"
  },
  {
    "id": 5,
    "livro_id": 2,
    "codigo_de_barras": "BC2005",
    "data_aquisicao": "2025-05-22",
    "condicao": "Ruim",
    "status": "disponivel"
  },
  {
    "id": 6,
    "livro_id": 2,
    "codigo_de_barras": "BC2006",
    "data_aquisicao": "2020-11-30",
    "condicao": "Regular",
    "status": "emprestado"
  },
  {
    "id": 7,
    "livro_id": 2,
    "codigo_de_barras": "BC2007",
    "data_aquisicao": "2023-11-10",
    "condicao": "Ruim",
    "status": "disponivel"
  },
  {
    "id": 8,
    "livro_id": 2,
    "codigo_de_barras": "BC2008",
    "data_aquisicao": "2021-05-09",
    "condicao": "Regular",
    "status": "emprestado"
  },
  {
    "id": 9,
    "livro_id": 3,
    "codigo_de_barras": "BC2009",
    "data_aquisicao": "2020-07-11",
    "condicao": "Regular",
    "status": "disponivel"
  },
  {
    "id": 10,
    "livro_id": 3,
    "codigo_de_barras": "BC2010",
    "data_aquisicao": "2022-02-05",
    "condicao": "Bom",
    "status": "emprestado"
  },
  {
    "id": 11,
    "livro_id": 4,
    "codigo_de_barras": "BC2011",
    "data_aquisicao": "2024-02-01",
    "condicao": "Ruim",
    "status": "emprestado"
  },
  {
    "id": 12,
    "livro_id": 4,
    "codigo_de_barras": "BC2012",
    "data_aquisicao": "2022-01-01",
    "condicao": "Regular",
    "status": "disponivel"
  },
  {
    "id": 13,
    "livro_id": 4,
    "codigo_de_barras": "BC2013",
    "data_aquisicao": "2023-08-29",
    "condicao": "Ruim",
    "status": "disponivel"
  },
  {
    "id": 14,
    "livro_id": 4,
    "codigo_de_barras": "BC2014",
    "data_aquisicao": "2020-07-19",
    "condicao": "Regular",
    "status": "emprestado"
  },
  {
    "id": 15,
    "livro_id": 5,
    "codigo_de_barras": "BC2015",
    "data_aquisicao": "2025-03-02",
    "condicao": "Regular",
    "status": "emprestado"
  },
  {
    "id": 16,
    "livro_id": 5,
    "codigo_de_barras": "BC2016",
    "data_aquisicao": "2021-07-07",
    "condicao": "Regular",
    "status": "emprestado"
  },
  {
    "id": 17,
    "livro_id": 5,
    "codigo_de_barras": "BC2017",
    "data_aquisicao": "2024-06-07",
    "condicao": "Regular",
    "status": "emprestado"
  },
  {
    "id": 18,
    "livro_id": 5,
    "codigo_de_barras": "BC2018",
    "data_aquisicao": "2020-12-08",
    "condicao": "Regular",
    "status": "emprestado"
  },
  {
    "id": 19,
    "livro_id": 6,
    "codigo_de_barras": "BC2019",
    "data_aquisicao": "2023-07-28",
    "condicao": "Ruim",
    "status": "disponivel"
  },
  {
    "id": 20,
    "livro_id": 6,
    "codigo_de_barras": "BC2020",
    "data_aquisicao": "2025-01-20",
    "condicao": "Regular",
    "status": "emprestado"
  },
  {
    "id": 21,
    "livro_id": 6,
    "codigo_de_barras": "BC2021",
    "data_aquisicao": "2024-04-05",
    "condicao": "Ruim",
    "status": "emprestado"
  },
  {
    "id": 22,
    "livro_id": 7,
    "codigo_de_barras": "BC2022",
    "data_aquisicao": "2021-12-29",
    "condicao": "Regular",
    "status": "disponivel"
  },
  {
    "id": 23,
    "livro_id": 7,
    "codigo_de_barras": "BC2023",
    "data_aquisicao": "2024-12-22",
    "condicao": "Bom",
    "status": "emprestado"
  },
  {
    "id": 24,
    "livro_id": 7,
    "codigo_de_barras": "BC2024",
    "data_aquisicao": "2024-07-09",
    "condicao": "Ruim",
    "status": "emprestado"
  },
  {
    "id": 25,
    "livro_id": 8,
    "codigo_de_barras": "BC2025",
    "data_aquisicao": "2021-02-28",
    "condicao": "Ruim",
    "status": "emprestado"
  },
  {
    "id": 26,
    "livro_id": 8,
    "codigo_de_barras": "BC2026",
    "data_aquisicao": "2024-03-29",
    "condicao": "Bom",
    "status": "emprestado"
  },
  {
    "id": 27,
    "livro_id": 8,
    "codigo_de_barras": "BC2027",
    "data_aquisicao": "2022-10-29",
    "condicao": "Regular",
    "status": "disponivel"
  },
  {
    "id": 28,
    "livro_id": 9,
    "codigo_de_barras": "BC2028",
    "data_aquisicao": "2020-06-24",
    "condicao": "Bom",
    "status": "disponivel"
  },
  {
    "id": 29,
    "livro_id": 9,
    "codigo_de_barras": "BC2029",
    "data_aquisicao": "2022-12-07",
    "condicao": "Ruim",
    "status": "emprestado"
  },
  {
    "id": 30,
    "livro_id": 9,
    "codigo_de_barras": "BC2030",
    "data_aquisicao": "2021-09-03",
    "condicao": "Bom",
    "status": "emprestado"
  },
  {
    "id": 31,
    "livro_id": 10,
    "codigo_de_barras": "BC2031",
    "data_aquisicao": "2021-05-07",
    "condicao": "Ruim",
    "status": "disponivel"
  },
  {
    "id": 32,
    "livro_id": 10,
    "codigo_de_barras": "BC2032",
    "data_aquisicao": "2023-08-02",
    "condicao": "Regular",
    "status": "emprestado"
  },
  {
    "id": 33,
    "livro_id": 10,
    "codigo_de_barras": "BC2033",
    "data_aquisicao": "2022-04-07",
    "condicao": "Regular",
    "status": "emprestado"
  },
  {
    "id": 34,
    "livro_id": 10,
    "codigo_de_barras": "BC2034",
    "data_aquisicao": "2025-06-12",
    "condicao": "Bom",
    "status": "disponivel"
  },
  {
    "id": 35,
    "livro_id": 11,
    "codigo_de_barras": "BC2035",
    "data_aquisicao": "2023-12-01",
    "condicao": "Ruim",
    "status": "emprestado"
  },
  {
    "id": 36,
    "livro_id": 11,
    "codigo_de_barras": "BC2036",
    "data_aquisicao": "2025-10-27",
    "condicao": "Ruim",
    "status": "emprestado"
  },
  {
    "id": 37,
    "livro_id": 12,
    "codigo_de_barras": "BC2037",
    "data_aquisicao": "2020-07-02",
    "condicao": "Regular",
    "status": "disponivel"
  },
  {
    "id": 38,
    "livro_id": 12,
    "codigo_de_barras": "BC2038",
    "data_aquisicao": "2025-06-05",
    "condicao": "Bom",
    "status": "disponivel"
  },
  {
    "id": 39,
    "livro_id": 13,
    "codigo_de_barras": "BC2039",
    "data_aquisicao": "2022-04-07",
    "condicao": "Regular",
    "status": "disponivel"
  },
  {
    "id": 40,
    "livro_id": 13,
    "codigo_de_barras": "BC2040",
    "data_aquisicao": "2022-06-12",
    "condicao": "Regular",
    "status": "disponivel"
  },
  {
    "id": 41,
    "livro_id": 14,
    "codigo_de_barras": "BC2041",
    "data_aquisicao": "2021-01-23",
    "condicao": "Regular",
    "status": "disponivel"
  },
  {
    "id": 42,
    "livro_id": 14,
    "codigo_de_barras": "BC2042",
    "data_aquisicao": "2023-03-18",
    "condicao": "Regular",
    "status": "disponivel"
  },
  {
    "id": 43,
    "livro_id": 15,
    "codigo_de_barras": "BC2043",
    "data_aquisicao": "2025-01-05",
    "condicao": "Bom",
    "status": "emprestado"
  },
  {
    "id": 44,
    "livro_id": 15,
    "codigo_de_barras": "BC2044",
    "data_aquisicao": "2021-09-02",
    "condicao": "Regular",
    "status": "emprestado"
  },
  {
    "id": 45,
    "livro_id": 16,
    "codigo_de_barras": "BC2045",
    "data_aquisicao": "2024-12-01",
    "condicao": "Ruim",
    "status": "emprestado"
  },
  {
    "id": 46,
    "livro_id": 16,
    "codigo_de_barras": "BC2046",
    "data_aquisicao": "2020-06-28",
    "condicao": "Ruim",
    "status": "disponivel"
  },
  {
    "id": 47,
    "livro_id": 16,
    "codigo_de_barras": "BC2047",
    "data_aquisicao": "2021-12-14",
    "condicao": "Ruim",
    "status": "emprestado"
  },
  {
    "id": 48,
    "livro_id": 16,
    "codigo_de_barras": "BC2048",
    "data_aquisicao": "2021-07-28",
    "condicao": "Ruim",
    "status": "emprestado"
  },
  {
    "id": 49,
    "livro_id": 17,
    "codigo_de_barras": "BC2049",
    "data_aquisicao": "2020-12-24",
    "condicao": "Bom",
    "status": "disponivel"
  },
  {
    "id": 50,
    "livro_id": 17,
    "codigo_de_barras": "BC2050",
    "data_aquisicao": "2024-05-11",
    "condicao": "Ruim",
    "status": "emprestado"
  },
  {
    "id": 51,
    "livro_id": 17,
    "codigo_de_barras": "BC2051",
    "data_aquisicao": "2024-11-19",
    "condicao": "Regular",
    "status": "disponivel"
  },
  {
    "id": 52,
    "livro_id": 17,
    "codigo_de_barras": "BC2052",
    "data_aquisicao": "2022-11-02",
    "condicao": "Ruim",
    "status": "emprestado"
  },
  {
    "id": 53,
    "livro_id": 18,
    "codigo_de_barras": "BC2053",
    "data_aquisicao": "2022-04-03",
    "condicao": "Bom",
    "status": "disponivel"
  },
  {
    "id": 54,
    "livro_id": 18,
    "codigo_de_barras": "BC2054",
    "data_aquisicao": "2021-05-27",
    "condicao": "Bom",
    "status": "disponivel"
  },
  {
    "id": 55,
    "livro_id": 18,
    "codigo_de_barras": "BC2055",
    "data_aquisicao": "2021-03-27",
    "condicao": "Regular",
    "status": "disponivel"
  },
  {
    "id": 56,
    "livro_id": 19,
    "codigo_de_barras": "BC2056",
    "data_aquisicao": "2024-09-13",
    "condicao": "Ruim",
    "status": "disponivel"
  },
  {
    "id": 57,
    "livro_id": 19,
    "codigo_de_barras": "BC2057",
    "data_aquisicao": "2021-09-21",
    "condicao": "Bom",
    "status": "emprestado"
  },
  {
    "id": 58,
    "livro_id": 20,
    "codigo_de_barras": "BC2058",
    "data_aquisicao": "2023-03-05",
    "condicao": "Regular",
    "status": "emprestado"
  },
  {
    "id": 59,
    "livro_id": 20,
    "codigo_de_barras": "BC2059",
    "data_aquisicao": "2022-06-06",
    "condicao": "Regular",
    "status": "disponivel"
  },
  {
    "id": 60,
    "livro_id": 20,
    "codigo_de_barras": "BC2060",
    "data_aquisicao": "2020-07-26",
    "condicao": "Ruim",
    "status": "disponivel"
  }
]);

db.membros.insertMany([
  {
    "id": 1,
    "nome": "Ana Souza",
    "email": "ana1@rsmail.com",
    "telefone": "(51)99082-4612",
    "data_registro": "2025-05-01",
    "ativo": true,
    "tipo_membro": "estudante"
  },
  {
    "id": 2,
    "nome": "João Alves",
    "email": "joão2@rsmail.com",
    "telefone": "(51)99201-6533",
    "data_registro": "2024-10-04",
    "ativo": true,
    "tipo_membro": "professor"
  },
  {
    "id": 3,
    "nome": "Mariana Fernandes",
    "email": "mariana3@rsmail.com",
    "telefone": "(51)99921-1031",
    "data_registro": "2023-03-21",
    "ativo": true,
    "tipo_membro": "externo"
  },
  {
    "id": 4,
    "nome": "Carlos Souza",
    "email": "carlos4@rsmail.com",
    "telefone": "(51)99818-2389",
    "data_registro": "2021-03-23",
    "ativo": true,
    "tipo_membro": "externo"
  },
  {
    "id": 5,
    "nome": "Fernanda Silva",
    "email": "fernanda5@rsmail.com",
    "telefone": "(51)99931-7365",
    "data_registro": "2021-07-08",
    "ativo": true,
    "tipo_membro": "externo"
  },
  {
    "id": 6,
    "nome": "Pedro Ramos",
    "email": "pedro6@rsmail.com",
    "telefone": "(51)99204-8832",
    "data_registro": "2020-12-02",
    "ativo": true,
    "tipo_membro": "estudante"
  },
  {
    "id": 7,
    "nome": "Lucia Alves",
    "email": "lucia7@rsmail.com",
    "telefone": "(51)99808-6447",
    "data_registro": "2025-06-02",
    "ativo": true,
    "tipo_membro": "externo"
  },
  {
    "id": 8,
    "nome": "Marcos Alves",
    "email": "marcos8@rsmail.com",
    "telefone": "(51)99474-7576",
    "data_registro": "2021-09-26",
    "ativo": true,
    "tipo_membro": "estudante"
  },
  {
    "id": 9,
    "nome": "Rita Costa",
    "email": "rita9@rsmail.com",
    "telefone": "(51)99162-3785",
    "data_registro": "2025-03-11",
    "ativo": true,
    "tipo_membro": "estudante"
  },
  {
    "id": 10,
    "nome": "Henrique Pereira",
    "email": "henrique10@rsmail.com",
    "telefone": "(51)99604-8624",
    "data_registro": "2021-05-20",
    "ativo": true,
    "tipo_membro": "externo"
  },
  {
    "id": 11,
    "nome": "Paula Pereira",
    "email": "paula11@rsmail.com",
    "telefone": "(51)99626-8771",
    "data_registro": "2022-03-21",
    "ativo": true,
    "tipo_membro": "professor"
  },
  {
    "id": 12,
    "nome": "Ricardo Pereira",
    "email": "ricardo12@rsmail.com",
    "telefone": "(51)99561-9983",
    "data_registro": "2025-03-03",
    "ativo": true,
    "tipo_membro": "estudante"
  },
  {
    "id": 13,
    "nome": "Sofia Silva",
    "email": "sofia13@rsmail.com",
    "telefone": "(51)99818-2683",
    "data_registro": "2022-12-14",
    "ativo": true,
    "tipo_membro": "externo"
  },
  {
    "id": 14,
    "nome": "Mateus Pereira",
    "email": "mateus14@rsmail.com",
    "telefone": "(51)99444-4191",
    "data_registro": "2021-04-10",
    "ativo": true,
    "tipo_membro": "estudante"
  },
  {
    "id": 15,
    "nome": "Camila Silva",
    "email": "camila15@rsmail.com",
    "telefone": "(51)99257-4486",
    "data_registro": "2024-04-06",
    "ativo": true,
    "tipo_membro": "externo"
  },
  {
    "id": 16,
    "nome": "Bruno Pereira",
    "email": "bruno16@rsmail.com",
    "telefone": "(51)99782-6341",
    "data_registro": "2024-06-13",
    "ativo": true,
    "tipo_membro": "externo"
  },
  {
    "id": 17,
    "nome": "Gabriela Alves",
    "email": "gabriela17@rsmail.com",
    "telefone": "(51)99854-3147",
    "data_registro": "2025-07-25",
    "ativo": true,
    "tipo_membro": "externo"
  },
  {
    "id": 18,
    "nome": "Lucas Souza",
    "email": "lucas18@rsmail.com",
    "telefone": "(51)99919-8506",
    "data_registro": "2022-03-11",
    "ativo": true,
    "tipo_membro": "externo"
  },
  {
    "id": 19,
    "nome": "Mariana Ramos",
    "email": "mariana19@rsmail.com",
    "telefone": "(51)99925-9466",
    "data_registro": "2023-07-19",
    "ativo": true,
    "tipo_membro": "externo"
  },
  {
    "id": 20,
    "nome": "Eduardo Pereira",
    "email": "eduardo20@rsmail.com",
    "telefone": "(51)99544-3487",
    "data_registro": "2022-12-20",
    "ativo": true,
    "tipo_membro": "externo"
  },
  {
    "id": 21,
    "nome": "Beatriz Silva",
    "email": "beatriz21@rsmail.com",
    "telefone": "(51)99893-8211",
    "data_registro": "2021-07-20",
    "ativo": true,
    "tipo_membro": "estudante"
  },
  {
    "id": 22,
    "nome": "Rafael Fernandes",
    "email": "rafael22@rsmail.com",
    "telefone": "(51)99004-3454",
    "data_registro": "2024-12-09",
    "ativo": true,
    "tipo_membro": "estudante"
  },
  {
    "id": 23,
    "nome": "Laura Alves",
    "email": "laura23@rsmail.com",
    "telefone": "(51)99633-2971",
    "data_registro": "2022-10-14",
    "ativo": true,
    "tipo_membro": "estudante"
  },
  {
    "id": 24,
    "nome": "Tiago Souza",
    "email": "tiago24@rsmail.com",
    "telefone": "(51)99698-9492",
    "data_registro": "2022-12-06",
    "ativo": true,
    "tipo_membro": "externo"
  },
  {
    "id": 25,
    "nome": "Aline Alves",
    "email": "aline25@rsmail.com",
    "telefone": "(51)99803-2738",
    "data_registro": "2020-12-14",
    "ativo": true,
    "tipo_membro": "externo"
  },
  {
    "id": 26,
    "nome": "Marcos Silva",
    "email": "marcos26@rsmail.com",
    "telefone": "(51)99254-4134",
    "data_registro": "2024-05-08",
    "ativo": true,
    "tipo_membro": "estudante"
  },
  {
    "id": 27,
    "nome": "Livia Ramos",
    "email": "livia27@rsmail.com",
    "telefone": "(51)99100-9318",
    "data_registro": "2023-05-15",
    "ativo": true,
    "tipo_membro": "externo"
  },
  {
    "id": 28,
    "nome": "Bruna Silva",
    "email": "bruna28@rsmail.com",
    "telefone": "(51)99778-2038",
    "data_registro": "2023-06-03",
    "ativo": true,
    "tipo_membro": "professor"
  },
  {
    "id": 29,
    "nome": "Igor Fernandes",
    "email": "igor29@rsmail.com",
    "telefone": "(51)99996-9282",
    "data_registro": "2022-07-04",
    "ativo": true,
    "tipo_membro": "externo"
  },
  {
    "id": 30,
    "nome": "Alan Pereira",
    "email": "alan30@rsmail.com",
    "telefone": "(51)99709-5541",
    "data_registro": "2023-05-15",
    "ativo": true,
    "tipo_membro": "externo"
  }
]);

db.funcionarios.insertMany([
  {
    "id": 1,
    "nome": "Mariana Pires",
    "email": "mariana@biblioteca.rs",
    "cargo": "Atendente"
  },
  {
    "id": 2,
    "nome": "João Pires",
    "email": "joão@biblioteca.rs",
    "cargo": "Bibliotecário"
  },
  {
    "id": 3,
    "nome": "Paula Pires",
    "email": "paula@biblioteca.rs",
    "cargo": "Atendente"
  },
  {
    "id": 4,
    "nome": "Carlos Pires",
    "email": "carlos@biblioteca.rs",
    "cargo": "Bibliotecário"
  },
  {
    "id": 5,
    "nome": "Fernanda Almeida",
    "email": "fernanda@biblioteca.rs",
    "cargo": "Bibliotecário"
  },
  {
    "id": 6,
    "nome": "Pedro Almeida",
    "email": "pedro@biblioteca.rs",
    "cargo": "Bibliotecário"
  }
]);

db.emprestimos.insertMany([
  {
    "id": 1,
    "exemplar_id": 26,
    "membro_id": 15,
    "funcionario_saida_id": 2,
    "funcionario_entrada_id": null,
    "data_emprestimo": "2025-10-17",
    "data_devolucao_prevista": "2025-10-31",
    "data_devolucao": null,
    "multa": 0.0,
    "status": "em_andamento"
  },
  {
    "id": 2,
    "exemplar_id": 28,
    "membro_id": 3,
    "funcionario_saida_id": 6,
    "funcionario_entrada_id": 6,
    "data_emprestimo": "2025-10-30",
    "data_devolucao_prevista": "2025-11-13",
    "data_devolucao": "2025-11-16",
    "multa": 4.5,
    "status": "devolvido"
  },
  {
    "id": 3,
    "exemplar_id": 43,
    "membro_id": 12,
    "funcionario_saida_id": 2,
    "funcionario_entrada_id": null,
    "data_emprestimo": "2025-11-08",
    "data_devolucao_prevista": "2025-11-22",
    "data_devolucao": null,
    "multa": 0.0,
    "status": "em_andamento"
  },
  {
    "id": 4,
    "exemplar_id": 30,
    "membro_id": 8,
    "funcionario_saida_id": 4,
    "funcionario_entrada_id": null,
    "data_emprestimo": "2025-11-14",
    "data_devolucao_prevista": "2025-11-28",
    "data_devolucao": null,
    "multa": 0.0,
    "status": "em_andamento"
  },
  {
    "id": 5,
    "exemplar_id": 11,
    "membro_id": 22,
    "funcionario_saida_id": 4,
    "funcionario_entrada_id": null,
    "data_emprestimo": "2025-10-29",
    "data_devolucao_prevista": "2025-11-12",
    "data_devolucao": null,
    "multa": 0.0,
    "status": "em_andamento"
  },
  {
    "id": 6,
    "exemplar_id": 33,
    "membro_id": 13,
    "funcionario_saida_id": 3,
    "funcionario_entrada_id": null,
    "data_emprestimo": "2025-10-14",
    "data_devolucao_prevista": "2025-10-28",
    "data_devolucao": null,
    "multa": 0.0,
    "status": "em_andamento"
  },
  {
    "id": 7,
    "exemplar_id": 21,
    "membro_id": 3,
    "funcionario_saida_id": 5,
    "funcionario_entrada_id": null,
    "data_emprestimo": "2025-10-11",
    "data_devolucao_prevista": "2025-10-25",
    "data_devolucao": null,
    "multa": 0.0,
    "status": "em_andamento"
  },
  {
    "id": 8,
    "exemplar_id": 30,
    "membro_id": 15,
    "funcionario_saida_id": 5,
    "funcionario_entrada_id": null,
    "data_emprestimo": "2025-11-24",
    "data_devolucao_prevista": "2025-12-08",
    "data_devolucao": null,
    "multa": 0.0,
    "status": "em_andamento"
  },
  {
    "id": 9,
    "exemplar_id": 40,
    "membro_id": 10,
    "funcionario_saida_id": 2,
    "funcionario_entrada_id": 1,
    "data_emprestimo": "2025-09-22",
    "data_devolucao_prevista": "2025-10-06",
    "data_devolucao": "2025-10-05",
    "multa": 0.0,
    "status": "devolvido"
  },
  {
    "id": 10,
    "exemplar_id": 6,
    "membro_id": 9,
    "funcionario_saida_id": 2,
    "funcionario_entrada_id": null,
    "data_emprestimo": "2025-10-23",
    "data_devolucao_prevista": "2025-11-06",
    "data_devolucao": null,
    "multa": 0.0,
    "status": "em_andamento"
  },
  {
    "id": 11,
    "exemplar_id": 18,
    "membro_id": 25,
    "funcionario_saida_id": 3,
    "funcionario_entrada_id": 4,
    "data_emprestimo": "2025-11-10",
    "data_devolucao_prevista": "2025-11-24",
    "data_devolucao": "2025-12-05",
    "multa": 16.5,
    "status": "devolvido"
  },
  {
    "id": 12,
    "exemplar_id": 10,
    "membro_id": 18,
    "funcionario_saida_id": 3,
    "funcionario_entrada_id": 1,
    "data_emprestimo": "2025-09-22",
    "data_devolucao_prevista": "2025-10-06",
    "data_devolucao": "2025-10-08",
    "multa": 3.0,
    "status": "devolvido"
  },
  {
    "id": 13,
    "exemplar_id": 52,
    "membro_id": 23,
    "funcionario_saida_id": 1,
    "funcionario_entrada_id": null,
    "data_emprestimo": "2025-11-03",
    "data_devolucao_prevista": "2025-11-17",
    "data_devolucao": null,
    "multa": 0.0,
    "status": "em_andamento"
  },
  {
    "id": 14,
    "exemplar_id": 18,
    "membro_id": 1,
    "funcionario_saida_id": 2,
    "funcionario_entrada_id": 1,
    "data_emprestimo": "2025-11-15",
    "data_devolucao_prevista": "2025-11-29",
    "data_devolucao": "2025-11-29",
    "multa": 0.0,
    "status": "devolvido"
  },
  {
    "id": 15,
    "exemplar_id": 17,
    "membro_id": 28,
    "funcionario_saida_id": 4,
    "funcionario_entrada_id": 3,
    "data_emprestimo": "2025-11-11",
    "data_devolucao_prevista": "2025-11-25",
    "data_devolucao": "2025-12-04",
    "multa": 13.5,
    "status": "devolvido"
  },
  {
    "id": 16,
    "exemplar_id": 40,
    "membro_id": 5,
    "funcionario_saida_id": 2,
    "funcionario_entrada_id": 3,
    "data_emprestimo": "2025-11-21",
    "data_devolucao_prevista": "2025-12-05",
    "data_devolucao": "2025-12-07",
    "multa": 3.0,
    "status": "devolvido"
  },
  {
    "id": 17,
    "exemplar_id": 4,
    "membro_id": 6,
    "funcionario_saida_id": 2,
    "funcionario_entrada_id": 3,
    "data_emprestimo": "2025-11-01",
    "data_devolucao_prevista": "2025-11-15",
    "data_devolucao": "2025-11-24",
    "multa": 13.5,
    "status": "devolvido"
  },
  {
    "id": 18,
    "exemplar_id": 29,
    "membro_id": 17,
    "funcionario_saida_id": 1,
    "funcionario_entrada_id": null,
    "data_emprestimo": "2025-11-04",
    "data_devolucao_prevista": "2025-11-18",
    "data_devolucao": null,
    "multa": 0.0,
    "status": "em_andamento"
  },
  {
    "id": 19,
    "exemplar_id": 17,
    "membro_id": 2,
    "funcionario_saida_id": 5,
    "funcionario_entrada_id": null,
    "data_emprestimo": "2025-11-25",
    "data_devolucao_prevista": "2025-12-09",
    "data_devolucao": null,
    "multa": 0.0,
    "status": "em_andamento"
  },
  {
    "id": 20,
    "exemplar_id": 36,
    "membro_id": 7,
    "funcionario_saida_id": 6,
    "funcionario_entrada_id": 6,
    "data_emprestimo": "2025-09-22",
    "data_devolucao_prevista": "2025-10-06",
    "data_devolucao": "2025-10-08",
    "multa": 3.0,
    "status": "devolvido"
  },
  {
    "id": 21,
    "exemplar_id": 28,
    "membro_id": 22,
    "funcionario_saida_id": 3,
    "funcionario_entrada_id": 6,
    "data_emprestimo": "2025-09-24",
    "data_devolucao_prevista": "2025-10-08",
    "data_devolucao": "2025-10-17",
    "multa": 13.5,
    "status": "devolvido"
  },
  {
    "id": 22,
    "exemplar_id": 14,
    "membro_id": 8,
    "funcionario_saida_id": 6,
    "funcionario_entrada_id": null,
    "data_emprestimo": "2025-10-14",
    "data_devolucao_prevista": "2025-10-28",
    "data_devolucao": null,
    "multa": 0.0,
    "status": "em_andamento"
  },
  {
    "id": 23,
    "exemplar_id": 47,
    "membro_id": 21,
    "funcionario_saida_id": 3,
    "funcionario_entrada_id": null,
    "data_emprestimo": "2025-11-09",
    "data_devolucao_prevista": "2025-11-23",
    "data_devolucao": null,
    "multa": 0.0,
    "status": "em_andamento"
  },
  {
    "id": 24,
    "exemplar_id": 4,
    "membro_id": 27,
    "funcionario_saida_id": 6,
    "funcionario_entrada_id": null,
    "data_emprestimo": "2025-11-10",
    "data_devolucao_prevista": "2025-11-24",
    "data_devolucao": null,
    "multa": 0.0,
    "status": "em_andamento"
  },
  {
    "id": 25,
    "exemplar_id": 48,
    "membro_id": 29,
    "funcionario_saida_id": 1,
    "funcionario_entrada_id": null,
    "data_emprestimo": "2025-10-25",
    "data_devolucao_prevista": "2025-11-08",
    "data_devolucao": null,
    "multa": 0.0,
    "status": "em_andamento"
  },
  {
    "id": 26,
    "exemplar_id": 6,
    "membro_id": 22,
    "funcionario_saida_id": 5,
    "funcionario_entrada_id": 2,
    "data_emprestimo": "2025-10-09",
    "data_devolucao_prevista": "2025-10-23",
    "data_devolucao": "2025-10-28",
    "multa": 7.5,
    "status": "devolvido"
  },
  {
    "id": 27,
    "exemplar_id": 45,
    "membro_id": 10,
    "funcionario_saida_id": 1,
    "funcionario_entrada_id": 3,
    "data_emprestimo": "2025-11-21",
    "data_devolucao_prevista": "2025-12-05",
    "data_devolucao": "2025-11-29",
    "multa": 0.0,
    "status": "devolvido"
  },
  {
    "id": 28,
    "exemplar_id": 24,
    "membro_id": 11,
    "funcionario_saida_id": 1,
    "funcionario_entrada_id": null,
    "data_emprestimo": "2025-09-17",
    "data_devolucao_prevista": "2025-10-01",
    "data_devolucao": null,
    "multa": 0.0,
    "status": "em_andamento"
  },
  {
    "id": 29,
    "exemplar_id": 57,
    "membro_id": 10,
    "funcionario_saida_id": 1,
    "funcionario_entrada_id": null,
    "data_emprestimo": "2025-10-30",
    "data_devolucao_prevista": "2025-11-13",
    "data_devolucao": null,
    "multa": 0.0,
    "status": "em_andamento"
  },
  {
    "id": 30,
    "exemplar_id": 22,
    "membro_id": 13,
    "funcionario_saida_id": 2,
    "funcionario_entrada_id": 5,
    "data_emprestimo": "2025-11-16",
    "data_devolucao_prevista": "2025-11-30",
    "data_devolucao": "2025-12-04",
    "multa": 6.0,
    "status": "devolvido"
  },
  {
    "id": 31,
    "exemplar_id": 50,
    "membro_id": 1,
    "funcionario_saida_id": 1,
    "funcionario_entrada_id": null,
    "data_emprestimo": "2025-11-15",
    "data_devolucao_prevista": "2025-11-29",
    "data_devolucao": null,
    "multa": 0.0,
    "status": "em_andamento"
  },
  {
    "id": 32,
    "exemplar_id": 10,
    "membro_id": 13,
    "funcionario_saida_id": 1,
    "funcionario_entrada_id": null,
    "data_emprestimo": "2025-09-12",
    "data_devolucao_prevista": "2025-09-26",
    "data_devolucao": null,
    "multa": 0.0,
    "status": "em_andamento"
  },
  {
    "id": 33,
    "exemplar_id": 20,
    "membro_id": 10,
    "funcionario_saida_id": 5,
    "funcionario_entrada_id": null,
    "data_emprestimo": "2025-09-07",
    "data_devolucao_prevista": "2025-09-21",
    "data_devolucao": null,
    "multa": 0.0,
    "status": "em_andamento"
  },
  {
    "id": 34,
    "exemplar_id": 34,
    "membro_id": 28,
    "funcionario_saida_id": 4,
    "funcionario_entrada_id": 3,
    "data_emprestimo": "2025-11-07",
    "data_devolucao_prevista": "2025-11-21",
    "data_devolucao": "2025-12-01",
    "multa": 15.0,
    "status": "devolvido"
  },
  {
    "id": 35,
    "exemplar_id": 47,
    "membro_id": 16,
    "funcionario_saida_id": 5,
    "funcionario_entrada_id": null,
    "data_emprestimo": "2025-11-07",
    "data_devolucao_prevista": "2025-11-21",
    "data_devolucao": null,
    "multa": 0.0,
    "status": "em_andamento"
  },
  {
    "id": 36,
    "exemplar_id": 42,
    "membro_id": 5,
    "funcionario_saida_id": 6,
    "funcionario_entrada_id": 4,
    "data_emprestimo": "2025-11-21",
    "data_devolucao_prevista": "2025-12-05",
    "data_devolucao": "2025-12-14",
    "multa": 13.5,
    "status": "devolvido"
  },
  {
    "id": 37,
    "exemplar_id": 47,
    "membro_id": 23,
    "funcionario_saida_id": 5,
    "funcionario_entrada_id": null,
    "data_emprestimo": "2025-09-23",
    "data_devolucao_prevista": "2025-10-07",
    "data_devolucao": null,
    "multa": 0.0,
    "status": "em_andamento"
  },
  {
    "id": 38,
    "exemplar_id": 49,
    "membro_id": 17,
    "funcionario_saida_id": 5,
    "funcionario_entrada_id": 6,
    "data_emprestimo": "2025-09-15",
    "data_devolucao_prevista": "2025-09-29",
    "data_devolucao": "2025-10-10",
    "multa": 16.5,
    "status": "devolvido"
  },
  {
    "id": 39,
    "exemplar_id": 44,
    "membro_id": 23,
    "funcionario_saida_id": 1,
    "funcionario_entrada_id": null,
    "data_emprestimo": "2025-10-28",
    "data_devolucao_prevista": "2025-11-11",
    "data_devolucao": null,
    "multa": 0.0,
    "status": "em_andamento"
  },
  {
    "id": 40,
    "exemplar_id": 9,
    "membro_id": 21,
    "funcionario_saida_id": 5,
    "funcionario_entrada_id": 1,
    "data_emprestimo": "2025-10-11",
    "data_devolucao_prevista": "2025-10-25",
    "data_devolucao": "2025-11-02",
    "multa": 12.0,
    "status": "devolvido"
  },
  {
    "id": 41,
    "exemplar_id": 41,
    "membro_id": 1,
    "funcionario_saida_id": 1,
    "funcionario_entrada_id": 4,
    "data_emprestimo": "2025-09-07",
    "data_devolucao_prevista": "2025-09-21",
    "data_devolucao": "2025-09-26",
    "multa": 7.5,
    "status": "devolvido"
  },
  {
    "id": 42,
    "exemplar_id": 52,
    "membro_id": 3,
    "funcionario_saida_id": 1,
    "funcionario_entrada_id": 6,
    "data_emprestimo": "2025-09-23",
    "data_devolucao_prevista": "2025-10-07",
    "data_devolucao": "2025-10-02",
    "multa": 0.0,
    "status": "devolvido"
  },
  {
    "id": 43,
    "exemplar_id": 48,
    "membro_id": 16,
    "funcionario_saida_id": 6,
    "funcionario_entrada_id": 2,
    "data_emprestimo": "2025-10-25",
    "data_devolucao_prevista": "2025-11-08",
    "data_devolucao": "2025-11-12",
    "multa": 6.0,
    "status": "devolvido"
  },
  {
    "id": 44,
    "exemplar_id": 15,
    "membro_id": 24,
    "funcionario_saida_id": 6,
    "funcionario_entrada_id": 3,
    "data_emprestimo": "2025-09-29",
    "data_devolucao_prevista": "2025-10-13",
    "data_devolucao": "2025-10-21",
    "multa": 12.0,
    "status": "devolvido"
  },
  {
    "id": 45,
    "exemplar_id": 50,
    "membro_id": 2,
    "funcionario_saida_id": 2,
    "funcionario_entrada_id": 3,
    "data_emprestimo": "2025-09-09",
    "data_devolucao_prevista": "2025-09-23",
    "data_devolucao": "2025-09-19",
    "multa": 0.0,
    "status": "devolvido"
  }
]);

db.reservas.insertMany([
  {
    "id": 1,
    "livro_id": 9,
    "membro_id": 21,
    "data_reserva": "2025-10-10",
    "status": "cancelada"
  },
  {
    "id": 2,
    "livro_id": 20,
    "membro_id": 19,
    "data_reserva": "2025-11-18",
    "status": "ativa"
  },
  {
    "id": 3,
    "livro_id": 16,
    "membro_id": 2,
    "data_reserva": "2025-10-26",
    "status": "cancelada"
  },
  {
    "id": 4,
    "livro_id": 4,
    "membro_id": 23,
    "data_reserva": "2025-11-13",
    "status": "expirada"
  },
  {
    "id": 5,
    "livro_id": 10,
    "membro_id": 23,
    "data_reserva": "2025-10-24",
    "status": "cancelada"
  },
  {
    "id": 6,
    "livro_id": 15,
    "membro_id": 15,
    "data_reserva": "2025-10-28",
    "status": "ativa"
  },
  {
    "id": 7,
    "livro_id": 18,
    "membro_id": 7,
    "data_reserva": "2025-11-07",
    "status": "ativa"
  },
  {
    "id": 8,
    "livro_id": 16,
    "membro_id": 1,
    "data_reserva": "2025-11-08",
    "status": "expirada"
  },
  {
    "id": 9,
    "livro_id": 3,
    "membro_id": 27,
    "data_reserva": "2025-10-25",
    "status": "expirada"
  },
  {
    "id": 10,
    "livro_id": 9,
    "membro_id": 13,
    "data_reserva": "2025-11-13",
    "status": "cumprida"
  },
  {
    "id": 11,
    "livro_id": 3,
    "membro_id": 19,
    "data_reserva": "2025-11-21",
    "status": "cumprida"
  },
  {
    "id": 12,
    "livro_id": 17,
    "membro_id": 9,
    "data_reserva": "2025-09-27",
    "status": "cancelada"
  },
  {
    "id": 13,
    "livro_id": 5,
    "membro_id": 20,
    "data_reserva": "2025-10-05",
    "status": "cancelada"
  },
  {
    "id": 14,
    "livro_id": 4,
    "membro_id": 23,
    "data_reserva": "2025-11-03",
    "status": "cumprida"
  },
  {
    "id": 15,
    "livro_id": 16,
    "membro_id": 29,
    "data_reserva": "2025-10-01",
    "status": "expirada"
  },
  {
    "id": 16,
    "livro_id": 13,
    "membro_id": 1,
    "data_reserva": "2025-11-16",
    "status": "ativa"
  },
  {
    "id": 17,
    "livro_id": 16,
    "membro_id": 22,
    "data_reserva": "2025-10-29",
    "status": "expirada"
  },
  {
    "id": 18,
    "livro_id": 10,
    "membro_id": 24,
    "data_reserva": "2025-11-17",
    "status": "expirada"
  },
  {
    "id": 19,
    "livro_id": 12,
    "membro_id": 13,
    "data_reserva": "2025-11-06",
    "status": "ativa"
  },
  {
    "id": 20,
    "livro_id": 11,
    "membro_id": 1,
    "data_reserva": "2025-11-06",
    "status": "cancelada"
  }
]);

