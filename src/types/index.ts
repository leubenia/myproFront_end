export {};

declare global {
  namespace Data{
      interface data{
          id: number;
          name: string;
          gitUrl:string;
          content:string;
      }
  }
}