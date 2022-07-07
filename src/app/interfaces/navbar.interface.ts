export interface MockData {
    name: string;
    id: number;
    parentId?: number | null;
}

export interface NavbarItem {
    name: string;
    id: number;
    submenu: NavbarItem[];
}