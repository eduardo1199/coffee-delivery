import { api } from 'lib/api'
import { ReactNode, createContext, useEffect, useState } from 'react'

type Product = {
  id: number
  name: string
  price: number
}

interface ProductContextProps {
  products: Product[]
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

  useEffect(() => {
    async function getFetchProduct() {
      const products = await api.get<Product[]>('products')

      setProducts(products.data)
    }

    getFetchProduct()
  }, [])

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}
