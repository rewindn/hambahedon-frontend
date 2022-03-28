export interface CategoryTypes {
    _id: string;
    name: string;
    __v: number;
}

export interface GameItemTypes {
    _id: string;
    status: string;
    name: string;
    thumbnail: string;
    category: CategoryTypes;
}

export interface BankItem {
    __id: string;
    bankName: string;
    name: string;
    noRekening: string;
}

export interface PaymentsItem {
    __id: string;
    type: string;
    status: string;
    banks: BankItem[];
}

export interface NominalsItem {
    __id: string;
    coinQuantity: number;
    coinName: string;
    price: number;
}

export interface LoginTypes {
    email: string;
    passwod: string;
}
