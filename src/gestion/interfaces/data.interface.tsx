export interface Data {
    empresaEntregaPedidos: EmpresaEntregaPedidos;
    sucursales:            Sucursale[];
}

export interface EmpresaEntregaPedidos {
    nombre?:    string;
    direccion?: string;
    telefono?:  string;
    logo?:      string;
    i?: number;
}

export interface Sucursale {
    nombreSucursal:    string;
    direccionSucursal: string;
    clientes:          Cliente[];
}

export interface Cliente {
    nombreCliente:               string;
    direccion:                   string;
    telefono:                    string;
    numeroEncomiendasEntregadas: number;
}
