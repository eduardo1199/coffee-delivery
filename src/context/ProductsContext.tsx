import { api } from 'lib/api'
import { ReactNode, createContext, useEffect, useState } from 'react'
import { TypeCoffee } from 'types/productsType'

type Product = {
  id: number
  name: string
  price: number
  type: TypeCoffee[]
  description: string
}

interface ProductContextProps {
  products: Product[]
  quantityOrderSummaryWithCartShopping: number
}

export const ProductsContext = createContext({} as ProductContextProps)

interface ProductContextProviderProps {
  children: ReactNode
}

export function ProductContextProvider({
  children,
}: ProductContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [summaryOrders, setSummaryOrders] = useState<Product[]>([])

  const quantityOrderSummaryWithCartShopping = summaryOrders.length

  useEffect(() => {
    async function getFetchProduct() {
      const products = await api.get<Product[]>('products')

      setProducts(products.data)
    }

    getFetchProduct()
  }, [])

  return (
    <ProductsContext.Provider
      value={{ products, quantityOrderSummaryWithCartShopping }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
