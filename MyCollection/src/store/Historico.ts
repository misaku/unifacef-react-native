import create from 'zustand'
import {api} from '../api';


export interface ItemHitorico {
  jogoId: number;
  titulo: string;
  valor: number;
}

interface HistoricoStorePros {
  historico: ItemHitorico[];
  loadData(userId:number,userEmail:string):Promise<void>;
}

export const useHistoricoStore = create<HistoricoStorePros>(set => ({
  historico: [],
  loadData: async (userId, userEmail) => {
    const response = await api.get('pedidos',{
      params:{
        userId,
        userEmail
      }
    })
    let myHistory:any[] = [];
    myHistory = response.data.map((item: { items: ItemHitorico[]; })=>item.items) || [];

    if(myHistory.length>0){
      myHistory = myHistory.reduce((primeiro: ItemHitorico[], segundo: ItemHitorico[])=>([...primeiro,...segundo]));
    }

    set(state => ({ historico: myHistory as ItemHitorico[]  }))
  },

}))