export enum CreditStatus {
    EN_COURS = 'EN_COURS',
    ACCEPTE = 'ACCEPTE',
    REJETE = 'REJETE'
}

export enum CreditType {
    PERSONNEL = 'PERSONNEL',
    IMMOBILIER = 'IMMOBILIER',
    PROFESSIONNEL = 'PROFESSIONNEL'
}

export enum ClientType {
    PARTICULIER = 'PARTICULIER',
    PROFESSIONNEL = 'PROFESSIONNEL',
    ENTREPRISE = 'ENTREPRISE'
}

export enum RemboursementType {
    MENSUALITE = 'MENSUALITE',
    REMBOURSEMENT_ANTICIPE = 'REMBOURSEMENT_ANTICIPE'
}

export enum TypeBienImmobilier {
    APPARTEMENT = 'APPARTEMENT',
    MAISON = 'MAISON',
    LOCAL_COMMERCIAL = 'LOCAL_COMMERCIAL'
}

export enum UserRole {
    ROLE_CLIENT = 'ROLE_CLIENT',
    ROLE_EMPLOYE = 'ROLE_EMPLOYE',
    ROLE_ADMIN = 'ROLE_ADMIN'
}

export interface User {
    id: number;
    username: string;
    email: string;
    roles: UserRole[];
}

export interface LoginRequest {
    username: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    user: User;
}

export interface Client {
    id: number;
    nom: string;
    email: string;
    type: ClientType;
    user?: User;
}

export interface Credit {
    id: number;
    dateDemande: Date;
    statut: CreditStatus;
    dateAcceptation?: Date;
    montant: number;
    dureeRemboursement: number;
    tauxInteret: number;
    client: Client;
    remboursements: Remboursement[];
}

export interface CreditPersonnel extends Credit {
    motif: string;
}

export interface CreditImmobilier extends Credit {
    typeBien: TypeBienImmobilier;
}

export interface CreditProfessionnel extends Credit {
    motif: string;
    raisonSociale: string;
}

export interface Remboursement {
    id: number;
    date: Date;
    montant: number;
    type: RemboursementType;
    credit: Credit;
} 