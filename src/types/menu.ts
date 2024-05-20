export interface Menus {
    id: string;
    pid?: string;
    icon?: string;
    index: string;
    title: string;
    permiss?: string;
    children?: Menus[];
}

export interface Menu {
    id: string;
    name?: string;
    pattern?: string;
    permit: string;
}