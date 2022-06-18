import create from 'zustand'


export interface ItemCarrinho {
  jogoId: number;
  titulo: string;
  valor: number;
}

interface CarrinhoStorePros {
  carrinho: ItemCarrinho[];
  addItem(item:ItemCarrinho):void;
  removeItem(jogoId:number):void;
  clear():void;
}

export const useCarrinhoStore = create<CarrinhoStorePros>(set => ({
  carrinho: [],
  addItem: (item) => set(state => ({ carrinho:[...state.carrinho.filter(current=>current.jogoId!==item.jogoId), item]  })),
  removeItem: (jogoId) => set(state => ({ carrinho: state.carrinho.filter(current=>current.jogoId!==jogoId) })),
  clear:()=>set({carrinho:[]})
}))