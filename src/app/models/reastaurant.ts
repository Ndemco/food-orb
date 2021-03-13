import {MenuItem} from './menuItem';
export interface Restaurant {
   id: number,
   
   name: string,

   rating: number,

   menu: MenuItem[]

   thumbnailUrl: string
} 