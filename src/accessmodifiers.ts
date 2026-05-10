class BankAccount {
  public readonly userId: number;
  public userName: string;
  protected _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  public addBalance(balance: number) {
    this._userBalance = this._userBalance + balance;
  }

  public getBalance() {
    return this._userBalance;
  }
}

class StudentBankAccount extends BankAccount {
  test() {
    console.log(this._userBalance);
  }
}

const mezbaBhaiAccount = new BankAccount(111, "Mezba", 20);

mezbaBhaiAccount.addBalance(100);
mezbaBhaiAccount.addBalance(50);

console.log(mezbaBhaiAccount.getBalance());