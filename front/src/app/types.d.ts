export interface IProduct {
      id: number;
      name: string;
      price: number;
      stock:number;
      description: string;
      imageUrl: string;
      categoryId:number
}

export interface ICategory {
      id: number;
      name: string;
}

export interface IOrderUser {
      id: number;
      name:string
      email:string
      address:string
      phone:string
      role: 'adimn' | 'user'
}

export interface IUser{
      email:string
      password:string
      name:string
      address: string
      phone: string
}

export interface IOrder {
      status: 'approved' | 'pending' | 'rejected'
      date:string
      products: IProduct[]
      id:number
}

export interface IProfile {
      email:string
      password:string
}

export interface LoginProps {
      email:string;
      password:string
}

export interface LoginErrorProps {
      email?:string;
      password?:string
}

export interface RegisterProps {
      email:string
      password:string
      confirmPassword:string
      name:string
      address:string
      phone:string
}

export interface RegisterErrorProps {
      email?:string
      password?:string
      confirmPassword?:string
      name?:string
      address?:string
      phone?:string
}