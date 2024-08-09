class Product {
    constructor(name, description, price) {
      this.name = name
      this.description = description
      this.price = price
      this.inStock = 0
    }
  
    addToStock(qtd) {
      if (qtd > 0) {
        return this.inStock += qtd
      }
    }

  
    calculateDiscount(porcentagem) {
        const discount = this.price * (porcentagem / 100)
        return this.price - discount
    }
  
    console() {
      console.log(`Nome do produto: ${this.name}`)
      console.log(`Descrição do produto: ${this.description}`)
      console.log(`Valor do produto: R$${this.price.toFixed(2)}`)
      console.log(`Quantidade no estoque: ${this.inStock}`)
    }
  }
  
  // Exemplo de uso
  const product = new Product("Notebook", "Notebook Nitro 5", 1000.00)
  product.addToStock(10)
  product.console()
  
  console.log('==================================');
  
  const porcentagem = 5
  const newPrice = product.calculateDiscount(porcentagem)
  console.log(`Desconto no produto: ${porcentagem}%`)
  console.log(`Novo valor do produto: R$${newPrice.toFixed(2)}`)
