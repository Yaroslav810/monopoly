export class Player {
    private readonly id!: string
    private readonly gameId!: string
    private name!: string

    constructor(id: string, gameId: string, name: string) {
        this.id = id
        this.gameId = gameId
        this.name = name
    }

    public getId(): string {
        return this.id
    }

    public getGameId(): string {
        return this.gameId
    }

    public getName(): string {
        return this.name
    }

    public setName(name: string): void {
        this.name = name
    }
}
