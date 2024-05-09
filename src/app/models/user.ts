export class User {
    public name: string;
    public email: string;
    public nickname: string;
    public gender: number;
    public cellphone: string;

    constructor(name: string, email: string, nickname: string, gender: number, cellphone: string) {
        this.name = name;
        this.email = email;
        this.nickname = nickname;
        this.gender = gender;
        this.cellphone = cellphone;
    }
}