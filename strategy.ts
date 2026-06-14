interface DiscountStrategy {
  apply(subtotal: number): number;
}

class NoDiscount implements DiscountStrategy {
  apply(subtotal: number): number {
    return subtotal;
  }
}

class PercentageDiscount implements DiscountStrategy {
  private readonly percent: number;

  constructor(percent: number) {
    this.percent = percent;
  }

  apply(subtotal: number): number {
    return subtotal * (1 - this.percent / 100);
  }
}

class FixedDiscount implements DiscountStrategy {
  private readonly amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  apply(subtotal: number): number {
    const total = subtotal - this.amount;
    return Math.max(total, 0);
  }
}

class Cart {
  private readonly subtotal: number;
  private strategy: DiscountStrategy;

  constructor(subtotal: number, strategy: DiscountStrategy) {
    this.subtotal = subtotal;
    this.strategy = strategy;
  }

  setDiscountStrategy(strategy: DiscountStrategy): void {
    this.strategy = strategy;
  }

  total(): number {
    return this.strategy.apply(this.subtotal);
  }
}

function formatarValor(valor: number): string {
  return valor.toFixed(1);
}

export function executarStrategy(): void {
  const carrinho = new Cart(200, new NoDiscount());

  console.log("=== Pattern Comportamental: Strategy ===");
  console.log(`Total (sem desconto): ${formatarValor(carrinho.total())}`);

  carrinho.setDiscountStrategy(new PercentageDiscount(10));
  console.log(`Total (10%): ${formatarValor(carrinho.total())}`);

  carrinho.setDiscountStrategy(new FixedDiscount(20));
  console.log(`Total (-20): ${formatarValor(carrinho.total())}`);
}
