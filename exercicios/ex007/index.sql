create table usuario(
    nome varchar(50),
    email varchar(100),
    idade int
);

insert into usuario(nome, email, idade) values (
    "Laís Gabriela", 
    "lala@gmail.com", 
    12
    );

insert into usuario(idade, nome, email) values (
    19,
    "Camilly Beatriz", 
    "milly@gmail.com"
    );

insert into usuario(idade, nome, email) values (
    42,
    "Lúcio Mauro", 
    "lucinho@gmail.com"
    );

insert into usuario(idade, nome, email) values (
    41,
    "Viviane Gomes", 
    "vivi@gmail.com"
    );

select * from usuario where idade = 12;

select * from usuario where nome = "Camilly Beatriz";

select * from usuario where idade >= 18;

delete from usuario where nome = "Lúcio Mauro";

update usuario set email = "camilly@gmail.com" where nome = "Camilly Beatriz";




