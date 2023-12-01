/* eslint-disable prettier/prettier */
// game.dto.ts
export class CreateGameDto {
    readonly title: string;
    readonly price: number;
}

export class UpdateGameDto {
    readonly title: string;
    readonly price: number;
    // propriedades do DTO para atualização
}
