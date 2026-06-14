class Personagem {
  public nome: string;
  public classe: string;
  public nivel: number;
  public vida: number;
  public ataque: number;

  constructor(nome: string, classe: string, nivel: number, vida: number, ataque: number) {
    this.nome = nome;
    this.classe = classe;
    this.nivel = nivel;
    this.vida = vida;
    this.ataque = ataque;
  }

  clone(): Personagem {
    return new Personagem(this.nome, this.classe, this.nivel, this.vida, this.ataque);
  }

  exibir(): void {
    console.log(
      `Nome: ${this.nome} | Classe: ${this.classe} | Nível: ${this.nivel} | Vida: ${this.vida} | Ataque: ${this.ataque}`
    );
  }
}

export function executarPrototype(): void {
  const personagemBase = new Personagem("Guerreiro Base", "Guerreiro", 1, 100, 15);

  const arthur = personagemBase.clone();
  arthur.nome = "Arthur";

  const merlin = personagemBase.clone();
  merlin.nome = "Merlin";

  const lancelot = personagemBase.clone();
  lancelot.nome = "Lancelot";

  console.log("=== Pattern Criacional: Prototype ===");
  console.log("=== Personagem Base ===");
  personagemBase.exibir();

  console.log("=== Personagens Clonados ===");
  arthur.exibir();
  merlin.exibir();
  lancelot.exibir();
}
