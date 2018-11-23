export class CD {
  
  contractAddr: string;
  contractAmount: number = 0;
  payerAddr: string;
  payeeAddr: string;
  maturityDate: Date;
  
  constructor( contractAddr: string, contractAmount: number, payerAddr: string, payeeAddr: string, maturityDate: Date) {
    this.contractAddr = contractAddr;
    this.contractAmount = contractAmount;
    this.payerAddr = payerAddr;
    this.payeeAddr = payeeAddr;
    this.maturityDate = maturityDate;
  }
  
}